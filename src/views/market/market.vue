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
  mounted() {}
}
</script>

<style>

</style>
