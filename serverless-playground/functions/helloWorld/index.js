const handler = async () => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            greeting: "Hello World!"
        })
    }
}

module.exports = { handler }
