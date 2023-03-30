export default {
  template: `<div>
              <h3>Completed To Do List</h3>
              <div id="list" v-for="todo in delTodo">
                <label>
                    <input type="checkbox" v-model="todo.check">
                    <span v-bind:class="{donestyle:todo.check}">{{todo.text}}</span>
                </label>
              </div>

              <button v-on:click="deleteToDo">영구삭제</button>
              <router-link tag="button" v-bind:to="{name : 'todoList'}">To Do List 이동</router-link>
            </div>`,
  data : function() {
    return {
      delTodo : []
    }
  },
  created : function(){
    this.delTodo = this.$parent.getDelParentData();
  },
  methods : {
    deleteToDo: function () {
      this.delTodo = this.delTodo.filter(function (val) {
        return val.check == false;
      })
      this.$parent.setDelParentData(this.delTodo);
    },
  }
}