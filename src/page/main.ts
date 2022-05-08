import Header from "../component/header/header";
import Component from "../core/Component";

class Main extends Component{
  template(){
    return `<div data-component='Header'></div>`;
  }
  mounted(){
    const $header = this.$target.querySelector('[data-component="Header"]');
    new Header($header, {});
  }
}

export default Main;