class HTTPError extends Error {
  constructor(message: string, public statusCode: number) {
    super(message);
    Object.setPrototypeOf(this, HTTPError.prototype);
  }
}

export { HTTPError };
