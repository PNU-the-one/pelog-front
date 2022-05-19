import Component from "core/Component";
import "./cardlist.css";
import Card from "component/Card";

export default class Cardlist extends Component{
  setup(){

  }

  template(){
    const list = ['123', '456', '789', "1", "2"];

    return`
      <div id="cardlist">
        ${list.map((v)=>(
          `<div data-component="Card" class="${v}"></div>`
        )).join("")}
      </div>
    `
  }
  mounted(){
    const list = ['123', '456', '789', "1", "2"];



    const tmp = this.$target.querySelectorAll('[data-component="Card"]');
    tmp.forEach(element => {
      new Card(element, {});
    });
  }
}