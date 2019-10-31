import Jsonp from '../common/js/jsonp'
import {baseData,options} from './config'

export function foo () {
	let url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
	let data = Object.assign({},baseData,{
		uin: 0,
		platform: 'h5',
		needNewCode: 1,
	})
	return Jsonp(url,data,options)
}
