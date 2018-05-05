<template>
  <div>
    <div style="padding:7px 16px;" class="bottom-border">最新价 1.5389 USDT ≈ 9.84 CNY</div>
    <Table disabled-hover :highlight-row="false" :columns="col" :data="data1" class="tapeList" :border="false"></Table>
    <hr style="color:#123456" />
    <Table disabled-hover :highlight-row="false" :columns="col" :data="data2" class="tapeList" :show-header="false" :border="false"></Table>
  </div>
</template>
<script>
import util from '@/libs/util'
export default {
  name: 'tape',
  data() {
    return {
      col: [
        {
          title: '盘口',
          key: 'ord'
        },
        {
          title: '价格',
          key: 'price'
        },
        {
          title: '数量',
          key: 'amount'
        }
        // {
        //   title: '累计',
        //   key: 'all'
        // }
      ],
      data1: [],
      data2: []
    }
  },
  methods: {
    upTape() {
      util
        .get(
          '/api/market/depth?base=BTC&quote=ETH&depth=1&size=20',
          'http://172.16.2.20:8089'
        )
        .then(res => {
          if (res.status == '200' && res.data.meta.message === 'success') {
            // console.log(res.data.data)/*  */
            res.data.data.asks.forEach((p, i, l) => {
              p.ord = '卖' + (l.length - i)
            })
            res.data.data.bids.forEach((p, i, l) => {
              p.ord = '买' + (i + 1)
            })
            this.data1 = res.data.data.asks
            this.data2 = res.data.data.bids
          }
        })
    }
  },
  mounted() {
    // console.log(this.code)
    this.upTape()
    this.$nextTick(() => {
      setInterval(this.upTape, 1000)
    })
  }
}
</script>
<style>
.tapeList td,
.tapeList th {
  height: auto;
}
</style>