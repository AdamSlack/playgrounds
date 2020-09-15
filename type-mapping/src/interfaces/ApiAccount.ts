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

export {
    ApiAccount,
    ApiUser,
    ApiTransaction,
}
