import Component from "core/Component";
import "./dropdown.css";

// 
export default class Dropdown extends Component{
  setup(){
    const list = this.props.list;
    const selected = this.props.selected || -1;
    this.state = {
      list: list,
      selected : selected,
    }
  
  }
  template(){
    const list = this.state.list;
    const selected = this.state.selected;

    return `<div class='dropdown' style=";">
      <ul>
      ${list.map((li:string, index:number)=>(`<li  class="${li == selected ? "active" : ""}">${li}</li>`)).join('')}
      </ul>
    </div>`
  }

  setEvent(){
    this.addEvent('click', 'li', (e:any)=>{
      const list:[] = this.state.list;
      const term = e.target.innerText;
      this.props.setFilter(term);
    });
    

  }
}