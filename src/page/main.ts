import LoginModal from "component/LoginModal";
import Modal from "component/Modal";
import Component from "../core/Component";

class Main extends Component {
  template() {
    return "<div id='main_page'>Hello World !</div>";
  }

  mounted(): void {
    const $portal = document.getElementById("portal");
    const modal = new Modal($portal);
    const $modalFrame = $portal.querySelector(".modal_frame");
    const loginModal = new LoginModal($modalFrame);
  }
}

export default Main;
