import Component from "core/Component";
import MyInfo from "./MyInfo";
import "./index.css";

export default class MyPelog extends Component {
  setup() {}

  template() {
    return `
      <div id="mypelog">
        <div data-component="MyInfo"></div>
      </div>
    `;
  }

  mounted() {
    const $myinfo = this.$target.querySelector("[data-component='MyInfo']");

    new MyInfo($myinfo, {});
  }
}
