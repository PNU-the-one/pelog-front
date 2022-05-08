import Header from "../component/header/header";
import Component from "../core/Component";

<<<<<<< HEAD
class Main extends Component {
  template() {
    return "<div id='main_page'></div>";
=======
class Main extends Component{
  template(){
    return `<div data-component='Header'></div>`;
  }
  mounted(){
    const $header = this.$target.querySelector('[data-component="Header"]');
    new Header($header, {});
>>>>>>> db879c9 (feat: add logo, nightmode btn)
  }
}

export default Main;
