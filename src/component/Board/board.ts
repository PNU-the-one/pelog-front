import Component from "../../core/Component";
import Recent from "./recent";
import Tranding from "./tranding";
import Filter from "./filter";
import Submenu from "./submenu";
import Dropdown from "component/Dropdown/dropdown";
import "./board.css";
import Tap from "./tap";
import Cardlist from "./Cardlist";

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
      <div data-component="Cardlist"></div>
    </div>`
  }
  mounted(){
    const $tap = this.$target.querySelector('[data-component="Tap"]');
    const $cardlist = this.$target.querySelector('[data-component="Cardlist"]');

    const selected = this.state.selected;
    new Tap($tap, {selected:selected, setSelect:this.setSelect.bind(this)});
    new Cardlist($cardlist, {});
  }

  setEvent(){

  }
  setSelect(select: string){
    this.setState({selected: select});
  }
    

}