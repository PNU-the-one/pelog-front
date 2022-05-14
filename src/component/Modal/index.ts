import Component from "core/Component";
import "./index.css";

class Modal extends Component {
  template(): string {
    return `
      <div class='modal_background'>
        <div class='modal_frame'></div>
      </div>
    `;
  }
}

export default Modal;
