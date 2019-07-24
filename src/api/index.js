import ajax from './ajax.js'
const BASE_URL = '/api'
export const reqSwipers = () => ajax('/swipers')  //请求首页轮播图
export const reqAddress = ({geohash}) => ajax(`${BASE_URL}/position/${geohash}`)  //通过经纬度请求地址
export const reqFoodCategory = () => ajax(BASE_URL+'/index_category') //请求食品分类列表
export const reqShopList = (latitude,longitude) => ajax(BASE_URL+'/shops',{latitude:latitude,longitude:longitude})  //根据经纬度请求商家列表
