import { Callback, Context } from 'aws-lambda'
import axios from 'axios'
import { handler, fetchAccount } from '../src/simple-morphism-example'
import { Account, AccountType, TransactionType } from '../src/interfaces/Account'
import { ApiAccount } from '../src/interfaces/ApiAccount'

const mockAxiosGet = jest.spyOn(axios, 'get')

const exampleApiData : ApiAccount = {
    id: '1234-abcdef-5678',
    user: {
        id: 'abcd-123435-efgh',
        name: {
            first: 'pepsi',
            last: 'max'
        }
    },
    accountType: 'STANDARD',
    creationTimestamp: 1600160351015,
    transactions: [
        {
            id: '1',
            type: 'RECEIVE',
            amount: 1000.50,
            sendingAccount: '4321-fedcba-8765',
            timestamp: 1600160340000,
        }
    ]
}

const exampleData : Account  = {
    accountId: '1234-abcdef-5678',
    userId: 'abcd-123435-efgh',
    firstName: 'pepsi',
    lastName: 'max',
    accountType: AccountType.STANDARD,
    createdOnDate: '2020-09-15T08:59:11.015Z',
    transactions: [
        {
            id: '1',
            type: TransactionType.RECIEVE,
            amount: 1000.50,
            sendingAccountId: '4321-fedcba-8765',
            transactionDate: '2020-09-15T08:59:00.000Z',
        }
    ]
}

describe('when external api returns valid data', () => {
    describe('when using the handler directly', () => {
        let handlerResponse : ApiAccount

        beforeEach(async () => {
            mockAxiosGet.mockResolvedValueOnce({ data: exampleApiData })
            handlerResponse = await fetchAccount()
        })

        it('should return untransformed data', () => {
            expect(handlerResponse).toEqual(exampleApiData)
        })
    })

    describe('when using the handler via middleware', () => {
        let handlerResponse : Account | ApiAccount | void

        beforeEach(async () => {
            mockAxiosGet.mockResolvedValueOnce({ data: exampleApiData })
            handlerResponse = await handler({}, {} as Context, null as unknown as Callback)
        }, 10000)

        it('should return transformed data', () => {
            expect(handlerResponse).toEqual(exampleData)
        })
    })
})

describe('when external api returns data with missing expected fields', () => {
    const { user, ...exampleApiDataWithoutUser } = exampleApiData

    describe('when using the handler directly', () => {
        let handlerResponse : ApiAccount

        beforeEach(async () => {
            mockAxiosGet.mockResolvedValueOnce({ data: exampleApiDataWithoutUser })
            handlerResponse = await fetchAccount()
        })

        it('should return untransformed data', () => {
            expect(handlerResponse).toEqual(exampleApiDataWithoutUser)
        })
    })

    describe('when using the handler via middleware', () => {
        let handlerResponse : Account | ApiAccount | void

        beforeEach(async () => {
            mockAxiosGet.mockResolvedValueOnce({ data: exampleApiDataWithoutUser })
            handlerResponse = await handler({}, {} as Context, null as unknown as Callback)
        }, 10000)

        it('should return data transformed where it can leaving missing fields undefined', () => {
            const { firstName, userId, lastName, ...exampleDataWithoutUser } = exampleData
            expect(handlerResponse).toEqual(exampleDataWithoutUser)
        })
    })
})


describe('when external api returns data with fields of an unexpected type', () => {
    const exampleApiDataWithDateJSON = {
        ...exampleApiData,
        creationTimestamp: {
            day: '01',
            month: '01',
            year: '2020'
        }
    }

    describe('when using the handler directly', () => {
        let handlerResponse : ApiAccount

        beforeEach(async () => {
            mockAxiosGet.mockResolvedValueOnce({ data: exampleApiDataWithDateJSON })
            handlerResponse = await fetchAccount()
        })

        it('should return untransformed data', () => {
            expect(handlerResponse).toEqual(exampleApiDataWithDateJSON)
        })
    })

    describe('when using the handler via middleware', () => {
        let handlerError: RangeError
        beforeEach(async () => {
            mockAxiosGet.mockResolvedValueOnce({ data: exampleApiDataWithDateJSON })
            try {
                await handler({}, {} as Context, null as unknown as Callback)
            } catch (err) {
                handlerError = err
            }
        }, 10000)

        it('should throw an exception', () => {
            expect(handlerError.message).toContain('Unable to set target property [createdOnDate].')
        })
    })
})
