import { createSchema } from 'morphism'

import { Transaction, TransactionType } from '../interfaces/Account'
import { ApiTransaction } from '../interfaces/ApiAccount'

const ApiTransactionToTransaction = createSchema<Transaction, ApiTransaction>({
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

export default ApiTransactionToTransaction
