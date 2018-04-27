<style lang="less">
@import './mine.less';
@import '../../styles/common.less';
</style>
<template>
  <div class="home-main">

    <Row :gutter="10" class="margin-top-10">
      <Col :md="24" :lg="8" :style="{marginBottom: '10px'}">
      <Card dis-hover="true">
        <p slot="title" class="card-title">
          <Icon type="android-map"></Icon>
          账户资金
        </p>
        <div class="data-source-row">
          <Row type="flex" class="user-infor">
            <Col span="8">
            <Row class-name="made-child-con-middle" type="flex" align="middle">
              <img class="avator-img" :src="avatorPath" />
            </Row>
            </Col>
            <Col span="16" style="padding-left:6px;">
            <Row class-name="made-child-con-middle" type="flex" align="middle">
              <div>
                <b class="card-user-infor-name">￥10000 CNY</b>
                <p>$ 600 USD</p>
              </div>
            </Row>
            </Col>
          </Row>
          <div class="line-gray"></div>
          <Row class="margin-top-8">
            <Col span="8">
            <p class="notwrap">上次登录时间:</p>
            </Col>
            <Col span="16" class="padding-left-8">2017.09.12-13:32:20</Col>
          </Row>
          <Row class="margin-top-8">
            <Col span="8">
            <p class="notwrap">上次登录地点:</p>
            </Col>
            <Col span="16" class="padding-left-8">北京1</Col>
          </Row>
        </div>
      </Card>
      </Col>
      <Col :md="24" :lg="8" :style="{marginBottom: '10px'}">
      <Card dis-hover="true">
        <p slot="title" class="card-title">
          <Icon type="ios-pulse-strong"></Icon>
          持仓状况
        </p>
        <div class="data-source-row">
          <data-source-pie></data-source-pie>
        </div>
      </Card>
      </Col>
      <Col :md="24" :lg="8">
      <Card dis-hover="true">
        <p slot="title" class="card-title">
          <Icon type="android-wifi"></Icon>
          涨幅行情
        </p>
        <div class="data-source-row">
          <pl-chart></pl-chart>

        </div>
      </Card>
      </Col>
    </Row>
  </div>
</template>

<script>
import cityData from './map-data/get-city-value.js'
import homeMap from './components/map.vue'
import dataSourcePie from './components/dataSourcePie.vue'
import visiteVolume from './components/visiteVolume.vue'
import serviceRequests from './components/serviceRequests.vue'
import userFlow from './components/userFlow.vue'
import countUp from './components/countUp.vue'
import inforCard from './components/inforCard.vue'
import bitCard from './components/bitCard.vue'
import mapDataTable from './components/mapDataTable.vue'
import toDoListItem from './components/toDoListItem.vue'
import beChart from './components/beChart.vue'
import plChart from './components/plChart.vue'

export default {
  name: 'home',
  components: {
    homeMap,
    dataSourcePie,
    visiteVolume,
    serviceRequests,
    userFlow,
    beChart,
    plChart,
    countUp,
    inforCard,
    bitCard,
    mapDataTable,
    toDoListItem
  },
  data() {
    return {
      toDoList: [
        {
          title: '去iView官网学习完整的iView组件'
        },
        {
          title: '去iView官网学习完整的iView组件'
        },
        {
          title: '去iView官网学习完整的iView组件'
        },
        {
          title: '去iView官网学习完整的iView组件'
        },
        {
          title: '去iView官网学习完整的iView组件'
        }
      ],
      count: {
        createUser: 496,
        visit: 3264,
        collection: 24389305,
        transfer: 39503498
      },
      cityData: cityData,
      showAddNewTodo: false,
      newToDoItemValue: ''
    }
  },
  computed: {
    avatorPath() {
      console.log(localStorage.avatorImgPath)
      return localStorage.avatorImgPath
    }
  },
  methods: {
    addNewToDoItem() {
      this.showAddNewTodo = true
    },
    addNew() {
      if (this.newToDoItemValue.length !== 0) {
        this.toDoList.unshift({
          title: this.newToDoItemValue
        })
        setTimeout(() => {
          this.newToDoItemValue = ''
        }, 200)
        this.showAddNewTodo = false
      } else {
        this.$Message.error('请输入待办事项内容')
      }
    },
    cancelAdd() {
      this.showAddNewTodo = false
      this.newToDoItemValue = ''
    }
  }
}
</script>
