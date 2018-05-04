<template>
  <Card :padding="0" :dis-hover="true">
    <p slot="title">
      <Icon type="ios-list-outline"></Icon>成交记录</p>
    <Table :columns="col" :data="data"></Table>
    <Page :total="dataCount" :page-size="pageSize" show-total @on-change="changepage"></Page>
  </Card>
</template>
<script>
import util from '@/libs/util'
import axios from 'axios'
export default {
  name: 'history',
  props: ['code'],
  data() {
    return {
      user: this.$store.state.user,
      data: [],
      // 初始化信息总条数

      dataCount: 0,
      // 每页显示多少条
      pageSize: 10,
      col: [
        {
          title: 'ID',
          type: 'index',
          // key: 'orderId'
          width: 50
        },
        // {
        //   title: '用户 ID',
        //   key: 'userId'
        // },
        {
          title: '基础货币',
          key: 'baseCurrency'
        },
        {
          title: '计价货币',
          key: 'quoteCurrency'
        },
        {
          title: '订单数量',
          key: 'amount'
        },
        {
          title: '订单价格',
          key: 'price'
        },
        {
          title: '已成交',
          key: 'filledBaseAmount'
        },
        {
          title: '已成交金额',
          key: 'filledQuoteAmount'
        },
        {
          title: '手续费',
          key: 'filledFeeAmount'
        },
        {
          title: '成交时间',
          key: 'lastFilledAt'
          // width: 100
        },
        {
          title: '订单类型',
          key: 'type'
        },
        {
          title: '订单状态',
          key: 'state'
        },
        // {
        //   title: '订单撤销时间',
        //   key: 'canceledAt'
        // },
        {
          title: '订单创建时间',
          key: 'createdAt'
        },
        {
          title: '操作',
          key: 'action',
          width: 150,
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h(
                'Button',
                {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      this.show(params.index)
                    }
                  }
                },
                '撤销'
              )
            ])
          }
        }
      ],
      dataAll: [
        {
          id: 59378,
          userId: 100009,
          base: 'eth',
          quote: 'usdt',
          price: '100.1000000000',
          amount: '10.1000000000',
          filledBaseAmount: '10.1000000000',
          filledQuoteAmount: '1011.0100000000',
          filledFeeAmount: '0.0202000000',
          lastFilledAt: 1494901400468,
          type: 'buy-limit',
          state: 'filled',
          canceledAt: 0,
          createdAt: 1494901162595
        }
      ]
    }
  },
  methods: {
    show(index) {
      this.$Modal.info({
        title: 'User Info',
        // content: `Name：${this.data6[index].name}<br>Age：${
        //   this.data6[index].age
        // }<br>Address：${this.data6[index].address}`
        content: `Name：<br>Age：<br>Address：`
      })
    },
    upOrders() {
      // console.log('upOrders-userid:', this.user.userid)
      util
        .post('/order/list', { size: 1000, userId: this.user.userid })
        .then(res => {
          if (res.status == '200' && res.data.meta.code == '0')
            // console.log('history-uporders', res)
            this.dataAll = res.data.data
          this.dataCount = this.dataAll.length
          this.changepage(1)
        })
      // axios
      //   .post('http://172.16.2.20:8080/api/order/list', {
      //     size: 1000
      //   })
      //   .then(res => {
      //     this.dataAll = res.data.data
      // var list = []
      // res.data.data.forEach(p => {
      //   list.push({})
      // })
      // console.log(res)
      // })
    },
    changepage(index) {
      // console.log(index)
      var _start = (index - 1) * this.pageSize
      var _end = index * this.pageSize
      this.data = this.dataAll.slice(_start, _end)
    }
  },
  mounted() {
    this.dataAll = []

    this.upOrders()
    this.$nextTick(() => {
      setInterval(this.upOrders, 1000)
    })
  }
}
</script>