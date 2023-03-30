import router from './router/router.js'

let template = `<div>
                  <h2>2차 시험 문제</h2>
                  <router-view></router-view>
                </div>`

new Vue({
  el: '#app',
  template: template,
  data: {
    delTodo: [],
    lists: [
      {
        check: false,
        text: '빵사기',
      },
      {
        check: false,
        text: '커피사기',
      },
      {
        check: false,
        text: 'Vue 공부하기',
      },
       {
        check: false,
        text: 'Java 공부하기',
      },
    ]
  },
  methods: {
    getParentData: function () { 
      return this.lists 
    },
    setParentData: function (newList) { 
      this.lists = newList
    },
    getDelParentData: function () { 
      return this.delTodo
    },
    setDelParentData: function (permanentDel) { 
      this.delTodo = permanentDel
    },
  },
  router
})
