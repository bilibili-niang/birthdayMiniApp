import { TENCENT_MAP_KEY } from '@kacat/config'
import jsonp from 'jsonp'

/**
 * 获取坐标逆解析详情
 * poi_options.policy = 3，适用于出行
 *
 * */
export const $getLocationDetails = (location: { lng: number; lat: number }) => {
  return new Promise((resolve, reject) => {
    const url = `https://apis.map.qq.com/ws/geocoder/v1/?key=${TENCENT_MAP_KEY}&location=${location.lat},${location.lng}&get_poi=1&poi_options=policy=1/3;radius=500&output=jsonp`
    if (process.env.NODE_ENV === 'development') {
      console.log(url)
    }
    return jsonp(url, {}, (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

export const $searchNearbyPoints = (options: { keywords: string; lng: number; lat: number }) => {
  return new Promise((resolve, reject) => {
    const url = `https://apis.map.qq.com/ws/place/v1/search?key=${TENCENT_MAP_KEY}&keyword=${options.keywords}&boundary=nearby(${options.lat},${options.lng},1000,1)&output=jsonp`
    if (process.env.NODE_ENV === 'development') {
      console.log(url)
    }
    return jsonp(url, {}, (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}
