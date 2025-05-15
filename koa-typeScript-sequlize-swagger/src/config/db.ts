import { Sequelize } from 'sequelize-typescript'
import User from '@/schema/user'
import * as process from 'node:process'
import * as mysql from 'mysql2/promise'
import { info } from './log4j'

// 根据环境确定数据库名称
const NODE_ENV = process.env.NODE_ENV || 'local'; // 默认使用 local 环境
console.log('NODE_ENV:');
console.log(NODE_ENV);

// 根据运行环境选择不同的数据库名称
const getDatabaseName = () => {
  // 如果是测试环境，使用测试数据库
  if (NODE_ENV === 'local') {
    return 'birthdayDb_test';
  }
  // 如果是生产环境，使用正式环境数据库
  return 'birthdayDb';
};

// 获取最终使用的数据库名称
const DATABASE_NAME = getDatabaseName();

// 记录当前环境和使用的数据库
info(`当前运行环境: ${NODE_ENV}`);
info(`使用数据库: ${DATABASE_NAME}`);

//实例化对象
const seq = new Sequelize(DATABASE_NAME, process.env.USER_NAME, process.env.DATABASE_PASSWORD, {
    dialect: 'mysql',
    port: Number(process.env.DATABASE_PORT),
    logging: false,
    models: [User]
  })

;(async () => {
  try {
    // 先创建数据库（如果不存在）
    const tempConnection = await mysql.createConnection({
      host: process.env.DATABASE_HOST || '127.0.0.1',
      port: Number(process.env.DATABASE_PORT) || 3306,
      user: process.env.USER_NAME,
      password: process.env.DATABASE_PASSWORD
    });
    
    info('尝试创建数据库（如果不存在）...');
    await tempConnection.query(`CREATE DATABASE IF NOT EXISTS \`${DATABASE_NAME}\` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;`);
    await tempConnection.end();
    info(`数据库 ${DATABASE_NAME} 检查/创建完成`);
    
    // 然后连接到数据库并创建表
    await seq.sync()
    console.log('数据库表结构创建/更新完成！')
  } catch (error) {
    console.error('无法连接或初始化数据库:', error)
  }
})()

export default seq