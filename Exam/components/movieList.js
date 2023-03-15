export default {
  template: `<div>
                <table id="list">  
                  <thead>
                    <th>순위</th>
                    <th>영화 제목</th>
                    <th>누적 관객수</th>
                    <th>개봉 날짜</th>
                    <th></th>
                  </thead>
                  <tbody>
                    <tr v-for="item in object">
                      <td>{{item.rnum}}</td>
                      <td>{{item.movieNm}}</td>
                      <td>{{item.audiAcc}}</td>
                      <td>{{item.openDt}}</td>
                      <td><button>삭제</button></td>
                    </tr>
                  </tbody>
                </table>
            </div>`,
  props:['object'],
   
 
};
