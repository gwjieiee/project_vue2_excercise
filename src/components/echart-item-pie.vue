<template>
	<div style="background:#fff" :class="className" :style="{ height: height, width: width }"></div>
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
					//图例设置
					orient: 'vertical', //水平或者垂直
					left: 'left',
					selectedMode: false
				},
				title: {
					text: '饼图',
					left: 'center',
					textStyle: {
						fontSize: 15,
						color: '#777'
					}
				},
				tooltip: {},
				series: [
					{
						type: 'pie',
						data: [
							{name:'',value:'10'},
							{name:'',value:'60'},
							{name:'',value:'10'},
						],
						color:['rgba(241,148,138,.8)','rgba(157,182,181,1.000)','rgba(245,240,227,1.000)'],
						smooth: true,
						radius: ["40%", "45%"],
						label:{
							normal:{
								formatter:'{b} {d}%'
							},
						},
						labelLine:{
							length:50
						}
					},
					{
						type: 'pie',
						data: [
							{name:'gwjieiee',value:'10'},
							{name:'李现',value:'60'},
							{name:'赵丽颖',value:'10'},
						],
						color:['rgba(241,148,138,.6)','rgba(157,182,181,.7)','rgba(245,240,227,.7)'],
						smooth: true,
						radius: ["45%", "55%"],
						label:{
							show:false
						}
					},
				]
			});
		},
		initChart() {
			this.chart = echarts.init(this.$el);
			this.setOptions();
		}
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
