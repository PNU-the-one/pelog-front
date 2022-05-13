import Component from "../../core/Component";
import Recent from "./recent";
import Tranding from "./tranding";
import "./tap.css";
import Filter from "./filter";
import Submenu from "./submenu";
import Dropdown from "component/Dropdown/dropdown";

export default class Tap extends Component{
  setup(){
    this.state={
      selected: ""
    }
  }
  
  template(){
    const selected = this.state.selected
    return `
    <div class='tap'>
      <div class="selectTap">
        <div data-component="Tranding" class=${selected == "left" || selected=="" ? "selected": ""}></div>
        <div data-component="Recent" class=${selected == "right" ? "selected": ""}></div>
        <div class='underline ${selected}'></div>
      </div>
      <div data-component="Dropdown" style="display:none"></div>
      <div data-component="Filter"></div>
      <div data-component="Submenu"></div>
    </div>`
  }

  mounted(){
    const $tranding = this.$target.querySelector('[data-component="Tranding"]');
    const $recent = this.$target.querySelector('[data-component="Recent"]');
    const $filter = this.$target.querySelector('[data-component="Filter"]');
    const $submenu = this.$target.querySelector('[data-component="Submenu"]');
    const $dropdown = this.$target.querySelector('[data-component="Dropdown"]')

    new Tranding($tranding, {});
    new Recent($recent, {});
    new Filter($filter, {});
    new Submenu($submenu, {});
    new Dropdown($dropdown, {});
  
  }

  setEvent(){
    this.addEvent('click', '[data-component="Tranding"]', ()=>{
      const selected = this.state.selected;
      if(selected=="left") return;
      this.setState({selected: "left"})
      
    })
    this.addEvent('click', '[data-component="Recent"]', ()=>{
      const selected = this.state.selected;
      if(selected=="right") return;
      this.setState({selected: "right"})
      
    })
    this.addEvent('click', '[data-component="Filter"]', ()=>{

      

      const $filter = this.$target.querySelector('[data-component="Filter"]')
      const top = $filter.getBoundingClientRect().top;
      const left = $filter.getBoundingClientRect().left;
      console.log(top);

      const $dropdown = this.$target.querySelector('[data-component="Dropdown"]');

      const fade = $dropdown.getAttribute('class');
      console.log(fade);
      if(fade =="fadein"){
        $dropdown.setAttribute('class', `fadeout`);
        return;
      }

      $dropdown.setAttribute('style', `position:absolute; display:block`);
      $dropdown.setAttribute('class', `fadein`);
      
    })
  }

}