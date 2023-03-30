import router from './router/router.js'

let template = `
<div>
    <h1>2차 시험 문제</h1>
    <router-view></router-view>
</div>`

new Vue({
    el : '#app',
    template : template,
    data : {

    },   
    methods : {
       
    },
    router
})