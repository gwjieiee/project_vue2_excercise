import request from '@/utils/request'
//获取数据信息
export function getStatics(){
	return request({
		url:'/order/statistics',
		method:'get',
		open:false
	})
}

//登录
export function login(data){
	return request({
		url:'/manager/login',
		method:'post',
		data,
		open:true
	})
}
