<template>
	<div class="content">
		富文本
		<wang-editor style="margin: 10px 0;"></wang-editor>
		<div><el-button type="primary" @click="showSomething">click</el-button></div>
		
		<Vueditor ref="text" style="width: 100%;height: 400px;margin: 10px 0;"></Vueditor>
	</div>
</template>

<script>
	import wangEditor from '@/components/wang-editor'
	export default{
		components:{
			wangEditor
		},
		data(){
			return{
				text:'<h3>vueditor</h3>',
				editorOption:{}
			}
		},
		created() {
			
		},
		mounted() {
			//富文本赋值
			this.$refs.text.setContent(this.text)
		},
		methods:{
			showSomething(){
				//获取富文本值
				console.log(this.$refs.text.getContent())
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content{
		padding: 20px;
	}
</style>