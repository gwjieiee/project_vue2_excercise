<template>
	<div class="footer">
		<div class="footer-row">
			<div class="row-li">
				<label>用户名：</label>
				<span>{{userInfo.account}}</span>
			</div>
			<div class="row-li">
				<label>手机号：</label>
				<span>18000000000</span>
			</div>
			<div class="row-li">
				<label>居住地：</label>
				<span>江苏省</span>
			</div>
		</div>
		<div class="footer-row">
			<div class="row-li">
				<label>备注：</label>
				<span>gwjieiee</span>
			</div>
			<div class="row-li">
				<label>联系地址：</label>
				<span>江苏省</span>
			</div>
			<div class="row-li">
				<label>时间：</label>
				<span>{{updateTime}}</span>
			</div>
		</div>
		<!-- <el-descriptions title="用户信息">
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
		</el-descriptions> -->
	</div>
</template>
<script>
	import {getUserInfo} from '@/utils/auth'
export default {
	name: 'footer-item',
	data() {
		return {
			userInfo:{},
			updateTime:new Date()
		};
	},
	created() {
		this.userInfo = getUserInfo()
		let date = new Date()
		this.updateTime = date.toLocaleDateString()
	},
	methods: {}
};
</script>
<style lang="scss">
	.footer{
		padding: 20px;
		background: #add8e6;
	}
	.footer-row{
		display: flex;
		width: 100%;
		height: 54px;
		align-items: center;
		div{
			width: 33.3%;
			color: #fff;
		}
	}
</style>
