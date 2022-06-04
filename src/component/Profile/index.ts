import Component from "core/Component";
import "./index.css";

class Profile extends Component {
  setup() {}

  template() {
    const { src } = this.props;
    return `
      <div class='profile'>
          <img class='profileImg'></div>
      </div>
    `;
  }

  mounted() {}
}

export default Profile;
