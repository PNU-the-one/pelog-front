import Component from "core/Component";
import Tranding from "./tranding";
import Recent from "./recent";
import Filter from "./filter";
import Submenu from "./submenu";
import "./tap.css";



export default class Tap extends Component{
  setup(){

  }
  template(){
    const selected = this.props.selected;
    return `
    <div id="tap">
        <div class="selectTap">
          <div class="select">
          <div data-component="Tranding" class=${selected == "tranding" || selected=="" ? "selected": ""}></div>
          <div data-component="Recent" class=${selected == "recent" ? "selected": ""}></div>
          <div class='underline ${selected}'></div>
          </div>
          <div data-component="Filter" style='display:${selected == "tranding" || selected == "" ? "" : "none"};'></div>
        </div>
      <div data-component="Submenu"></div>
    </div>
    </div>
    `
  }
  mounted(){
    const $tranding = this.$target.querySelector('[data-component="Tranding"]');
    const $recent = this.$target.querySelector('[data-component="Recent"]');
    const $filter = this.$target.querySelector('[data-component="Filter"]');
    const $submenu = this.$target.querySelector('[data-component="Submenu"]');

    new Tranding($tranding, {});
    new Recent($recent, {});
    new Filter($filter, {});
    new Submenu($submenu, {});
  }
  setEvent(){
    this.addEvent('click', '[data-component="Tranding"]', ()=>{
      const selected = this.props.selected;
      if(selected=="tranding") return;
      this.props.setSelect("tranding");
      
    })
    this.addEvent('click', '[data-component="Recent"]', ()=>{
      const selected = this.props.selected;
      if(selected=="recent") return;
      this.props.setSelect("recent");
      
    })


    // this.addEvent('click', '[data-component="Submenu"]', ()=>{
    //   const $submenu = this.$target.querySelector('[data-component="Submenu"]')
    //   const top = $submenu.getBoundingClientRect().top;
    //   const left = $submenu.getBoundingClientRect().left;

    //   const $dropdown = this.$target.querySelector('[data-component="Dropdown-submenu"]');

    //   const fade = $dropdown.getAttribute('class');
    //   if(fade =="fadein"){
    //     $dropdown.setAttribute('class', `fadeout`);
    //     return;
    //   }

    //   $dropdown.setAttribute('style', `position:absolute; display:block; top:${top+60}px; left:${left-170}px`);
    //   $dropdown.setAttribute('class', `fadein`);

    // })
  }
}
