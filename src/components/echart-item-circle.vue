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
				title:{
					text:'柱状图（圆环）',
					left:'center',
					textStyle:{
						fontSize:15,
						color:'#777'
					}
				},
				tooltip:{},
				angleAxis: {
				    max: 100,
				    show:false
				  },
				  radiusAxis: {
				    type: 'category',
				    axisLine:{
				      show:false
				    },
				    axisLabel:{
				      show:false
				    },
				    axisTick:{
				      show:false
				    },
				  },
				  polar: {
				    radius:['40%','70%']
				  },
				  series: [
				    {
				      type: 'bar',
				      data: ['30'],
				      coordinateSystem: 'polar',
				      name: 'gwjieiee',
				      roundCap:true,
				      color:'rgba(241,148,138,.8)'
				    },
				    {
				      type: 'bar',
				      data: ['50'],
				      coordinateSystem: 'polar',
				      name: '李现',
				      roundCap: true,
				      color:'rgba(157,182,181,1.000)'
				    },
				    {
				      type: 'bar',
				      data: ['70'],
				      coordinateSystem: 'polar',
				      name: '赵丽颖',
				      roundCap: true,
				      color:'rgba(245,240,227,1.000)'
				    }
				  ],
				  legend: {
				    orient: "vertical",
				    left: "left",
				    selectedMode: false,
				  }
			});
		},
		initChart() {
			this.chart = echarts.init(this.$el);
			this.setOptions();
		},
		getParams(params){
			// console.log(params)
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
