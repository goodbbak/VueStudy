export default {
  template: `<div>
              <h3>To do List 입력</h3>
              <hr>
              <label>
                <input type="text" v-model="todo" placeholder="할 일">
                <button type="button" v-on:click="addTodo">입력</button>
              </label>
              <h3>#리스트</h3>
              <div id="list" v-for="todo in todos" >
                <label>
                  <div>
                    <input type="checkbox" v-model="todo.check">
                    <span v-bind:class="{donestyle:todo.check}">{{todo.text}}</span>
                  </div>
                </label>
              </div>
              <p>{{ todos.length }}건 중 {{ completed }}건 처리</p>
             
              <button v-on:click="delCompleted">완료 항목 삭제</button>
              <router-link tag="button" v-bind:to="{name : 'completeList'}">완료 항목 조회</router-link>
            
            </div>`,
  data : function() {
    return {
      delTodos: [],
      todos : [],
      addtext: '',
    }
  },
  created : function(){
    this.todos = this.$parent.getParentData();
  },
  computed: {
    completed: function () {
      return this.todos.filter(function (val) {
        return val.check == true;
      }).length;
    },
  },
  methods : {
    addTodo: function () {
      if (this.todo != '') {
        this.todos.push({
          check: false,
          text: this.todo,
        });
        this.todo = '';
      }
    },
    delCompleted: function () {
      this.delTodos = this.todos.filter(function(val) {
        return val.check == true;
      }) 
      this.$parent.setDelParentData(this.delTodos);
      
      this.todos = this.todos.filter(function (val) {
        return val.check == false;
      })
      this.$parent.setParentData(this.todos);
    },
  }
}