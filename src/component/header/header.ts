import Component from "../../core/Component";
import Login from "./login";
import Logo from "./logo";
import NightMode from "./nightmode";
import SearchBtn from "./searchbtn";
import "./header.css";
import Profile from "component/Profile/profile";

export default class Header extends Component{
  setup(){
    this.state = {
      login : false,
    }

  }
  template(){
    return `
      <div id='header'>
        <div data-component='Logo'></div>
        
        <div class="header-menu">
          <div data-component='NightMode'></div>
          <div data-component='SearchBtn'></div>
          <div style="display:${this.state.login? 'none':''}" data-component='Login'></div>
          <div style="display:${this.state.login? '':'none'}" data-component='Profile'></div>
        </div>
      </div>
    `
  }
  mounted(){
    let login:Function = () => {
      const login = this.state.login;
      this.setState({login: !login});
    }
    
    
    const $logo = this.$target.querySelector('[data-component="Logo"]');
    const $nightmode = this.$target.querySelector('[data-component="NightMode"]')
    const $login = this.$target.querySelector('[data-component="Login"]');
    const $search = this.$target.querySelector('[data-component="SearchBtn"]');
    const $profile = this.$target.querySelector('[data-component="Profile"]');
    
    
    new Logo($logo, {});
    new NightMode($nightmode, {});
    new Login($login, {loginFun: login});
    new SearchBtn($search, {});
    new Profile($profile, {});
  }

}