import Component from "core/Component";
import { dispatch } from "core/Store";
import "./index.css";

export default class Login extends Component {
  setup() {}

  template() {
    return `<div class='login'>
      <div class='login-btn'>로그인<div>
    </div>`;
  }

  setEvent() {
    const $loginBtn = this.$target.querySelector(".login");

    $loginBtn.addEventListener("click", () => {
      dispatch({ type: "OPEN_LOGIN_MODAL", payload: {} });
    });
  }
}
