<template>
	<div id="chart-panel" style="background:#fff" :class="className" :style="{ height: height, width: width }" @click="getParams"></div>
</template>

<script>
import * as echarts from 'echarts';
require('echarts/theme/macarons'); // echarts theme
import { debounce } from '@/utils';


export default {
	props: {
		monthData: Array,
		className: {
			type: String,
			default: 'chart'
		},
		width: {
			type: String,
			default: '500px'
		},
		height: {
			type: String,
			default: '400px'
		},
		barData: {
			type: Object
		}
	},
	data() {
		return {
			chart: null,
			data: ['20', '60', '30', '90'],
			xdata: ['gwjieiee', '李现', '赵丽颖', '全智贤']
		};
	},
	created() {},
	mounted() {
		this.initChart();
		this.__resizeHanlder = debounce(() => {
			if (this.chart) {
				this.chart.resize();
			}
		}, 100);
		window.addEventListener('resize', this.__resizeHanlder);
	},
	beforeDestroy() {
		if (!this.chart) {
			return;
		}
		window.removeEventListener('resize', this.__resizeHanlder);
		this.chart.dispose();
		this.chart = null;
	},
	methods: {
		setOptions() {
			this.chart.setOption({
				legend: {
					orient: 'vertical',
					left: 'left',
					selectedMode: false,
					itemWidth: 20 //图例宽度
				},
				title: {
					text: '关系图',
					left: 'center',
					textStyle: {
						fontSize: 15,
						color: '#777'
					}
				},
				tooltip: {},
				animationDurationUpdate: function(idx) {
					// 越往后的数据延迟越大
					return idx * 100;
				},
				animationDuration: 1500,
				animationEasingUpdate: 'quinticInOut',
				series: [
					{
						type: 'graph',
						layout: 'force',
						force: {
							repulsion: 250,
							edgeLength: 10
						},
						roam: true,
						label: {
							normal: {
								show: true,
								color:'#fff',
								fontSize:15
							}
						},
						data: [
							{
								name:'gwjieiee',
								value:'12333',
								symbolSize:100,
								draggable:true,
								itemStyle:{
									normal:{
										color:'rgba(157,182,181,1.000)'
									}
								}
							},
							{
								name:'李现',
								value:'24555',
								symbolSize:80,
								draggable:true,
								itemStyle:{
									normal:{
										color:'rgba(241,148,138,.8)'
									}
								}
							},
							{
								name:'赵丽颖',
								value:'24555',
								symbolSize:120,
								draggable:true,
								itemStyle:{
									normal:{
										color:'rgba(245,240,227,1.000)'
									}
								}
							},
						],
						categories:[
							{name:'gwjieiee',itemStyle:{color:'rgba(157,182,181,1.000)'}},
							{name:'李现',itemStyle:{color:'rgba(241,148,138,.8)'}},
							{name:'赵丽颖',itemStyle:{color:'rgba(245,240,227,1.000)'}}
						]
					}
				]
			});
		},
		initChart() {
			this.chart = echarts.init(this.$el);
			this.setOptions();
		},
		getParams(params){
			console.log(params)
		},
	},
	watch: {
		monthData: {
			handler(newVal, oldVal) {
				//
			}
		}
	}
};
</script>
