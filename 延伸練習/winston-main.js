import winston, { createLogger } from "winston";

const logger = createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.simple()
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({
            filename: 'logs.log',
            level: 'info',
        })
    ]
})

logger.info('伺服器啟動中...');
logger.warn('記憶體使用過高');
logger.error('API 連線失敗');