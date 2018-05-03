<template>
    <Card :padding="0" :dis-hover="true">
        <!-- <p slot="title">市场行情</p> -->
        <Tabs value="name1" :animated="false">
            <TabPane label="USDT" name="name1">
                <market-list code="USDT"></market-list>
            </TabPane>
            <TabPane label="BTC" name="name2">
                <market-list code="BTC"></market-list>
            </TabPane>
            <TabPane label="ETH" name="name3">
                <market-list code="ETH"></market-list>
            </TabPane>
        </Tabs>
    </Card>
</template>

<script>
import marketList from './components/marketList'

export default {
  name: 'market',
  components: {
    marketList
  }
}
</script>

<style>

</style>
