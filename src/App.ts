import Header from "component/header/header";
import Component from "./core/Component";
<<<<<<< HEAD
<<<<<<< HEAD

export default class App extends Component {
  template() {
    return `
      <div data-component="routeview"></div>
    `;
  }
}
=======
=======

>>>>>>> 01fb56f (style : all style change)
export default class App extends Component{
  template(){
    return `
    <div data-component="Header"></div>
    <div data-component="routeview"></div>
    `;
  }
  mounted(){
    const $header = this.$target.querySelector('[data-component="Header"]');
    new Header($header, {});
  }
  
}
>>>>>>> 4fcdaef (feat: add Tap)
