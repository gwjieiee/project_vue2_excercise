<template>
	<div class="navbar">
		<div>
			<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect"
			 background-color="#add8e6" text-color="#aaa" active-text-color="#fff">
				<template v-for="(item,index) in menuList" >
					<el-menu-item v-if="!item.child" :index="item.path">{{item.name}}</el-menu-item>
					<el-submenu v-else :index="item.path">
						<template slot="title">{{item.name}}</template>
						<template v-for="(item1,index1) in item.child">
							<el-menu-item v-if="!item1.child" :index="item1.path">{{item1.name}}</el-menu-item>
							<el-submenu v-else :index="item1.path">
								<template slot="title">{{item1.name}}</template>
								<el-menu-item v-for="(item2,index2) in item1.child" :key="index2" :index="item2.path" :disabled="item2.disabled">
									{{item2.name}}
								</el-menu-item>
							</el-submenu>
						</template>
					</el-submenu>
				</template>
			</el-menu>
		</div>
		<div class="account">
			<span>当前登录：{{userInfo.account}}</span>
			<el-button size="mini" icon="el-icon-switch-button" @click="logout">退出登录</el-button>
		</div>
	</div>
</template>
<script>
	import {getUserInfo,delUserInfo} from '@/utils/auth'
export default {
	data() {
		return {
			activeIndex: '1',
			menuList:[
				{
					name:'首页',
					path:'/'
				},
				{
					name:'我的工作台',
					path:'工作台',
					child:[
						{name:'1',path:'/spaceOne'},
						{name:'2',path:'/spaceTwo'},
						{
							name:'3',
							path:'3',
							child:[
								{name:'111',path:'1'},
								{name:'222',path:'2'}
							]
						}
					]
				},
				{name:'消息中心',disabled:true,path:'3'},
				{name:'订单管理',path:'4'}
			],
			userInfo:{}
		};
	},
	created() {
		this.userInfo = getUserInfo()
	},
	methods: {
		handleSelect(e) {
			if(e.indexOf('/') == -1){
				this.$message('页面尚未维护！')
			}else{
				// console.log(this.$route)
				let route = this.$route.path
				if(route === e){
					console.log(this.$router)
				}else{
					this.$router.push(e)
				}
				
			}
		},
		logout(){
			this.$confirm('确定退出登录？','提示',{
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        }).then(_=>{
					delUserInfo()
					this.$message({
						type:'success',
						message:'退出成功！'
					})
					setTimeout(_=>{
						this.$router.push('/login')
					},1000)
				}).catch(_=>{
					this.$message('已取消')
				})
		},
	}
};
</script>
<style lang="scss" scoped>
	.navbar{
		width: 100%;
		height: auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
		background: #add8e6;
		.account{
			span{
				color: #fff;
				font-size: 14px;
				padding-right: 10px;
			}
			padding-right: 10px;
		}
	}
</style>
