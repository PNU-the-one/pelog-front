import Component from "../../core/Component";
import Recent from "./recent";
import Tranding from "./tranding";
import Filter from "./filter";
import Submenu from "./submenu";
import Dropdown from "component/Dropdown/dropdown";
import "./board.css";
import Tap from "./tap";

export default class Board extends Component{
  setup(){
    this.state={
      selected: ""
    }
  }
  
  template(){
    
    return `
    <div id='board'>
      <div data-component="Tap"></div>
    </div>`
  }
  mounted(){
    const $tap = this.$target.querySelector('[data-component="Tap"]');

    const selected = this.state.selected;
    new Tap($tap, {selected:selected, setSelect:this.setSelect.bind(this)});

    // // new Dropdown($dropdown_filter, {list:["오늘", "이번 주", "이번 달", "올해"], selected:1});
    // new Dropdown($dropdown_submenu, {list:["공지사항", "태그 목록", "서비스 정책", "Slack"]});
  
  }

  setEvent(){

  }
  setSelect(select: string){
    this.setState({selected: select});
  }
    

}