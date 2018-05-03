<template>
  <Row height="90%" :gutter="10">
    <Col span="16">
    <Card :style="{height:'470px'}" :padding="0" :dis-hover="true">
      <!-- <p slot="title">
        <Icon type="social-bitcoin"></Icon>下单交易</p> -->
      <buysell></buysell>
    </Card>
    </Col>
    <Col span="8">
    <Card :padding="0" :style="{height:'470px'}" :dis-hover="true">
      <!-- <p slot="title">
        <Icon type="social-bitcoin"></Icon>最新价 1.5389 USDT ≈
        <span type="Sub Color">9.84 CNY</span>
        </span>
      </p>
      <tape></tape> -->
      <tape></tape>
    </Card>

    </Col>
  </Row>
</template>

<script>
import buysell from './components/buysell.vue'
import tape from './components/tape'
export default {
  components: {
    buysell,
    tape
  }
}
</script>

<style>

</style>
