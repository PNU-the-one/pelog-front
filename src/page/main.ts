import Board from "component/Board/board";
import LoginModal from "component/LoginModal";
import Component from "../core/Component";

class Main extends Component {
  template() {
    return "<div data-component='Board'></div>";
  }

  mounted() {
    const $board = this.$target.querySelector("[data-component='Board']");
    const $portal = document.getElementById("portal");

    new LoginModal($portal, {});
    new Board($board, {});
  }

  setEvent() {}
}

export default Main;
