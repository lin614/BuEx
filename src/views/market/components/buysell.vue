<template>
    <div class="content">
        <div style="padding:7px 16px;" class="bottom-border">当前交易对: BTC/USDT</div>
        <Tabs value="name1" :animated="false">
            <TabPane label="限价交易" name="name1">
                <div class="ivu-card-body">
                   <bs-dash></bs-dash>
                </div>
            </TabPane>
            <TabPane label="市价交易" name="name2">
                <div class="ivu-card-body">
                    <bs-dash></bs-dash>
                </div>

            </TabPane>
        </Tabs>
    </div>
</template>

<script>
import bsDash from './bsDash'
// import bs from './bs'
export default {
  name: 'buysell',
  components: {
    bsDash,
    // bs
  }
}
</script>

<style>

</style>
