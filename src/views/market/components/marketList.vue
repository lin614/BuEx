<template>
  <Table :columns="col" :data="data" :highlight-row="true" @on-row-click='selectPair'></Table>
</template>
<script>
import Enumerable from 'linq'
export default {
  name: 'marketList',
  props: ['code'],
  data() {
    return {
      col: [
        // {
        //   type: 'index',
        //   width: '30'
        // },
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
      data: [],
      bd: this.$store.state.bd
    }
  },
  methods: {
    selectPair(val, i) {
      console.log('click')
      console.log(val)
      this.$store.commit('setPair', {
        bc: val.name.split('/')[0],
        qc: val.name.split('/')[1]
      })
      this.$router.push({
        name: 'market_trade'
      })
    }
  },
  mounted() {
    let group = Enumerable.from(this.bd.pairs).firstOrDefault(
      p => p.key() === this.code
    )
    this.data = group
      ? Enumerable.from(group.getSource())
          .select((p, i) => {
            return {
              name: p.baseCurrency + '/' + this.code,
              price: 9427.66,
              ud: '300',
              udp: '5.5%',
              open: '9100.55',
              high: '10000',
              low: '8000',
              pre: '9000',
              vol: '12345678'
            }
          })
          .toArray()
      : []
    console.log(group.key() + '--' + group.getSource().length)
  }
}
</script>