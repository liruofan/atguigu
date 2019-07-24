import axios from 'axios'
export default function ajax (url,data={},type="GET") {
	return new Promise(function (resolve,reject) {
		let promise
	   if (type=="GET") {
		  let dataStr = ''
		   Object.keys(data).forEach(key => {
			  dataStr += key + '=' + data[key] + '&'

			})
             dataStr = dataStr.substring(0,dataStr.lastIndexOf('&'))
			if(dataStr!='') {
                url = url + '?' + dataStr
		     }
           
		      promise = axios.get(url)
			
		 } else {
		   promise = axios.post(url,data)
	   }  

	    promise.then(response => {
			resolve(response.data)
		}).catch(error => {
            reject(error)
		})
	})

}