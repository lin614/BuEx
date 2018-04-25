<template>
    <div>
        <Row>
            <Col :md="24" :lg="4">
            <Avatar>BTC</Avatar>
            </Col>
            <Col :md="24" :lg="20">
            <Progress :percent="4.5"></Progress>
            </Col>
        </Row>
        <Row>
            <Col :md="24" :lg="4">
            <Avatar>ETH</Avatar>
            </Col>
            <Col :md="24" :lg="20">
            <Progress :percent="8"></Progress>
            </Col>
        </Row>
        <Row>
            <Col :md="24" :lg="4">
            <Avatar>USDT</Avatar>
            </Col>
            <Col :md="24" :lg="20">
            <Progress :percent="3"></Progress>
            </Col>
        </Row>
    </div>

</template>
<script>
export default {
  name: 'beChart'
}
</script>

<style>
li {
  padding: 5px;
}
/* .ivu-progress {
  width: 60%;
} */
</style>

