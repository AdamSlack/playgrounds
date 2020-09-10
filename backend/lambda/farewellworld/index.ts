import middy from '@middy/core'
import jsonBodyParser from '@middy/http-json-body-parser'

const farewellBuilder = async (event: { body: { target: string }}): Promise<{ body: string, statusCode: number}> => {
    console.log(event)

    const { target } = event.body
    const farewell = `Farewell ${target}!`
    console.log(farewell)

    return { body: JSON.stringify({ farewell }), statusCode: 200 }
}

const handler = middy(farewellBuilder)
    .use(jsonBodyParser())

export { handler }
