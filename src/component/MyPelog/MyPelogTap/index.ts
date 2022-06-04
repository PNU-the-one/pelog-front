import Component from "core/Component";
import "./index.css";

export default class MyPelogTap extends Component {
  setup() {
    this.state = {
      tap: this.props.tap,
    };
  }

  template() {
    const { tap } = this.state;
    return `
      <div id="pelogtap">
        <a class="mypelogtap ${tap === "글" ? "selected" : ""}" href="/@">글</a>
        <a class="mypelogtap ${tap === "시리즈" ? "selected" : ""}" href="/@/series">시리즈</a>
        <a class="mypelogtap ${tap === "소개" ? "selected" : ""}" href="/@/about">소개</a>
        <div class="mypelogtap-underline ${tap === "글" ? "posts" : ""} ${tap === "시리즈" ? "series" : ""} ${tap === "소개" ? "about" : ""}"></div>
      </div>
    `;
  }

  setEvent() {
    this.addEvent("click", "a", (e: any) => {
      e.preventDefault();
      const tap = e.target.innerText;

      const $t = e.target;

      const { children } = $t.parentElement;

      for (let i = 0; i < 3; i += 1) {
        children[i].setAttribute("class", "mypelogtap");
      }
      $t.setAttribute("class", "mypelogtap selected");

      if (tap === "글") {
        children[3].setAttribute("class", "mypelogtap-underline posts");
      } else if (tap === "시리즈") {
        children[3].setAttribute("class", "mypelogtap-underline series");
      } else if (tap === "소개") {
        children[3].setAttribute("class", "mypelogtap-underline about");
      }
      // this.props.setTap(tap);
    });
  }
}
