import Component from "core/Component";
import MyInfo from "./MyInfo";
import "./index.css";
import MyPelogTap from "./MyPelogTap";
import MyPelogMain from "./MyPelogMain";
import MyPelogAbout from "./MyPelogAbout";
import MyPelogSeries from "./MyPelogSeries";

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
        <div data-component="MyPelogMain" style="visibility: ${this.state.tap === "글" ? "visible" : "hidden"};"></div>
        <div data-component="MyPelogSeries" style="visibility: ${this.state.tap === "시리즈" ? "visible" : "hidden"};"></div>
        <div data-component="MyPelogAbout" style="visibility: ${this.state.tap === "소개" ? "visible" : "hidden"};"></div>
      </div>
    `;
  }

  mounted() {
    const $myinfo = this.$target.querySelector("[data-component='MyInfo']");
    const $peloftap = this.$target.querySelector("[data-component='MyPelogTap']");
    const $main = this.$target.querySelector("[data-component='MyPelogMain']");
    const $series = this.$target.querySelector("[data-component='MyPelogSeries']");
    const $about = this.$target.querySelector("[data-component='MyPelogAbout']");

    new MyInfo($myinfo, {});

    const setTap = (t: string) => {
      this.setState({ tap: t });
    };
    new MyPelogTap($peloftap, { tap: this.state.tap, setTap });
    new MyPelogMain($main, {});
    new MyPelogSeries($series, {});
    new MyPelogAbout($about, {});
  }
}
