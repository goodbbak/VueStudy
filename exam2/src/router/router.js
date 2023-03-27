import completeList from '../components/completeList.js'
import todoList from '../components/todoList.js'



export default new VueRouter({
    routes : [
        {
            path : '/completeList',
            name : 'completeList',
            component : completeList
        },
        {
            path : '/todoList',
            name : 'todoList',
            component : todoList,
        }
    ]
})