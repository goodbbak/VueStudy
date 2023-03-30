import completeList from '../components/completeList.js'
import todoList from '../components/todoList.js'



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
            component : completeList,       
        }
    ]
})