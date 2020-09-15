enum RecordStatus {
    DRAFT,
    IN_PROGRESS,
    COMPLETED
}
interface Record {
    id: string,
    createdOnTimestamp: number,
    type: string
    status: RecordStatus
}

interface ApiResponse {
    id: string
    lastModifiedTimestamp: number
    description: string
    records: Array<Record>
}

enum RecordType {
    APPLICATION = 'APPLICATION',
    DECISION = 'DECISION',
    QUERY = 'QUERY'
}

interface MappedApiResponse {
    id: string
    recordId: string
    lastModifiedDate: string
    description: string
    createdOnDate: string,
    recordType: RecordType
    recordStatus: RecordStatus
}

// Example Incoming data
const exampleApiResponse : ApiResponse = {
    id: '1234-abcdef-5678',
    lastModifiedTimestamp: 1600160351015,
    description: 'this is a fake api response that has been received from a 3rd party',
    records: [
        {
            id: '1',
            createdOnTimestamp: 1600160340000,
            type: 'APPLICATION',
            status: RecordStatus.COMPLETED
        },
        {
            id: '2',
            createdOnTimestamp: 1600160350000,
            type: 'DECISION',
            status: RecordStatus.IN_PROGRESS
        }
    ]
}

// example outgoing data
const exampleMappedApiResponse : Array<MappedApiResponse> = [
    {
        id: '1234-abcdef-5678',
        recordId: '1',
        lastModifiedDate: '2020-09-15T08:59:11.015Z',
        description: 'this is a fake api response that has been received from a 3rd party',
        createdOnDate: '2020-09-15T08:59:00.000Z',
        recordType: RecordType.APPLICATION,
        recordStatus: RecordStatus.COMPLETED
    },
    {
        id: '1234-abcdef-5678',
        recordId: '1',
        lastModifiedDate: '2020-09-15T08:59:11.015Z',
        description: 'this is a fake api response that has been received from a 3rd party',
        createdOnDate: '2020-09-15T08:59:10.000Z',
        recordType: RecordType.DECISION,
        recordStatus: RecordStatus.IN_PROGRESS
    }
]

export {
    ApiResponse,
    Record,
    RecordStatus,
    MappedApiResponse,
    RecordType,
    exampleMappedApiResponse,
    exampleApiResponse
}
