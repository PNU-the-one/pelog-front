import MyPelog from "component/MyPelog";
import Component from "core/Component";

export default class MyPelogPage extends Component {
  setup() {}

  template() {
    return `
      <div data-component="MyPelog"></div>
    `;
  }

  mounted() {
    const $mypelog = this.$target.querySelector("[data-component='MyPelog']");

    new MyPelog($mypelog, {});
  }
}
