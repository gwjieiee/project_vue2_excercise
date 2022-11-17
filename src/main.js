import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false
import Vueditor from 'vueditor'
import 'vueditor/dist/style/vueditor.min.css'
//菜单配置
let config = {
	toolbar: ['removeFormat', 'undo', '|', 'elements', 'fontName', 'fontSize', 'foreColor', 'backColor', 'divider',
    'bold', 'italic', 'underline', 'strikeThrough', 'links', 'divider', 'subscript', 'superscript',
    'divider', 'justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull', '|', 'indent', 'outdent',
    'insertOrderedList', 'insertUnorderedList', '|', 'picture', 'tables', '|', 'switchView'],
	fontName: [{
		val: 'arial black'
	}, {
		val: 'times new roman'
	}, {
		val: 'Courier New'
	}],
	fontSize: ['12px', '14px', '16px', '18px'],
	uploadUrl: ''
}
Vue.use(Vueditor, config)

Vue.use(elementUI)

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
