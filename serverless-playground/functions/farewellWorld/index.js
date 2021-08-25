const handler = async () => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            farewell: "Farewell World!"
        })
    }
}

module.exports =  { handler }
