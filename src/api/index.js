import ajax from './ajax.js'
const BASE_URL = '/api'
export const reqSwipers = () => ajax('/swipers')  //请求首页轮播图
export const reqAddress = ({geohash}) => ajax(`${BASE_URL}/position/${geohash}`)  //通过经纬度请求地址