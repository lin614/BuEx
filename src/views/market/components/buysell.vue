<template>
    <div class="content">
        <Tabs value="name1" :animated="false">
            <TabPane label="限价交易" name="name1">
                <bs-dash></bs-dash>
            </TabPane>
            <TabPane label="市价交易" name="name2">
                <bs-dash></bs-dash>
            </TabPane>
        </Tabs>
    </div>
</template>

<script>
import bsDash from './bsDash'
export default {
  name: 'buysell',
  components: {
    bsDash
  }
}
</script>

<style>

</style>
