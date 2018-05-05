<template>
    <div id="main" class="app-main">
        <router-view></router-view>
    </div>
</template>

<script>
import util from './libs/util'
import Enumerable from 'linq'
export default {
  data() {
    return {
      theme: this.$store.state.app.themeColor
    }
  },
  mounted() {
    //在此获取基础数据，为了提升进入程序后的体验提升
    //获取支持的货币
    util.get('/common/currencys').then(res => {
      if (res.status == '200' && res.data.meta.message === 'success') {
        console.log('/common/currencys')
        this.$store.commit('initCurs', res.data.data)
      }
    })
    //获取交易对
    util.get('/common/pairs').then(res => {
      console.log('/common/pairs')
      let list = Enumerable.from(res.data.data)
        .groupBy('$.quoteCurrency')
        .log()
        .toArray()

      console.log('pair', list)
      this.$store.commit('initPairs', list)

      // console.log(list)
    })
  },
  beforeDestroy() {},
  methods: {}
}
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
  background: #f0f0f0;
  overflow: hidden;
}
.app-main {
  width: 100%;
  height: 100%;
}
</style>
