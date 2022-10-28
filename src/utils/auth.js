//获取用户信息
export function getUserInfo(){
	const userInfo = localStorage.getItem('userInfo')
	return userInfo ? JSON.parse(userInfo) : null
}
//设置用户信息
export function setUserInfo(userInfo){
	return localStorage.setItem('userInfo',JSON.stringify(userInfo))
}
//清除用户信息
export function delUserInfo(){
	return localStorage.removeItem('userInfo')
}
//api地址
export function hostUrl(){
	return 'http://api.tonzan.com'
}