<template>
    <div class="bsd">
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
        <Row :style="{paddingBottom:'10px'}">
            <Col span="12">
            <hr style="width:90%">
            </Col>
            <Col span="12">
            <hr style="width:90%">
            </Col>
        </Row>

        <Row :style="{paddingBottom:'10px'}">
            <Col span="12">
            <p>买入价

            </p>
            <InputNumber :max="10000" :step="0.1" v-model="buyPrice" :formatter="value => `$ ${value}`.replace(/B(?=(d{3})+(?!d))/g, ',')" :parser="value => value.replace(/$s?|(,*)/g, '')" :style="{width: '90%'}"></InputNumber>

            </Col>
            <Col span="12">
            <p>卖出价

            </p>
            <Input v-model="buyPrice" placeholder="USDT" style="width: 90%"></Input>
            </Col>
        </Row>
        <Row :style="{paddingBottom:'10px'}">
            <Col span="12">
            <p>买入量

            </p>
            <Input v-model="buyPrice" placeholder="BTC" style="width: 90%"></Input>
            </Col>
            <Col span="12">
            <p>卖出量

            </p>
            <Input v-model="buyPrice" placeholder="BTC" style="width: 90%"></Input>
            </Col>
        </Row>
        <!-- <!-- <Row> -->
        <Col span="12" :style="{padding:'10px'}">
        <Slider v-model="buyPrice" :step="10" show-stops :style="{width:'90%'}"></Slider>
        </Col>
        <Col span="12" :style="{padding:'10px'}">
        <Slider v-model="buyPrice" :step="10" show-stops :style="{width:'90%'}"></Slider>
        </Col>
        </Row> -->
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
      buyPrice: 100
    }
  }
}
</script>

<style>
.bsd p {
  padding-bottom: 5px;
}
</style>