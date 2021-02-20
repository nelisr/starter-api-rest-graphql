import dayjs from 'dayjs'
import logger from 'node-color-log'

function convertToLog (value: unknown | unknown[]) {
  let convertedValue

  if (Array.isArray(value)) {
    convertedValue = value.toString()
  } else if (typeof value === 'string') {
    convertedValue = value
  } else {
    convertedValue = JSON.stringify(value)
  }

  return convertedValue
}

function log (
  tsFileName: string,
  functionName: string,
  line: string,
  value: unknown | unknown[]
): void {
  logger
    .log('[')
    .joint()
    .color('magenta')
    .log(tsFileName)
    .joint()
    .log(']')
    .joint()
    .log('[')
    .joint()
    .color('magenta')
    .log(`Function: ${functionName}`)
    .joint()
    .log(']')
    .joint()
    .joint()
    .log('[')
    .joint()
    .color('white')
    .log(`Line: ${line}`)
    .joint()
    .log(']\t')
    .joint()
    .color('white')
    .log(` ${dayjs().format('DD-MM-YYYY HH:mm')}`)
    .joint()
    .color('green')
    .log(` ${convertToLog(value)}`)
}

function debug (...value: unknown[]): void {
  logger
    .log('[')
    .joint()
    .color('green')
    .log('API')
    .joint()
    .log(']')
    .joint()
    .log('[')
    .joint()
    .color('cyan')
    .log('DEBUG')
    .joint()
    .log(']\t')
    .joint()
    .color('white')
    .log(` ${dayjs().format('DD-MM-YYYY HH:mm')}`)
    .joint()
    .color('cyan')
    .log(` ${convertToLog(value)}`)
}

function error (...value: unknown[]): void {
  logger
    .log('[')
    .joint()
    .color('green')
    .log('API')
    .joint()
    .log(']')
    .joint()
    .log('[')
    .joint()
    .color('red')
    .log('ERROR')
    .joint()
    .log(']\t')
    .joint()
    .color('white')
    .log(` ${dayjs().format('DD-MM-YYYY HH:mm')}`)
    .joint()
    .color('red')
    .log(` ${convertToLog(value)}`)
}

function info (...value: unknown[]): void {
  logger
    .log('[')
    .joint()
    .color('green')
    .log('API')
    .joint()
    .log(']')
    .joint()
    .log('[')
    .joint()
    .color('white')
    .log('INFO')
    .joint()
    .log(']\t')
    .joint()
    .color('white')
    .log(` ${dayjs().format('DD-MM-YYYY HH:mm')}`)
    .joint()
    .color('white')
    .log(` ${convertToLog(value)}`)
}

function warn (...value: unknown[]): void {
  logger
    .log('[')
    .joint()
    .color('green')
    .log('API')
    .joint()
    .log(']')
    .joint()
    .log('[')
    .joint()
    .color('yellow')
    .log('WARN')
    .joint()
    .log(']\t')
    .joint()
    .color('white')
    .log(` ${dayjs().format('DD-MM-YYYY HH:mm')}`)
    .joint()
    .color('yellow')
    .log(` ${convertToLog(value)}`)
}

export default { debug, error, info, warn, log }
