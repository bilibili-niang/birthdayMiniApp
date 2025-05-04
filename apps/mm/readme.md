> 商家核销的微信小程序

> 本地存储信息说明：

- token 该手机号可以选择的商铺列表
- storeId 该用户选择的商铺 id,从 token 中获取的
- storeData 商户 id 为 storeId 的信息
- Blade-Auth 部分请求头需要存在的字段,从 storeData 中获取
- location 用户经纬度,部分请求会用到,使用`withLocation`控制是否携带,默认不带
- appMode 小程序的应用模式

```shell
pnpm i
npm run dev:weapp

// 下面两种都会压缩代码,不适合开发调试
//上线测试环境:
npm run devForCompress:wxapp
//上线正式环境:
dev2:wxapp
```
