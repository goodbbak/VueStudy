import todoList from '../components/todoList.js'
import completeList from '../components/completeList.js'

export default new VueRouter({
    routes : [
        {
            path : '/',
            name : 'todoList',
            component : todoList
        },
        {
            path : '/completeList',
            name : 'completeList',
            component : completeList
        }
    ]
})