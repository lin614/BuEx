<template>
  <div style="width:100%;height:100%;" id="con"></div>

</template>
<script>
import echarts from 'echarts'
export default {
  name: 'plchart',
  data() {
    return {
      //
    }
  },
  mounted() {
    this.$nextTick(() => {
      new TradingView.widget({
        container_id: 'con',
        exchange: 'US',
        showChart: true,
        locale: 'zh_CN',
        largeChartUrl: '',
        width: '400',
        height: '600',
        plotLineColorGrowing: 'rgba(60, 188, 152, 1)',
        plotLineColorFalling: 'rgba(255, 74, 104, 1)',
        gridLineColor: 'rgba(242, 242, 242, 1)',
        scaleFontColor: 'rgba(218, 221, 224, 1)',
        belowLineFillColorGrowing: 'rgba(60, 188, 152, 0.05)',
        belowLineFillColorFalling: 'rgba(255, 74, 104, 0.05)',
        symbolActiveColor: 'rgba(242, 250, 254, 1)'
      })
    })
  }
}
</script>
