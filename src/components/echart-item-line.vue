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
					orient: 'horizontal', //水平或者垂直
					left: 'left',
					selectedMode: false
				},
				title: {
					text: '折线图',
					left: 'center',
					textStyle: {
						fontSize: 15,
						color: '#777'
					}
				},
				tooltip: {},
				xAxis: {
					name: 'x轴', //坐标名
					nameTextStyle: {
						color: '#777',
						fontSize: 15
					},
					type: 'category',
					axisLine: {
						lineStyle: {
							color: '#999'
						}
					},
					axisLabel: {
						color: '#999',
						fontSize: 15
					},
					data: this.xdata
				},
				yAxis: {
					name: 'y轴', //坐标名
					nameTextStyle: {
						//坐标名样式
						color: '#777',
						fontSize: 15
					},
					type: 'value',
					axisLabel: {
						color: '#999',
						fontSize: 15
					}
				},
				series: [
					{
						name: 'line1',
						type: 'line',
						data: ['20', '60', '30', '90'],
						smooth: true,
						// symbol: 'circle',//设置标点的样式
						// symbolSize: 15,
						// lineStyle: {
							//设置折线的样式
						// 	normal: {
						// 		shadowColor: 'rgba(0, 0, 0, .3)',
						// 		shadowBlur: 0,
						// 		shadowOffsetY: 2,
						// 		shadowOffsetX: 2
						// 	}
						// },
						//设置区域面积
						areaStyle:{
							color:'rgba(241,148,138,.6)'
						},
						barWidth: 20, //设置柱状图宽度
						itemStyle: {
							normal: {
								color: 'rgba(241,148,138,.6)',
								label: {
									show: true,
									position: 'top', //设置数值显示的位置
									color: '#f1948a' //设置数值显示的颜色
								}
							}
						}
					},
					{
						name: 'line2',
						type: 'line',
						data: ['10', '40', '70', '30'],
						smooth: true,
						barWidth: 20, //设置柱状图宽度
						//设置区域面积
						areaStyle:{
							color:'rgba(157,182,181,1.000)'
						},
						itemStyle: {
							normal: {
								color: 'rgba(157,182,181,1.000)', //柱状图颜色
								label: {
									show: true,
									position: 'top', //设置数值显示的位置
									color: '#2d6161' //设置数值显示的颜色
								}
							}
						}
					},
					{
						name: 'line3',
						type: 'line',
						data: ['20', '50', '80', '20'],
						smooth: true,
						barWidth: 20, //设置柱状图宽度
						//设置区域面积
						areaStyle:{
							color:'rgba(245,240,227,1.000)'
						},
						itemStyle: {
							normal: {
								color: 'rgba(245,240,227,1.000)',
								label: {
									show: true,
									position: 'top', //设置数值显示的位置
									color: '#2d6161' //设置数值显示的颜色
								}
							}
						}
					}
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
