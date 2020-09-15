import { morphism, createSchema } from 'morphism'
import middy from '@middy/core'

import { Account, AccountType, Transaction, TransactionType } from '../interfaces/Account'
import { ApiAccount, ApiTransaction } from '../interfaces/ApiAccount'

const transactionSchema = createSchema<Transaction, ApiTransaction>({
    id: 'id',
    destinationAccountId: 'destinationAccount',
    sendingAccountId: 'sendingAccount',
    transactionDate: {
        path: 'timestamp',
        fn: (timestamp) => new Date(timestamp).toISOString()
    },
    type: {
        path: 'type',
        fn: (type) => type as TransactionType
    },
    amount: 'amount'
})

const accountSchema = createSchema<Account, ApiAccount>({
    userId: 'user.id',
    accountId: 'id',
    createdOnDate: {
        path: 'creationTimestamp',
        fn: (creationTimestamp) => new Date(creationTimestamp).toISOString()
    },
    firstName: 'user.name.first',
    lastName: 'user.name.last',
    accountType: {
        path: 'accountType',
        fn: (accountType) => accountType as AccountType
    },
    transactions: (source) => morphism(transactionSchema, source.transactions)
})

class TransformApiAccountToAccount implements middy.MiddlewareObject<any, any, any> {
    constructor () {}

    public static create (): TransformApiAccountToAccount {
        return new TransformApiAccountToAccount()
    }

    public after: middy.MiddlewareFunction<any, any> = async (handler: middy.HandlerLambda) => {
        handler.response = morphism(accountSchema, handler.response)
        return
    }
}

export default TransformApiAccountToAccount.create
