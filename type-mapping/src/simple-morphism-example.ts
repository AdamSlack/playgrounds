import middy from '@middy/core'
import axios from 'axios'

import { ApiAccount } from './interfaces/ApiAccount'
import TransformApiAccountToAccount from './middleware/TransformApiAccountToAccount'

const fetchAccount = async () : Promise<ApiAccount> => {
    const apiAccount = (await axios.get('some-fake-url.com')).data
    return apiAccount
}

const handler = middy(fetchAccount)
.use(TransformApiAccountToAccount())

export {
    fetchAccount,
    handler
}
