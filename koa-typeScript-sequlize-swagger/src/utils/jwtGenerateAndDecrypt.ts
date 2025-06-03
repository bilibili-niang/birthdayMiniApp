// const jwt = require('jsonwebtoken')
import jwt from 'jsonwebtoken'

/*
* jwt 加密
* @param {object} data - 需要加密的数据
* @param {string} expirationTime - 过期时间
* @return {string} - 加密后的token
* */
export const jwtEncryption = (data: object, expirationTime: string = '20s') => {
  return jwt.sign(data, 'secret', { expiresIn: expirationTime })
}

/*
* jwt 解密
* @param {string} token - 需要解密的token
* @return {object} - 解密后的数据
* */
export const jwtDecryption = (token: string) => {
  return jwt.verify(token, 'secret')
}