<template>
  <div class="home">
		<echart-item-bar></echart-item-bar>
		<echart-item-line></echart-item-line>
		<echart-item-pie></echart-item-pie>
		<echart-item-radar></echart-item-radar>
  </div>
</template>

<script>
import {getStatics} from '@/api/apiList'
import echartItemBar from '@/components/echart-item-bar'
import echartItemLine from '@/components/echart-item-line'
import echartItemPie from '@/components/echart-item-pie'
import echartItemRadar from '@/components/echart-item-radar'

export default {
  name: 'home',
	components:{
		echartItemBar,
		echartItemLine,
		echartItemPie,
		echartItemRadar
	},
	data(){
		return{
			staticData:[]
		}
	},
	created() {
		getStatics().then(res=>{
			if(res.data.code == 0){
				// console.log(res.data)
				this.staticData = res.data.data
			}else{
				this.$message.error(res.data.message)
			}
		})
	},
	methods:{
		
	}
}
</script>
<style lang="scss" scoped>
	.home{
		padding: 20px;
		display: flex;
		align-items: center;
		flex-wrap: wrap;
	}
</style>
