import Component from "../../core/Component";
import "./login.css";

export default class Login extends Component {
  setup() {}

  template() {
    return `<div class='login'>
      <div class='login-btn'>로그인<div>
    </div>`;
  }

  setEvent() {
    this.addEvent("click", ".login-btn", () => {
      this.props.loginFun();
    });
  }
}
