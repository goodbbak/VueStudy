import myHeader from "./components/header.js";
//import router from "./router/router.js";
import myMovielist from "./components/movieList.js";

let template = `
<div>
  <my-header @header-event="getList"></my-header>
  <my-movielist :object="dataArray"></my-movieList>
  
</div>`;

new Vue({
  el: "#app",
  template: template,
  data: {
    dataArray: [], 
  },
  components: {
    "my-header": myHeader, 
    "my-movielist": myMovielist
  },
  methods: {
    getList: function(list){
      this.dataArray=list
      console.log('list='+list)
    }
  },

});
