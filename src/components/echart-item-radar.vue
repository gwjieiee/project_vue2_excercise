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
				title: {
				    text: "雷达图",
						left:'center',
						textStyle:{
							fontSize:15,
							color:'#777'
						}
				  },
				  tooltip: {},
				  legend: {
				    orient: "vertical",
				    left: "left",
				    selectedMode: false,
				  },
					// backgroundColor:'#fff',
				  radar: {
				    indicator: [{
				      name: "sales",
				      max: 6500
				    }, {
				      name: "Administration",
				      max: 16000
				    }, {
				      name: "Information Techology",
				      max: 30000
				    }, {
				      name: "Customer Support",
				      max: 38000
				    }, {
				      name: "Development",
				      max: 52000
				    }, {
				      name: "Marketing",
				      max: 25000
				    }],
						radius:'60%'
				  },
				  series: [{
				    name: "预算 vs 开销（Budget vs spending）",
				    type: "radar",
						color:['rgba(241,148,138,.8)','rgba(157,182,181,1.000)','rgba(245,240,227,1.000)'],
				    data: [{
				      value: [4300, 10000, 28000, 35000, 50000, 19000],
				      name: "gwjieiee"
				    }, {
				      value: [5000, 14000, 28000, 31000, 42000, 21000],
				      name: "李现"
				    },
						{
						  value: [3000, 4555, 12344, 23456, 7788, 3000],
						  name: "赵丽颖"
						}]
				  }]
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
