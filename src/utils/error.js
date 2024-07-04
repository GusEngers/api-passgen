class ResponseError extends Error {
  constructor(message, statusCode = 400) {
    super(message);
    this.statusCode = statusCode;
    this.response = { message: this.message, statusCode: this.statusCode };
  }
}

module.exports = ResponseError;
