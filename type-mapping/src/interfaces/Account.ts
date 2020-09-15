//
// Interfaces that match what is intended to be returned from a lambda
//

enum AccountType {
    PREMIUM = 'PREMIUM',
    STANDARD = 'STANDARD',
    DEMO = 'DEMO',
}

enum TransactionType {
    SEND = 'SEND',
    RECIEVE = 'RECEIVE',
    DEPOSIT = 'DEPOSIT'
}

interface Transaction {
    id: string
    type: TransactionType
    amount: number,
    transactionDate: string
    destinationAccountId?: string
    sendingAccountId?: string
}

interface Account {
    userId: string
    firstName: string
    lastName: string
    accountId: string
    accountType: AccountType,
    createdOnDate: string
    transactions: Array<Transaction>
}

export {
    Account,
    Transaction,
    TransactionType,
    AccountType,
}
