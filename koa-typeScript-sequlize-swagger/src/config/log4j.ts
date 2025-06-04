// log4js的配置
import * as log4js from 'log4js'
import path from 'path'
import fs from 'fs'

// 假设当前文件所在的目录为基准，指定统一的日志文件夹
const logDirectory = path.join(path.resolve(__dirname, '../..'), 'src', 'logs')

// 确保日志文件夹存在
if (!fs.existsSync(logDirectory)) {
  fs.mkdirSync(logDirectory)
}

// 格式化时间
const formatTime = () => {
  const date = new Date()
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')
  const seconds = String(date.getSeconds()).padStart(2, '0')
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
}

// 自定义日期格式转换器
log4js.addLayout('customJson', function () {
  return function (logEvent) {
    // 使用自定义格式化日期
    const date = new Date(logEvent.startTime)
    const formattedDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')} ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}:${String(date.getSeconds()).padStart(2, '0')}.${String(date.getMilliseconds()).padStart(3, '0')}`

    return `[${formattedDate}] ${logEvent.data.join(' ')}`
  }
})

log4js.configure({
  appenders: {
    console: {
      type: 'console',
      layout: {
        type: 'customJson'
      }
    },
    // 详细日志文件 - 记录所有调试信息（trace + debug）
    detailLog: {
      type: 'file',
      filename: path.join(logDirectory, 'detail.log'),
      layout: {
        type: 'customJson'
      }
    },
    // 普通日志文件 - 记录一般信息（info）
    normalLog: {
      type: 'file',
      filename: path.join(logDirectory, 'normal.log'),
      layout: {
        type: 'customJson'
      }
    },
    // 警告日志文件 - 记录警告和错误（warn + error + fatal）
    warnErrorLog: {
      type: 'file',
      filename: path.join(logDirectory, 'warn_error.log'),
      layout: {
        type: 'customJson'
      }
    }
  },
  categories: {
    trace: { appenders: ['detailLog', 'console'], level: 'trace' },
    debug: { appenders: ['detailLog', 'console'], level: 'debug' },
    info: { appenders: ['normalLog', 'console'], level: 'info' },
    warn: { appenders: ['warnErrorLog', 'console'], level: 'warn' },
    error: { appenders: ['warnErrorLog', 'console'], level: 'error' },
    fatal: { appenders: ['warnErrorLog', 'console'], level: 'fatal' },
    default: { appenders: ['console'], level: 'info' }
  }
})

// 获取特定类别的 logger 和定义日志函数等保持不变...

// 获取特定类别的 logger
const traceLogger = log4js.getLogger('trace')
const debugLogger = log4js.getLogger('debug')
const infoLogger = log4js.getLogger('info')
const warnLogger = log4js.getLogger('warn')
const errorLogger = log4js.getLogger('error')
const fatalLogger = log4js.getLogger('fatal')

interface LogContext {
  ip?: string;

  [key: string]: any;
}

const formatMessage = (message: string, context?: LogContext) => {
  if (context?.ip) {
    return `[IP:${context.ip}] ${message}`
  }
  return message
}

const trace = (e: string, context?: LogContext) => {
  traceLogger.trace(formatMessage(e, context))
}

const debug = (e: string, context?: LogContext) => {
  debugLogger.debug(formatMessage(e, context))
}

const info = (e: string, context?: LogContext) => {
  infoLogger.info(formatMessage(e, context))
}

const warn = (e: string, context?: LogContext) => {
  warnLogger.warn(formatMessage(e, context))
}

const error = (e: string, context?: LogContext) => {
  errorLogger.error(formatMessage(e, context))
}

const fatal = (e: string, context?: LogContext) => {
  fatalLogger.fatal(formatMessage(e, context))
}

// 初始化日志文件
const initLogFiles = () => {
  info('======================================')
  info('日志系统初始化完成')
  info('日志文件说明：')
  info('- detail.log: 详细日志，包含 trace 和 debug 级别的所有信息，用于调试和跟踪请求')
  info('- normal.log: 普通日志，包含一般信息 (info 级别)，如系统启动、配置加载等')
  info('- warn_error.log: 警告和错误日志，包含 warn、error 和 fatal 级别的信息，用于监控系统异常')
  info('日志中包含访问者IP地址信息，可用于分析和安全监控')
  info('======================================')

  trace('详细日志文件初始化完成，用于记录 trace 和 debug 级别的详细信息')
  info('普通日志文件初始化完成，用于记录一般信息')
  warn('警告和错误日志文件初始化完成，用于记录系统异常')
}

// initLogFiles()

// 导出日志函数
export {
  trace,
  debug,
  info,
  warn,
  error,
  fatal
}