export default class ErrorHandler extends Error {
  private status: number
  private error: string
  private timestamp: Date

  constructor (error: string, status: number, message: string) {
    super()
    this.error = error
    this.status = status
    this.message = message
    this.timestamp = new Date()
  }
}
