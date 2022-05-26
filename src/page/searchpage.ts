import Component from "core/Component";
import Searching from "component/Searching/searching";

export default class SearchPage extends Component{
  setup(){

  }
  template(){
    return `
      <div data-component="Searching"></div>
    `
  }
  mounted(){
    const $searching = this.$target.querySelector('[data-component="Searching"]');

    new Searching($searching, {});
  }
  
}