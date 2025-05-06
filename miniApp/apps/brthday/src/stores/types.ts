// 一个店铺的数据类型
export interface oneStoreType {
  id: string
  name: string
  region: string
  address: string
  openingAt: string
  closingAt: string
  longitude: string
  latitude: string
  goodsStockName: string
  location: {
    lng: string
    lat: string
  }
  distance: number
  status: number
  contactInfo: {
    contactName: string
    contactPhone: string
  }[]
}
