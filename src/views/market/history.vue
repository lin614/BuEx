<template>
    <Card padding="0" dis-hover="true">
        <p slot="title">
            <Icon type="ios-list-outline"></Icon>成交记录</p>
        <Table :columns="columns1" :data="data1"></Table>
    </Card>
</template>
<script>
export default {
  name: 'history',
  props: ['code'],
  data() {
    return {
      columns1: [
        {
          title: '时间',
          key: 'time',
          width: 200
        },
        {
          title: '交易对',
          key: 'name'
        },
        {
          title: '方向',
          key: 'side'
        },
        {
          title: '价格(USDT)',
          key: 'price'
        },
        {
          title: '委托量',
          key: 'num'
        },
        {
          title: '已成交',
          key: 'numDeal'
        },
        {
          title: '成交均价',
          key: 'meanPrice'
        },
        {
          title: '状态',
          key: 'status'
        },
        {
          title: '操作'
        }
      ],
      data1: [
        {
          time: '2018-04-23 00:19:20',
          name: 'TRX/USDT',
          side: '买入',
          price: 'price',
          num: '84.81',
          numDeal: '84.81',
          meanPrice: '0.054006',
          status: '已成交'
        },
        {
          time: '2018-04-23 00:19:20',
          name: 'TRX/USDT',
          side: '买入',
          price: 'price',
          num: '84.81',
          numDeal: '84.81',
          meanPrice: '0.054006',
          status: '已成交'
        },
        {
          time: '2018-04-23 00:19:20',
          name: 'TRX/USDT',
          side: '买入',
          price: 'price',
          num: '84.81',
          numDeal: '84.81',
          meanPrice: '0.054006',
          status: '已成交'
        },
        {
          time: '2018-04-23 00:19:20',
          name: 'TRX/USDT',
          side: '买入',
          price: 'price',
          num: '84.81',
          numDeal: '84.81',
          meanPrice: '0.054006',
          status: '已成交'
        }
      ]
    }
  },
  mounted() {
    console.log(this.code)
  }
}
</script>