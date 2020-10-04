// only works with netlify-lambda because it uses ES module syntax
export async function handler(event, context) {
  const subject = event.queryStringParameters.name || 'World'
  return {
    statusCode: 200,
    body: `Hello ${subject}!`,
  }
}