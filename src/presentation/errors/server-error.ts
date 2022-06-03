export class ServerError extends Error {
  constructor () {
    super('Internal Server Error') // Generic message
    this.name = 'ServerError'
  }
}
