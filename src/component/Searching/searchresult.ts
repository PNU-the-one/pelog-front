import Component from "core/Component";


class SearchResult extends Component{
  setup(){
    
  }
  template(){
    return `
      <div id="searchresult">
        <p> 총 ${0}개의 포스트를 찾았습니다.
        
      </div>
    `
  }
}

export default SearchResult;