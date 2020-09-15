import axios from 'axios'
import { morphism, createSchema } from 'morphism'

import { Account, AccountType, ApiAccount, ApiTransaction, Transaction, TransactionType } from './SimpleData'


const transactionSchema = createSchema<Transaction, ApiTransaction>({
    id: 'id',
    destinationAccountId: 'destinationAccount',
    sendingAccountId: 'sourceAccount',
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


const handler = async () : Promise<Account> => {
    const apiAccount = (await axios.get('some-fake-url.com')).data
    return morphism(accountSchema, apiAccount)
}


export {
    handler
}
