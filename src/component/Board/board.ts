import Component from "../../core/Component";
import "./board.css";
import Tap from "./tap";
import Postlist from "./postlist";

export default class Board extends Component {
  setup() {
    this.state = {
      selected: "",
    };
  }

  template() {
    return `
    <div id="board">
      <div data-component="Tap"></div>
      <div data-component="Postlist"></div>
    </div>`;
  }

  mounted() {
    const $tap = this.$target.querySelector("[data-component='Tap']");
    const $postlist = this.$target.querySelector("[data-component='Postlist']");

    const { selected } = this.state;

    new Tap($tap, { selected, setSelect: this.setSelect.bind(this) });
    new Postlist($postlist, {});
  }

  setEvent() {}

  setSelect(select: string) {
    this.setState({ selected: select });
  }
}
