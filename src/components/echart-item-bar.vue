<template>
  <div style="background:#fff" :class="className" :style="{ height: height, width: width }"></div>
</template>

<script>
import * as echarts from 'echarts';
require('echarts/theme/macarons') // echarts theme
import {
  debounce
} from '@/utils'

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
      data: ['20','60','30','90'],
      xdata: ['gwjieiee','李现','赵丽颖','全智贤']
    }
  },
  created() {

  },
  mounted() {
    this.initChart()
    this.__resizeHanlder = debounce(() => {
      if (this.chart) {
        this.chart.resize()
      }
    }, 100)
    window.addEventListener('resize', this.__resizeHanlder)
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    window.removeEventListener('resize', this.__resizeHanlder)
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    setOptions() {
      this.chart.setOption({
        legend: {
          orient: "horizontal",
          left: "left",
          selectedMode: false,
					itemWidth:20,//图例宽度
					
        },
				title:{
					text:'柱状图',
					left:'center',
					textStyle:{
						fontSize:15,
						color:'#777'
					}
				},
        tooltip: {

        },
        xAxis: {
          name: 'x轴',//坐标名
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
          name: 'y轴',//坐标名
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
        series: [{
					name:'bar1',
					type: 'bar',
          data: ['20','60','30','90'],
          smooth: true,
					barWidth:20,//设置柱状图宽度
          itemStyle: {
						normal:{
							color:'rgba(241,148,138,.6)',
						  label:{
						    show:true,
						    position:'top',//设置数值显示的位置
								color:'#f1948a'//设置数值显示的颜色
						  }
						}
						
          },
        },
				{
					name:'bar2',
					type: 'bar',
				  data: ['10','40','70','30'],
				  smooth: true,
					barWidth:20,//设置柱状图宽度
				  itemStyle: {
						normal:{
							color:'rgba(157,182,181,1.000)',//柱状图颜色
						  label:{
						    show:true,
						    position:'top',//设置数值显示的位置
								color:'#2d6161'//设置数值显示的颜色
						  }
						}
						
				  },
				},
				{
					name:'bar3',
					type: 'bar',
				  data: ['10','40','70','30'],
				  smooth: true,
					barWidth:20,//设置柱状图宽度
				  itemStyle: {
						normal:{
							color:'rgba(245,240,227,1.000)',
						  label:{
						    show:true,
						    position:'top',//设置数值显示的位置
								color:'#2d6161'//设置数值显示的颜色
						  }
						}
						
				  },
				},
				]
      })
    },
    initChart() {
      this.chart = echarts.init(this.$el)
      this.setOptions()
    }
  },
  watch: {
    monthData: {
      handler(newVal, oldVal) {
        //
      }

    }
  }
}

</script>