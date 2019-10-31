import originJsonp from 'jsonp'

export default function jsonp (url,data,option) {
	url = url +'?'+ params(data)
	return new Promise ((resolve,reject) => {
		originJsonp (url, option, (err,data) => {
			if (!err) {
				resolve(data)
			}else{
				reject(err)
			}
		})
	})
}

function params (data) {
	let str = ''
	Object.keys(data).forEach((key) => {
		let value = data[key] !== undefined ? data[key] : ''
		str += key + '=' + encodeURIComponent(value) + '&'
	})
	str = str.substring(0,str.lastIndexOf('&'))
	return str ? str : ''
}