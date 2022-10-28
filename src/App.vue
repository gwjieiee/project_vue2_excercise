<template>
  <div id="app">
    <router-view :key="router_key" />
  </div>
</template>


<script>
export default {
  name: 'App',
  data(){
    return{
      
    }
  },
  computed:{
    router_key(){
			//多次点击同一路由重新加载页面
      return this.$route.name !== null ? this.$route.name + +new Date() : this.$route + +new Date()
    }
  }
}
</script>

<style>
*{
		padding: 0;
		margin: 0;
	}
	.el-descriptions{
		color: #fff;
	}
</style>
