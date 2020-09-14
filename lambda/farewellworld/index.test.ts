import { farewellBuilder } from './index'

describe('when invoked with a target in the request body', () => {
    let response: {
        statusCode: number,
        body: string
    }

    beforeEach(async () => {
        const testEvent = {
            body: {
                target: 'World'
            }
        }
        response = await farewellBuilder(testEvent)
    })

    it('should return a constructed farewell', () => {
        expect(JSON.parse(response.body)).toMatchObject({
            farewell: 'Farewell World!'
        })
    })

    it('should return a 200 response code', () => {
        expect(response.statusCode).toEqual(200)
    })
})
