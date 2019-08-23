import ajax from './ajax.js'
const BASE_URL = '/api'
export const reqSwipers = () => ajax('/swipers')  //请求首页轮播图
export const reqAddress = ({geohash}) => ajax(`${BASE_URL}/position/${geohash}`)  //通过经纬度请求地址
export const reqFoodCategory = () => ajax(BASE_URL+'/index_category') //请求食品分类列表
export const reqShopList = (latitude,longitude) => ajax(BASE_URL+'/shops',{latitude:latitude,longitude:longitude})  //根据经纬度请求商家列表
export const reqSearchShops = (keyword,geohash) => ajax(BASE_URL+'/search_shops',{keyword,geohash})  //根据经纬度和关键字搜索商铺列表
export const reqPwdLogin = ({name,pwd,captcha}) => ajax(BASE_URL+'/login_pwd',{name,pwd,captcha},'POST')  //账号密码登录
export const reqSendCode = (phone) => ajax(BASE_URL+'/sendcode',{phone})  //请求短信验证码
export const reqSmsLogin = (phone,code) => ajax(BASE_URL+'/login_sms',{phone,code},'POST')  //手机短信登录
export const reqUserInfo = () => ajax(BASE_URL+'/userinfo')  //请求用户信息
export const reqUserlogout = () => ajax(BASE_URL+'/logout')  //用户登出
export const reqShopInfo = () => ajax('/infos')  //请求商家信息
export const reqShopGoods = () => ajax('/goods')  //请求商家食物
export const reqShopRatings = () => ajax('/ratings')  //请求商家评价