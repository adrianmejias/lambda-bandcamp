// responder.js
module.exports = {
    success: (result) => {
        return {
            isBase64Encoded: false,
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true
            },
            body: JSON.stringify(result)
        }
    },
    internalServerError: (msg) => {
        return {
            isBase64Encoded: false,
            statusCode: 500,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*', 
                'Access-Control-Allow-Credentials': true
            },
            body: JSON.stringify({
                statusCode: 500,
                error: 'Internal Server Error',
                internalError: JSON.stringify(msg)
            }),
        }
    }
};