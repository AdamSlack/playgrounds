import middy from '@middy/core'
import jsonBodyParser from '@middy/http-json-body-parser'

const greetingBuilder = async (event: { body: { target: string }}): Promise<{ body: string, statusCode: number}> => {
    console.log(event)

    const { target } = event.body
    const greeting = `Hello ${target}!`
    console.log(greeting)

    return { body: JSON.stringify({ greeting }), statusCode: 200 }
}

const handler = middy(greetingBuilder)
    .use(jsonBodyParser())

export { handler }
