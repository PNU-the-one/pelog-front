import Component from "core/Component";
import MyInfo from "./MyInfo";
import "./index.css";
import MyPelogTap from "./MyPelogTap";

export default class MyPelog extends Component {
  setup() {
    this.state = {
      tap: "글",
    };
  }

  template() {
    return `
      <div id="mypelog">
        <div data-component="MyInfo"></div>
        <div data-component="MyPelogTap"></div>
      </div>
    `;
  }

  mounted() {
    const $myinfo = this.$target.querySelector("[data-component='MyInfo']");
    const $peloftap = this.$target.querySelector("[data-component='MyPelogTap']");
    new MyInfo($myinfo, {});

    const setTap = (t: string) => {
      this.setState({ tap: t });
    };
    new MyPelogTap($peloftap, { tap: this.state.tap, setTap });
  }
}
