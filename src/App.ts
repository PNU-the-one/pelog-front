import Tap from "component/Tap/tap";
import Component from "./core/Component";
<<<<<<< HEAD

export default class App extends Component {
  template() {
    return `
      <div data-component="routeview"></div>
    `;
  }
}
=======
export default class App extends Component{
  template(){
    return `
    <div data-component="routeview"></div>
    <div data-component="Tap"></div>
    `;
  }
  mounted(){
    const $tap = this.$target.querySelector('[data-component="Tap"]');
    new Tap($tap,{});
  }
  
}
>>>>>>> 4fcdaef (feat: add Tap)
