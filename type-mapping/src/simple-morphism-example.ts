import middy from '@middy/core'
import axios from 'axios'

import { TransformObject } from './middleware'
import { ApiAccountToAccount } from './morphisms'
import { ApiAccount } from './interfaces/ApiAccount'
import { Account } from './interfaces/Account'

const fetchAccount = async () : Promise<ApiAccount> => {
    const apiAccount = (await axios.get('some-fake-url.com')).data
    return apiAccount
}

const handler = middy(fetchAccount)
.use(TransformObject<Account, ApiAccount>(ApiAccountToAccount))

export {
    fetchAccount,
    handler
}
