import Board from "component/Board/board";
import Component from "../core/Component";

class Main extends Component {
  template() {
    return "<div data-component='Board'></div>";
  }

  mounted() {
    const $board = this.$target.querySelector("[data-component='Board']");
    new Board($board, {});
  }

  setEvent() {}
}

export default Main;
