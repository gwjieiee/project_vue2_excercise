<template>
	<div class="main-content">
		<div class="login-form">
			<el-form ref="userForm" :rules="loginRules" :model="userForm">
				<div class="form-title">
					<label>用户登录</label>
				</div>
				<el-form-item prop="username">
					<el-input clearable 
					 prefix-icon="el-icon-user" type="text" v-model="userForm.username" placeholder="请输入用户账户"></el-input>
				</el-form-item>
				<el-form-item prop="password">
					<el-input prefix-icon="el-icon-lock" type="password" v-model="userForm.password" placeholder="请输入用户密码"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button style="width: 100%;color: #54B2BA;" @click="confirmLogin">登录</el-button>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script>
	import {login} from '@/api/apiList'
	import {setUserInfo} from '@/utils/auth'
	export default {
		data(){
			return{
				userForm:{
					username:'',
					password:''
				},
				loginRules:{
					username:[
						{
							required: true,
							message: '请输入用户名',
							trigger: 'blur'
						}
					],
					password:[
						{
						  required: true,
						  message: '请输入正确的密码',
						  trigger: 'blur'
						},
						{ min: 3, message: '密码长度不得小于3', trigger: 'blur' }
					]
				}
			}
		},
		methods:{
			confirmLogin(){
				this.$refs['userForm'].validate(valid=>{
					if(valid){
						login(this.userForm).then(res=>{
							if(res.data.code == 0){
								const userInfo = res.data.data
								setUserInfo(userInfo)
								this.$message({
									type:'success',
									message:res.data.message
								})
								setTimeout(_=>{
									this.$router.push('/')
								},1000)
							}else{
								this.$message.error(res.data.message)
							}
						})
					}else{
						console.log('err')
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.main-content{
		width: 100%;
		height: 100vh;
		background: rgba(84,178,186,.1);
		.login-form{
			width: 50%;
			height: auto;
			position: absolute;
			padding: 20px;
			top: 50%;
			left: 50%;
			transform: translate(-50%,-50%);
			background: rgba(84,178,186, .5);
			color: #fff;
			border-radius: 10px;
			.form-title{
				width: 100%;
				text-align: center;
				margin-bottom: 50px;
			}
		}
	}
</style>