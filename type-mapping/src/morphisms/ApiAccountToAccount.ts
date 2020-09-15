import { createSchema, morphism } from 'morphism'
import { Account, AccountType } from '../interfaces/Account'
import { ApiAccount } from '../interfaces/ApiAccount'
import ApiTransactionToTransaction from './ApiTransactionToTransaction'

const ApiAccountToAccount = createSchema<Account, ApiAccount>({
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
    transactions: (source) => morphism(ApiTransactionToTransaction, source.transactions)
})

export default ApiAccountToAccount
