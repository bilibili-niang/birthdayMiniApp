import useWebView from './useWebView'

export interface IUseMapViewOptions {
  name: string
  address: string
  longitude: number | string
  latitude: number | string
}

/** 打开地图展示弹窗 */
const useMapView = (options: IUseMapViewOptions) => {
  return useWebView({
    width: 600,
    height: 800,
    link: `https://mapapi.qq.com/web/mapComponents/locationMarker/v/index.html?type=0&marker=coord:${
      options.latitude
    },${options.longitude};title:${options.name || ''};addr:${
      options.address || ''
    }&key=OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77&referer=myapp`
  })
}

export default useMapView
