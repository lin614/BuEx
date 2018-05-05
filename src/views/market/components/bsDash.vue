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
      <Input v-model="orderBuy.price" :number="true" placeholder="" style="width: 90%"></Input>
      <!-- <InputNumber :max="10000" :step="0.1" v-model="orderBuy.buyPrice" :formatter="value => `$ ${value}`.replace(/B(?=(d{3})+(?!d))/g, ',')" :parser="value => value.replace(/$s?|(,*)/g, '')" :style="{width: '90%'}"></InputNumber> -->

      </Col>
      <Col span="12">
      <p>卖出价

      </p>
      <Input v-model="orderSell.price" :number="true" placeholder="" style="width: 90%"></Input>
      <!-- <InputNumber :max="10000" :step="0.1" v-model="orderSell.buyPrice" :formatter="value => `$ ${value}`.replace(/B(?=(d{3})+(?!d))/g, ',')" :parser="value => value.replace(/$s?|(,*)/g, '')" :style="{width: '90%'}"></InputNumber> -->
      </Col>
    </Row>
    <Row :style="{paddingBottom:'10px'}">
      <Col span="12">
      <p>买入量

      </p>
      <Input v-model="orderBuy.amount" :number="true" placeholder="" style="width: 90%"></Input>
      </Col>
      <Col span="12">
      <p>卖出量

      </p>
      <Input v-model="orderSell.amount" :number="true" placeholder="BTC" style="width: 90%"></Input>
      </Col>
    </Row>
    <Col span="12" :style="{padding:'10px'}">
    <!-- <Slider v-model="orderBuy.amount" :step="10" show-stops :style="{width:'90%'}"></Slider> -->
    </Col>
    <Col span="12" :style="{padding:'10px'}">
    <!-- <Slider v-model="orderBuy.price" :step="1" show-stops :style="{width:'90%'}"></Slider> -->
    </Col>
    </Row>
    <Row>
      <Col span="12" :style="{padding:'10px'}">
      <Button type="success" long :style="{width:'90%'}" @click="subOrder(1)">买入</Button>
      </Col>
      <Col span="12" :style="{padding:'10px'}">
      <Button type="error" long :style="{width:'90%'}" @click="subOrder(2)">卖出</Button>
      </Col>
    </Row>

    <hr/> {{msg}}
  </div>
</template>

<script>
import util from '@/libs/util'
import Enumerable from 'linq'
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
      },
      msg: ''
    }
  },
  methods: {
    subOrder(side) {
      var info = side == 1 ? this.orderBuy : this.orderSell
      let ord = {
        userId: this.user.userid.toString(),
        amount: info.amount.toString(),
        price: info.price.toString(),
        base: this.bd.pair.bc,
        quote: this.bd.pair.qc,
        type: side === 1 ? 'buy-limit' : 'sell-limit'
      }
      console.log('ord:', ord)
      var parms = util.parms(ord)
      this.$Loading.start()
      util
        .post(
          '/order/submit?' + parms
          //'/order/submit?userId=12&amount=1&price=1&base=BTC&quote=ETH&type=buy-limit'
        )
        .then(res => {
          console.log(res)
          this.msg = JSON.stringify(res.data)
          this.$Modal.info({
            title: '提示',
            content: `订单提交` + res.data.meta.message
          })
          this.$Loading.finish()
          // console.log('history-uporders', res)
          // if (res.status == '200' && res.data.meta.code == '0') {
          //   //   console.log('history-uporders', res)
          // }
        })
        .catch(err => {
          console.error(err)
          this.$Loading.error()
        })
      //   util
      //     .post('/order/list', { size: 1000, userId: this.user.userid })
      //     .then(res => {
      //       if (res.status == '200' && res.data.meta.code == '0')
      //         console.log('history-uporders', res)
      //       this.dataAll = res.data.data
      //       this.dataCount = this.dataAll.length
      //     })
    }
  }
}
</script>

<style>
.bsd p {
  padding-bottom: 5px;
}
</style>