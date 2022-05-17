import Header from "component/header/header";
import Component from "./core/Component";

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