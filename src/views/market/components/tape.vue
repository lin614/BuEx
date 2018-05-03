<template>
  <div>
    <div style="padding:7px 16px;" class="bottom-border">最新价 1.5389 USDT ≈ 9.84 CNY</div>
    <Table disabled-hover :highlight-row="false" :columns="columns1" :data="data1" class="tapeList" :border="false"></Table>
    <Table disabled-hover :highlight-row="false" :columns="columns1" :data="data2" class="tapeList" :show-header="false" :border="false"></Table>
  </div>
</template>
<script>
export default {
  name: 'tape',
  data() {
    return {
      columns1: [
        {
          title: '',
          key: 'ord'
        },
        {
          title: '价格',
          key: 'price'
        },
        {
          title: '数量',
          key: 'num'
        },
        {
          title: '累计',
          key: 'all'
        }
      ],
      data1: [
        {
          ord: '卖10',
          price: '9427.66',
          num: '300',
          all: '24304'
        },
        {
          ord: '卖9',
          price: '9427.66',
          num: '300',
          all: '24304'
        },
        {
          ord: '卖8',
          price: '9427.66',
          num: '300',
          all: '24304'
        },
        {
          ord: '卖7',
          price: '9427.66',
          num: '300',
          all: '24304'
        },
        {
          ord: '卖6',
          price: '9427.66',
          num: '300',
          all: '24304'
        },
        {
          ord: '卖5',
          price: '9427.66',
          num: '300',
          all: '24304'
        },
        {
          ord: '卖4',
          price: '9427.66',
          num: '300',
          all: '24304'
        },
        {
          ord: '卖3',
          price: '9427.66',
          num: '300',
          all: '24304'
        },
        {
          ord: '卖2',
          price: '9427.66',
          num: '300',
          all: '24304'
        },
        {
          ord: '卖1',
          price: '9427.66',
          num: '300',
          all: '24304'
        }
      ],
      data2: [
        {
          ord: '买1',
          price: '9427.66',
          num: '300',
          all: '24304'
        },
        {
          ord: '买2',
          price: '9427.66',
          num: '300',
          all: '24304'
        },
        {
          ord: '买3',
          price: '9427.66',
          num: '300',
          all: '24304'
        },
        {
          ord: '买4',
          price: '9427.66',
          num: '300',
          all: '24304'
        },
        {
          ord: '买5',
          price: '9427.66',
          num: '300',
          all: '24304'
        },
        {
          ord: '买6',
          price: '9427.66',
          num: '300',
          all: '24304'
        },
        {
          ord: '买7',
          price: '9427.66',
          num: '300',
          all: '24304'
        },
        {
          ord: '买8',
          price: '9427.66',
          num: '300',
          all: '24304'
        },
        {
          ord: '买9',
          price: '9427.66',
          num: '300',
          all: '24304'
        },
        {
          ord: '买10',
          price: '9427.66',
          num: '300',
          all: '24304'
        }
      ]
    }
  },
  mounted() {
    console.log(this.code)
  }
}
</script>
<style>
.tapeList td,
.tapeList th {
  height: auto;
}
</style>