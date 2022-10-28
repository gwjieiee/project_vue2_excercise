<template>
  <div class="hello">
    <!-- <div>hellow</div>
		<router-view></router-view> -->
		<navbar-item></navbar-item>
		<main-item></main-item>
		<footer-item></footer-item>
  </div>
</template>

<script>
	import navbarItem from './layout/navbar-item.vue'
	import mainItem from './layout/main-item.vue'
	import footerItem from './layout/footer-item.vue'
export default {
	components:{
		navbarItem,
		mainItem,
		footerItem
	},
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
