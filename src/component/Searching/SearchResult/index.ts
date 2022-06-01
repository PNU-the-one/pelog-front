import SearchedPost from "component/SearchedPost";
import Component from "core/Component";

class SearchResult extends Component {
  setup() {}

  template() {
    return `
      <div id="searchresult">
        <p> 총 ${0}개의 포스트를 찾았습니다.
        <div></div>
      </div>
    `;
  }

  mounted(): void {
    const $searchresult = this.$target.querySelector("#searchresult > div");

    new SearchedPost($searchresult, {
      writer: "vgihan",
      title: "배열 렌더링하기 !!",
      content:
        "자 오늘은 배열 렌더링 하는 법에 대해 알아볼게요 ! 배열 렌더링 요즘 아주 중요한 개념인데요 ! 배열을 렌더링 하는 거에요 ! 나머지는 다음시간에 알아볼게요 !",
      date: {
        year: 2022,
        month: 5,
        day: 20,
      },
      comment: 10,
    });
  }
}

export default SearchResult;
