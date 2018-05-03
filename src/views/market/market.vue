<template>
    <Card :padding="0" :dis-hover="true">
        <!-- <p slot="title">市场行情</p> -->
        <Tabs v-model="qc" :animated="false">
            <TabPane v-for="p in bd.pairs" :key="p.key()" :label="p.key()" :name="p.key()">
                <market-list :code="p.key()"></market-list>
            </TabPane>
        </Tabs>
    </Card>
</template>

<script>
import marketList from './components/marketList'

export default {
  name: 'market',
  data() {
    return {
      bd: this.$store.state.bd,
      qc: 'USDT'
    }
  },
  components: {
    marketList
  },
  mounted() {
    // console.log(JSON.stringify(this.bd.pairs))
    // console.log(this.bd.pairs.length)
    // console.log(this.bd)
    // this.bd.pairs.forEach(p => console.log(p.key()))
  }
}
</script>

<style>

</style>
