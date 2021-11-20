exports.handler = async (event) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify("Hello from Lambda and Github. This is a test done on November 2021 and looks like it works :) !"),
  }
  return response
}
