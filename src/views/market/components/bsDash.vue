<template>
    <div class="content">
        <Row>
            <Col span="12">
            <p>可用 100 USDT
                <span>充币</span>
            </p>
            </Col>
            <Col span="12">
            <p>可用 100 USDT
                <span>充币</span>
            </p>
            </Col>
        </Row>
        <Row>
            <Col span="12">
            <hr style="width:90%">
            </Col>
            <Col span="12">
            <hr style="width:90%">
            </Col>
        </Row>

        <Row>
            <Col span="12">
            <p>买入价
                <Input v-model="buyPrice" placeholder="USDT" style="width: 90%"></Input>
            </p>
            </Col>
            <Col span="12">
            <p>卖出价
                <Input v-model="buyPrice" placeholder="USDT" style="width: 90%"></Input>
            </p>
            </Col>
        </Row>
        <Row>
            <Col span="12">
            <p>买入量
                <Input v-model="buyPrice" placeholder="BTC" style="width: 90%"></Input>
            </p>
            </Col>
            <Col span="12">
            <p>卖出量
                <Input v-model="buyPrice" placeholder="BTC" style="width: 90%"></Input>
            </p>
            </Col>
        </Row>
        <Row>
            <Col span="12" :style="{padding:'10px'}">
            <Slider v-model="value6" :step="10" show-stops :style="{width:'90%'}"></Slider>
            </Col>
            <Col span="12" :style="{padding:'10px'}">
            <Slider v-model="value6" :step="10" show-stops :style="{width:'90%'}"></Slider>
            </Col>
        </Row>
        <Row>
            <Col span="12" :style="{padding:'10px'}">
            <Button type="success" long :style="{width:'90%'}">买入</Button>
            </Col>
            <Col span="12" :style="{padding:'10px'}">
            <Button type="error" long :style="{width:'90%'}">卖出</Button>
            </Col>
        </Row>
        <!-- <Row>
            <Col span="12" :style="{padding:'10px'}">
            <Row type="flex" justify="space-between" class="code-row-bg">
                <Col span="8">0 BTC</Col>
                <Col span="4">0.0000BTC</Col>
            </Row>
            </Col>
            <Col span="12" :style="{padding:'10px'}">
            </Col>
        </Row> -->

    </div>
</template>

<script>
export default {
  name: 'bsDash',
  data() {
    return {
      buyPrice: ''
    }
  }
}
</script>

<style>

</style>