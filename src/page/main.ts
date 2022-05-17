import Board from "component/Board/board";
import Component from "../core/Component";

<<<<<<< HEAD
class Main extends Component {
  template() {
    return "<div id='main_page'></div>";
=======
class Main extends Component{
  template(){
    return `<div data-component='Board'></div>`;
  }
  mounted(){
<<<<<<< HEAD
    const $header = this.$target.querySelector('[data-component="Header"]');
    new Header($header, {});
<<<<<<< HEAD
>>>>>>> db879c9 (feat: add logo, nightmode btn)
=======
>>>>>>> 09299bc (feat: add logo, nightmode btn)
=======
    const $board = this.$target.querySelector('[data-component="Board"]');
    new Board($board, {});
>>>>>>> 01fb56f (style : all style change)
  }
}

export default Main;
