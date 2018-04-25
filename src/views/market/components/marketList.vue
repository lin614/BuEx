<template>
    <Table :columns="columns1" :data="data1"></Table>
</template>
<script>
export default {
  name: 'marketList',
  props: ['code'],
  data() {
    return {
      columns1: [
        {
          title: '名称',
          key: 'name'
        },
        {
          title: '价格',
          key: 'price'
        },
        {
          title: '涨跌',
          key: 'ud'
        },
        {
          title: '涨跌',
          key: 'udp'
        },
        {
          title: '开盘价',
          key: 'open'
        },
        {
          title: '最高价',
          key: 'high'
        },
        {
          title: '最低价',
          key: 'low'
        },
        {
          title: '前收价',
          key: 'pre'
        },
        {
          title: '交易量',
          key: 'vol'
        }
      ],
      data1: [
        {
          name: 'BTC/' + this.code,
          price: 9427.66,
          ud: '300',
          udp: '5.5%',
          open: '9100.55',
          high: '10000',
          low: '8000',
          pre: '9000',
          vol: '12345678'
        },
        {
          name: 'ETH/' + this.code,
          price: 9427.66,
          ud: '300',
          udp: '5.5%',
          open: '9100.55',
          high: '10000',
          low: '8000',
          pre: '9000',
          vol: '12345678'
        },
        {
          name: 'ECH/' + this.code,
          price: 9427.66,
          ud: '300',
          udp: '5.5%',
          open: '9100.55',
          high: '10000',
          low: '8000',
          pre: '9000',
          vol: '12345678'
        },
        {
          name: 'ETC/' + this.code,
          price: 9427.66,
          ud: '300',
          udp: '5.5%',
          open: '9100.55',
          high: '10000',
          low: '8000',
          pre: '9000',
          vol: '12345678'
        },
        {
          name: 'ADA/' + this.code,
          price: 9427.66,
          ud: '300',
          udp: '5.5%',
          open: '9100.55',
          high: '10000',
          low: '8000',
          pre: '9000',
          vol: '12345678'
        },
        {
          name: 'LTC/' + this.code,
          price: 9427.66,
          ud: '300',
          udp: '5.5%',
          open: '9100.55',
          high: '10000',
          low: '8000',
          pre: '9000',
          vol: '12345678'
        },
        {
          name: 'EOS/' + this.code,
          price: 9427.66,
          ud: '300',
          udp: '5.5%',
          open: '9100.55',
          high: '10000',
          low: '8000',
          pre: '9000',
          vol: '12345678'
        }
      ]
    }
  },
  mounted() {
    console.log(this.code)
  }
}
</script>