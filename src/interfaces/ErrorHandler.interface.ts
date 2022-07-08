export default interface ErrorHandler {
  isJoi: boolean,
  statusCode: number,
  message: string,
  details: { message: string, type: string }[],
}