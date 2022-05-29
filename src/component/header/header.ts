import Profile from "component/Profile/profile";
import Dropdown from "component/Dropdown/dropdown";
import Component from "../../core/Component";
import Login from "./login";
import Logo from "./logo";
import NightMode from "./nightmode";
import SearchBtn from "./searchbtn";
import "./header.css";
import NewPost from "./newpost";

export default class Header extends Component {
  setup() {
    this.state = {
      login: false,
    };
  }

  template() {
    return `
      <div id='header'>
        <div data-component='Logo'></div>
        
        <div class="header-menu">
          <div data-component='NightMode'></div>
          <div data-component='SearchBtn'></div>
          <div style="display:${this.state.login ? "" : "none"}" data-component='NewPost'></div>
          <div style="display:${this.state.login ? "none" : ""}" data-component='Login'></div>
          <div style="display:${this.state.login ? "flex" : "none"}" class='profileBtns'>
            <div data-component='Profile'></div>
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"></path></svg>
            <div data-component='Dropdown-profile' style="display:none"></div>
          </div>

        </div>
      </div>
    `;
  }

  mounted() {
    const login: Function = () => {
      const { log } = this.state;
      this.setState({ login: !log });
    };

    const $logo = this.$target.querySelector("[data-component='Logo']");
    const $nightmode = this.$target.querySelector("[data-component='NightMode']");
    const $login = this.$target.querySelector("[data-component='Login']");
    const $search = this.$target.querySelector("[data-component='SearchBtn']");
    const $profile = this.$target.querySelector("[data-component='Profile']");
    const $newpost = this.$target.querySelector("[data-component='NewPost']");
    const $dropdown = this.$target.querySelector("[data-component='Dropdown-profile']");

    new Logo($logo, {});
    new NightMode($nightmode, {});
    new Login($login, { loginFun: login });
    new SearchBtn($search, {});
    new Profile($profile, {});
    new NewPost($newpost, {});
    new Dropdown($dropdown, { list: ["내 벨로그", "새 글 작성", "임시 글", "읽기 목록", "설정", "로그아웃"] });
  }

  setEvent() {
    this.addEvent("click", ".profileBtns", () => {
      const $dropdown = this.$target.querySelector("[data-component='Dropdown-profile']");
      const $filter = this.$target.querySelector(".profileBtns svg");
      const { top } = $filter.getBoundingClientRect();
      // const { right } = $filter.getBoundingClientRect();

      // const $dropdown = this.$target.querySelector('[data-component="Dropdown-filter"]');

      const fade = $dropdown.getAttribute("class");
      if (fade === "fadein") {
        $dropdown.setAttribute("class", "fadeout");
        return;
      }
      $dropdown.setAttribute("style", `position:absolute; display:block; top:${top + 30}px; right:${0}rem`);
      $dropdown.setAttribute("class", "fadein");
    });
    this.addEvent("click", "[data-component='Dropdown-profile']", () => {
      const $dropdown = this.$target.querySelector("[data-component='Dropdown-profile']");
      $dropdown.setAttribute("class", "fadeout");
    });
  }
}
