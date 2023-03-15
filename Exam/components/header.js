export default {
  template: `
  <header>
    <h2>영화 검색 사이트</h2>
    <h2>영화 검색 (오늘날짜:{{today}})</h2>
    <input type="date" v-model="selectedDate"/><button @click="search">검색</button>

  </header>
  `,
  data: function() {
    let date = new Date().toLocaleDateString() 
      return {
        today : date.slice(0,4)+'년 '+date.slice(5,7)+'월 '+date.slice(9,11)+'일',
        selectedDate : '',
      }
  },
  methods:{
    search:function(){
      const cuttedDate = this.selectedDate.replaceAll('-', '');
      fetch(`https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=${cuttedDate}`)
        .then((res) => res.json())
        .then((data) => {
          let list = data.boxOfficeResult.dailyBoxOfficeList
          console.log(list)
          this.$emit('header-event', list)
        })
        .catch((err) => console.log(err));
    }
  },

}
