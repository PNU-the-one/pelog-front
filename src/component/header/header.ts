import Component from "../../core/Component";
import Login from "./login";
import Logo from "./logo";
import NightMode from "./nightmode";
import Search from "./search";
import "./header.css";

export default class Header extends Component{
  setup(){

  }
  template(){
    return `
      <div id='header'>
        <div data-component='Logo'></div>
        
        <div class="header-menu">
          <div data-component='NightMode'></div>
          <div data-component='Search'></div>
          <div data-component='Login'></div>
          <div data-component='profile'></div>
        </div>
      </div>
    `
  }
  mounted(){
    const $logo = this.$target.querySelector('[data-component="Logo"]');
    const $nightmode = this.$target.querySelector('[data-component="NightMode"]')
    const $login = this.$target.querySelector('[data-component="Login"]');
    const $search = this.$target.querySelector('[data-component="Search"]');
    
    
    new Logo($logo, {});
    new NightMode($nightmode, {});
    new Login($login, {});
    new Search($search, {});
  }
}