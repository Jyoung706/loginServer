class BadRequestError extends Error {
  private statusCode: number;
  constructor(message: string) {
    super(message);
    this.name = "BadRequestError";
    Error.captureStackTrace(this);
    this.statusCode = 400;
  }
}

export { BadRequestError };
