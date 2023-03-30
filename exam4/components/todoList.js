export default {
    template: 
` <div>
    <h2>To do List 입력</h2>
  <hr>
    <label><input type="text" placeholder="할 일"><button>입력</button></label>
    <h2># 리스트</h2>
    <label><input type="checkbox">빵사기</label>
    <label><input type="checkbox">커피사기</label>
    <label><input type="checkbox">Vue 공부</label>
    <label><input type="checkbox">Java 공부</label>
  </div>`,
data : function(){
    return {
        object : []
    }
},
methods : {
    movieDelete : function(movieCode){
        this.object = this.object.filter(function(item){
            return (item.movieCd != movieCode)
        }, this);

        this.$parent.setParentData(this.object)
    }
}
}