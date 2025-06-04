import md5 from 'md5'
/*
* 数据库初始化操作,判断user表是否存在admin用户,如果不存在,则为创建时间最早切没有被删除的用户标记为admin
* */
import User from '@/schema/user'

export const setAdminUser = () => {
  User.findOne({
    where: {
      isAdmin: true
    }
  })
    .then(res => {
      if (!res) {
        console.log('添加admin用户')
      User.create({
        userName: process.env.ADMIN_USER_NAME,
        password: md5(process.env.ADMIN_USER_PASSWORD),
        isAdmin: true
      })
      }
    })
}