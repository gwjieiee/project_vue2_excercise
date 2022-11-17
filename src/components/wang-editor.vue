<template>
	<div style="border: 1px solid #ccc;">
		<!-- 工具栏 -->
		<Toolbar class="b-b-1" :editor="editor" :defaultConfig="toolbarConfig" :mode="mode" />
		<!-- 编辑器 -->
		<Editor class="editor" v-model="html" :defaultConfig="editorConfig" :mode="mode" @onCreated="onCreated" />
	</div>
</template>

<script>
	import Vue from 'vue'
	import {
		Editor,
		Toolbar
	} from '@wangeditor/editor-for-vue'
	const EditorConfig = {
		placeholder: '请输入内容...',
		//菜单配置（上传图片到服务器需要配置）
		MENU_CONF: {
			uploadImage: {
				//server: '', //服务器地址，为空会报错，且上传返回的各视必须是以下格式
				// {
				//     "errno": 0, // 注意：值是数字，不能是字符串
				//     "data": {
				//         "url": "xxx", // 图片 src ，必须
				//         "alt": "yyy", // 图片描述文字，非必须
				//         "href": "zzz" // 图片的链接，非必须
				//     }
				// }
				//自定义上传图片
				
			}
		}
	}
	export default Vue.extend({
		components: {
			Editor,
			Toolbar
		},
		data() {
			return {
				editor: null,
				html: '<h3>wangeditor</h3>',
				toolbarConfig: {},
				editorConfig:EditorConfig,
				mode: 'default', // or 'simple'
			}
		},
		methods: {
			onCreated(editor) {
				this.editor = Object.seal(editor) // 一定要用 Object.seal() ，否则会报错
			},
		},
		mounted() {

		},
		beforeDestroy() {
			const editor = this.editor
			if (editor == null) return
			editor.destroy() // 组件销毁时，及时销毁编辑器
		}
	})
</script>

<style src="@wangeditor/editor/dist/css/style.css"></style>
<style scoped>
	.b-b-1 {
		border-bottom: 1px solid #ccc
	}

	.editor {
		height: 400px;
		overflow-y: hidden;
	}
</style>
