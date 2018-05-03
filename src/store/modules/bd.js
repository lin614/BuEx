export default {
  state: {
    curs: [], //所有货币类型
    pairs: [] //交易对
  },
  mutations: {
    initCurs(s, list) {
      s.curs = list
    },
    initPairs(s, list) {
      s.curs = list
    }
  }
}
