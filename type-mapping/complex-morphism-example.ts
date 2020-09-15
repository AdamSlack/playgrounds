import axios from 'axios'
import { morphism, createSchema } from 'morphism'

import { ApiResponse, Record, MappedApiResponse, RecordType } from "./ComplexData"



// With a more complex transformation, e.g. Single Object with an Array, to an Array with duplicated values, it's not immediately obvious what the best route is.
// a single schema won't quite cut it, and even then, it has the same complexity as just writing a function to perform the transformation.
const schema = createSchema<{ mappedRecords: Array<MappedApiResponse> }, ApiResponse>({
    mappedRecords: {
        path: 'records',
        fn: (records: Array<Record>) => records.map((record): MappedApiResponse => ({
            id: 'id',
            recordId: record.id,

            // This doesn't work, it seems you cannot have a nested ActionSelector
            lastModifiedDate: {
                path: 'lastModifiedTimestamp',
                fn: (lastModifiedTimestamp) => new Date(lastModifiedTimestamp).toISOString(),
            },

            description: 'description',
            createdOnDate: new Date(record.createdOnTimestamp).toISOString(),
            recordType: record.type as RecordType,
            recordStatus: record.status
        }))
    }
})

const handler = async () : Promise<Array<MappedApiResponse>> => {
    const apiResponse : ApiResponse = await (await axios.get<ApiResponse>('https://some-fake-url.com')).data
    const mappedRes =  morphism(schema, apiResponse)
    console.log(mappedRes)
    return mappedRes.mappedRecords
}

export {
    handler
}
