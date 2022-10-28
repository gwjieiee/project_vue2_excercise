<template>
	<div class="footer">
		<el-descriptions title="用户信息">
			<el-descriptions-item label="用户名" label-class-name="my-label" content-class-name="my-content">
			{{userInfo.account}}</el-descriptions-item>
			<el-descriptions-item label="手机号" label-class-name="my-label" content-class-name="my-content">
				18100000000</el-descriptions-item>
			<el-descriptions-item label="居住地" label-class-name="my-label" content-class-name="my-content">
				江苏省南京市</el-descriptions-item>
			<el-descriptions-item label="备注" label-class-name="my-label" content-class-name="my-content">
				<el-tag size="small">gwjieiee</el-tag></el-descriptions-item>
			<el-descriptions-item label="联系地址" label-class-name="my-label" content-class-name="my-content">
				江苏省南京市</el-descriptions-item>
			<el-descriptions-item label="联系地址" label-class-name="my-label" content-class-name="my-content">
				江苏省南京市</el-descriptions-item>
		</el-descriptions>
	</div>
</template>
<script>
	import {getUserInfo} from '@/utils/auth'
export default {
	name: 'footer-item',
	data() {
		return {
			userInfo:{}
		};
	},
	created() {
		this.userInfo = getUserInfo()
	},
	methods: {}
};
</script>
<style>
	.footer{
		padding: 20px;
		background: #add8e6;
	}
	.my-label{
		color: #fff;
		background: #add8e6;
	}
	.my-content{
		color: #fff;
		background: #add8e6;
	}
</style>
