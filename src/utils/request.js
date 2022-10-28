import axios from 'axios'
import router from '@/router'
import {Message} from 'element-ui'
import {
	getUserInfo,
	hostUrl
} from '@/utils/auth'

const service = axios.create({
	baseURL:hostUrl(),
	timeout:60 * 1000
})

service.interceptors.request.use(
	config =>{
		if(!config.open){
			const userInfo = getUserInfo()
			if(!userInfo){
				return Promise.reject('未登录，前往登录！')
			}
			config.headers['authenticate'] = userInfo.token
		}
		return config
	},
	error =>{
		return Promise.reject(error)
	}
)

service.interceptors.response.use(
	response =>{
		if (response.data.code && response.data.code === 4012 && response.data.message && response.data.message.code && response.data.message.code === 19) {
		  Message({
		    message: (response.data.message.message + ',请重新登录'),
		    type: 'error'
		  })
		  setTimeout(() => {
		    router.push('/login')
		  }, 1000)
		} else if (response.data.code && response.data.code === 4011 && response.data.message && response.data.message.code && response.data.message.code === 18) {
		  Message({
		    message: (response.data.message.message + ',请重新登录'),
		    type: 'error'
		  })
		  setTimeout(() => {
		    router.push('/login')
		  }, 1000)
		} else if (response.data.code && response.data.code === 4013 && response.data.message && response.data.message.code && response.data.message.code === 20) {
		  Message({
		    message: (response.data.message.message),
		    type: 'error'
		  })
			// console.log('4013,20',response.data)
		} else if (response.data.code && response.data.code === 4010 && response.data.message && response.data.message.code && response.data.message.code === 2) {
		  Message({
		    message: (response.data.message.message),
		    type: 'error'
		  })
			// console.log('4010,2',response.data)
		}else if(response.data.message.message && response.data.message.stack){
			console.log('message',response.data)
			Message({
				message:'权限问题，请重新登录',
				type:'error'
			})
			setTimeout(()=>{
				router.push('/login')
			},1000)
		}
		return response
	},
	err => {
		console.log('err' + err) // for debug
		Message({
		  message: err,
		  type: 'error',
		  duration: 5 * 1000
		})
		return Promise.reject(err)
	}
)

export default service