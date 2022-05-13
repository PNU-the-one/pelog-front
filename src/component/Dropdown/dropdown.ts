import Component from "core/Component";
import "./dropdown.css";

// 
export default class Dropdown extends Component{
  setup(){
    this.state = {
      list: ["123","456","789"],
      top: 0,
      left: 0,
    }
    
  }
  template(){
    const list = this.state.list;


    return `<div class='dropdown' style=";">
      <ul>
      ${list.map((li:string, index:number)=>(`<li key=index>${li}</li>`)).join('')}
      </ul>
    </div>`
  }
}