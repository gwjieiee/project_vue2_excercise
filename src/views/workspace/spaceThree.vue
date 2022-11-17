<template>
	<div class="content">
		<h4>暂未规划</h4><br/>
		<label>颜色:</label>
		<div class="sku-row">
			<span :class="choose_color == tag ? 'active':'tag-item'" 
			v-for="tag in sku_color" :key="tag" @click="chooseColor(tag)">{{tag}}</span>
		</div>
		<label>尺码：</label>
		<div class="sku-row">
			<span :class="choose_size == tag ? 'active':'tag-item'"
			v-for="tag in sku_size" :key="tag" @click="chooseSize(tag)">{{tag}}</span>
		</div>
		<label>材料：</label>
		<div class="sku-row">
			<span :class="choose_material == tag ? 'active':'tag-item'"
			v-for="tag in sku_material" :key="tag" @click="chooseMaterial(tag)">{{tag}}</span>
		</div>
		<label>查看符合条件的数据：</label>
		<!-- <el-button type="primary" size="mini" @click="showList">查看</el-button> -->
		<div class="sku-row">
			<span class="tag-item" v-for="(tag,idx) in filterList" :key="idx">
				{{`颜色：${tag.color},尺码：${tag.type},材料：${tag.mianliao},价格：${tag.price}`}}
			</span>
		</div>
	</div>
</template>

<script>
	import {skuData1,skuData2} from '@/mockData/skuList'
	export default {
		data(){
			return{
				sku_color:skuData1[0],
				sku_size:skuData1[1],
				sku_material:skuData1[2],
				chooseObj:{},
				filterList:[],
				choose_color:'',
				choose_size:'',
				choose_material:'',
			}
		},
		created() {
			// console.log(skuData1,skuData2)
		},
		methods:{
			chooseColor(val){
				this.choose_color = val
				if(this.choose_size && this.choose_material){
					this.showList()
				}
			},
			chooseSize(val){
				this.choose_size = val
				if(this.choose_color && this.choose_material){
					this.showList()
				}
			},
			chooseMaterial(val){
				this.choose_material = val
				if(this.choose_color && this.choose_size){
					this.showList()
				}
			},
			showList(){
				if(!this.choose_color || !this.choose_size || !this.choose_material){
					this.$message.error('请选择所有的规格！')
					return;
				}
				this.filterList = skuData2.filter(item => (item.color == this.choose_color && item.type == this.choose_size && item.mianliao == this.choose_material))
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content{
		padding: 20px;
		.sku-row{
			// width: 100%;
			// height: auto;
			// overflow: hidden;
			.tag-item{
				display: inline-block;
				margin: 10px 5px;
				cursor: pointer;
				font-size: 14px;
				color: #409EFF;
				border: 1px solid #409EFF;
				padding: 3px 8px;
				border-radius: 5px;
				
			}
			.active{
				display: inline-block;
				margin: 10px 5px;
				cursor: pointer;
				font-size: 14px;
				color: #fff;
				background: #409EFF;
				padding: 3px 8px;
				border-radius: 5px;
			}
		}
	}
	label{
		font-size: 15px;
	}
</style>