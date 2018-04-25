<template>
    <div style="width:100%;height:100%;" id="con"></div>
</template>

<script>
import echarts from 'echarts'

export default {
  name: 'dataSourcePie',
  data() {
    return {
      //
    }
  },
  mounted() {
    this.$nextTick(() => {
      var chart = echarts.init(document.getElementById('con'))
      var option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data: ['当前', '最高', '最低']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'value'
          }
        ],
        yAxis: [
          {
            type: 'category',
            axisTick: { show: false },
            data: ['BTC', 'BCH', 'ETH', 'ETC']
          }
        ],
        series: [
          {
            name: '当前',
            type: 'bar',
            label: {
              normal: {
                show: true,
                position: 'inside'
              }
            },
            data: [200, 170, 240, 244]
          },
          {
            name: '最高',
            type: 'bar',
            stack: '总量',
            label: {
              normal: {
                show: true
              }
            },
            data: [320, 302, 341, 374]
          },
          {
            name: '最低',
            type: 'bar',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'left'
              }
            },
            data: [-120, -132, -101, -134,]
          }
        ]
      }
      chart.setOption(option)
      window.addEventListener('resize', function() {
        chart.resize()
      })
    })
  }
}
</script>
