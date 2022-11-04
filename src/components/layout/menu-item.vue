<template>
	<div>
		<template v-if="!item.child">
			<el-menu-item>{{item.name}}</el-menu-item>
		</template>
		<el-submenu v-else :index="item.path">
			<template slot="title">{{item.name}}</template>
			<menu-item v-for="(child,index) in item.child" :item="child"></menu-item>
		</el-submenu>
	</div>
</template>

<script>
	export default {
		name:'menuItem',
		props:{
			item:{
				type:Object,
			},
			idx:{
				type:Number,
				
			},
			
		},
		data() {
			return{
				
			}
		},
		methods:{
			
		}
	}
</script>

<style lang="scss" scoped>
	
</style>