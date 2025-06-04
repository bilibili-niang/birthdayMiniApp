import { Column, DataType, Default, IsEmail, IsUrl, Length, Table, Unique } from 'sequelize-typescript'
import BaseModel from '@/schema/baseModal'

@Table({
  tableName: 'user',
  paranoid: true
  // 启用软删除
})
export default class User extends BaseModel {

  @Default(1)
  @Column({
    type: DataType.INTEGER,
    comment: '角色id'
  })
  declare roleId: string

  @Default(false)
  @Column({
    type: DataType.BOOLEAN,
    comment: '是否是管理员'
  })
  declare isAdmin: boolean

  @Length({
    min: 2,
    max: 10,
    msg: 'userName must between 2 to 10 characters'
  })
  @Column({
    type: DataType.STRING,
    comment: '用户名称'
  })
  declare userName: string
  @Column({
    type: DataType.STRING,
    comment: '密码'
  })
  declare password: string

  @IsUrl
  @Column({
    type: DataType.STRING,
    comment: '用户头像URL',
    allowNull: true
  })
  declare avatar: string

  @Column({
    type: DataType.STRING(11),
    comment: '手机号',
    allowNull: true,
    validate: {
      is: /^1[3-9]\d{9}$/
    }
  })
  declare phoneNumber: string

  @IsEmail
  @Column({
    type: DataType.STRING,
    comment: '邮箱',
    allowNull: true
  })
  declare email: string

  @Default('保密')
  @Column({
    type: DataType.ENUM('男', '女', '保密'),
    comment: '性别',
  })
  declare gender: string
}