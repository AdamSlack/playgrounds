//
// Interfaces that match data from the API
//
interface ApiUser {
    id: string,
    name: {
        first: string,
        last: string
    },
}

interface ApiTransaction {
    id: string
    type: string,
    amount: number,
    timestamp: number,
    destinationAccount?: string
    sendingAccount?: string
}

interface ApiAccount {
    id: string
    user: ApiUser
    creationTimestamp: number
    accountType: string
    transactions: Array<ApiTransaction>
}

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


export {
    ApiAccount,
    ApiUser,
    ApiTransaction,
    Account,
    Transaction,
    TransactionType,
    AccountType,
    exampleApiData,
    exampleData
}
