export default function (event, context, callback) {
    return callback(null, {
        statusCode: 200,
        body: 'Hello!',
        headers: { 'Content-Type': 'text/plain' }
    });
};
