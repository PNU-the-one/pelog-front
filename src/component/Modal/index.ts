import "./index.css";

const Modal = ({ children }: { children: string }) => `
  <div class='modal_background'>
    <div class='modal_frame'>${children}</div>
  </div>
`;

export default Modal;
