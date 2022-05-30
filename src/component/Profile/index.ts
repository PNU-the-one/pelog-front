import Component from "core/Component";
import "./index.css";

class Profile extends Component {
  setup() {}

  template() {
    const { src } = this.props;
    return `
      <div class='profile'>
          <div class='profileDiv'>명성</div>
      </div>
    `;
  }

  // <img class='profileImg' src=''/>
  mounted() {}
}

export default Profile;
