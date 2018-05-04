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
            <InputNumber :max="10000" :step="0.1" v-model="orderBuy.buyPrice" :formatter="value => `$ ${value}`.replace(/B(?=(d{3})+(?!d))/g, ',')" :parser="value => value.replace(/$s?|(,*)/g, '')" :style="{width: '90%'}"></InputNumber>

            </Col>
            <Col span="12">
            <p>卖出价

            </p>
            <InputNumber :max="10000" :step="0.1" v-model="orderSell.buyPrice" :formatter="value => `$ ${value}`.replace(/B(?=(d{3})+(?!d))/g, ',')" :parser="value => value.replace(/$s?|(,*)/g, '')" :style="{width: '90%'}"></InputNumber>
            </Col>
        </Row>
        <Row :style="{paddingBottom:'10px'}">
            <Col span="12">
            <p>买入量

            </p>
            <Input v-model="orderBuy.amount" placeholder="" style="width: 90%"></Input>
            </Col>
            <Col span="12">
            <p>卖出量

            </p>
            <Input v-model="orderSell.amount" placeholder="BTC" style="width: 90%"></Input>
            </Col>
        </Row>
        <!-- <!-- <Row> -->
        <Col span="12" :style="{padding:'10px'}">
        <Slider v-model="orderBuy.amount" :step="10" show-stops :style="{width:'90%'}"></Slider>
        </Col>
        <Col span="12" :style="{padding:'10px'}">
        <Slider v-model="orderBuy.price" :step="10" show-stops :style="{width:'90%'}"></Slider>
        </Col>
        </Row> -->
        <Row>
            <Col span="12" :style="{padding:'10px'}">
            <Button type="success" long :style="{width:'90%'}" @click="subOrder(1)">买入</Button>
            </Col>
            <Col span="12" :style="{padding:'10px'}">
            <Button type="error" long :style="{width:'90%'}" @click="subOrder(2)">卖出</Button>
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
  props: {
    type: { type: Number, required: true }
  },
  data() {
    return {
      bd: this.$store.state.bd,
      user: this.$store.state.user,
      orderBuy: {
        price: 0,
        amount: 0,
        percent: 0
      },
      orderSell: {
        price: 0,
        amount: 0,
        percent: 0
      }
    }
  },
  methods: {
    subOrder(side) {
      var info = side ? orderSell : orderBuy
      let ord = {
        userId: this.user.userId,
        amount: info.amount,
        price: info.price,
        base: bd.pair.bc,
        quote: bd.pair.qc,
        type: this.type
      }
      console.log('ord:')
      console.log(ord)
    }
  }
}
</script>

<style>
.bsd p {
  padding-bottom: 5px;
}
</style>