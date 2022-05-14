import Component from "core/Component";

class HeartIcon extends Component {
  template() {
    return `
      <svg width="10" height="10" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M18 1l-6 4-6-4-6 5v7l12 10 12-10v-7z"
        ></path>
      </svg>
    `;
  }
}

export default HeartIcon;
