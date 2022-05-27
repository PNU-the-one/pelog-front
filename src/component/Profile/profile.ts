import Component from "core/Component";
import "./profile.css";

class Profile extends Component{
  setup(){

  }
  template(){
    const src = this.props.src;
    return `
      <div class='profile'>
          <img class='profileImg' src=''/>
          <div class='profileDiv'>명성</div>
      </div>
    `
  }
  mounted(){
    
  }
}

export default Profile;