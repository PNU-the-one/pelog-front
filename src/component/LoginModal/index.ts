import WelcomeIcon from "component/Icon/welcome";
import Component from "core/Component";
import "./index.css";

class LoginModal extends Component {
  template(): string {
    return `<div class='login_modal'>
      <div class='login_modal_left'>
        <div></div>
        <p>환영합니다!</p>
      </div>
      <div class='login_modal_right'>
        <button class='cancel_button'>X</button>
        <div class='login_modal_title'>
          <p>로그인</p>
        </div>
        <div class='login_modal_content'>
          <p>이메일로 로그인</p>
          <div class='login_modal_input'>
            <input type='text' placeholder='이메일을 입력하세요.' />
            <button class='login'>로그인</button>
          </div>
        </div>
        <div class='login_modal_content'>
          <p>소셜 계정으로 로그인</p>
          <div class='login_modal_input'>
            <button class='github_login'>git</button>
            <button class='google_login'>goo</button>
            <button class='facebook_login'>fac</button>
          </div>
        </div>
        <p>아직 회원이 아니신가요?<a href="#">회원가입</a></p>
      </div>
    </div>`;
  }

  mounted(): void {
    const $right = this.$target.querySelector(".login_modal_left > div");

    const welcome = new WelcomeIcon($right);
  }
}

export default LoginModal;
