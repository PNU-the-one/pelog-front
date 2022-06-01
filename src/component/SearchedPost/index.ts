import Tag from "component/Tag";
import Component from "core/Component";
import "./index.css";

class SearchedPost extends Component {
  setup() {}

  template() {
    return `<div class="searched_post" data-index="${this.props.key}">
      <div class="searched_profile">
        <img />
        <span>${this.props.writer}</span>
      </div>
      <div class="searched_title">
        <p>${this.props.title}</p>
      </div>
      <div class="searched_content">
        <p>${this.props.content}</p>
      </div>
      <div class="searched_tags">
        <div>
          ${Tag({ name: "react" })}
        </div>
      </div>
      <div class="searched_info">
        <p>
          <span>${this.props.date.year}년 ${this.props.date.month}월 ${this.props.date.day}일</span>
          <span> · </span>
          <span>${this.props.comment}개의 댓글</span>
        </p>
      </div>
    </div>`;
  }
}

export default SearchedPost;
