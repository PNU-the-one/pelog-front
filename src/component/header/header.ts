import Component from "../../core/Component";
import Logo from "./logo";
import NightMode from "./nightmode";

export default class Header extends Component{
  setup(){

  }
  template(){
    return `
      <div id='header'>
        <div data-component='Logo'></div>
        <div data-component='NightMode'></div>
        <div data-component='search'></div>
        <div data-component='login'></div>
        <div data-component='profile'></div>
      </div>
    `
  }
  mounted(){
    const $logo = this.$target.querySelector('[data-component="Logo"]');
    const $nightmode = this.$target.querySelector('[data-component="NightMode"]')
    new Logo($logo, {});
    new NightMode($nightmode, {});
  }
}