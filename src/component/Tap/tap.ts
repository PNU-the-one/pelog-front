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
    const selected = this.state.selected;
    return `
    <div class='tap'>
      <div class="selectTap">
        <div data-component="Tranding" class=${selected == "left" || selected=="" ? "selected": ""}></div>
        <div data-component="Recent" class=${selected == "right" ? "selected": ""}></div>
        <div class='underline ${selected}'></div>
      </div>
      <div data-component="Filter" style='display:${selected == "left" || selected == "" ? "" : "none"};'></div>
      <div data-component="Submenu"></div>
      <div data-component="Dropdown-submenu" style="display:none"></div>
    </div>`
  }
  // <div data-component="Dropdown-filter" style="display:none"></div>

  mounted(){
    const $tranding = this.$target.querySelector('[data-component="Tranding"]');
    const $recent = this.$target.querySelector('[data-component="Recent"]');
    const $filter = this.$target.querySelector('[data-component="Filter"]');
    const $submenu = this.$target.querySelector('[data-component="Submenu"]');
    // const $dropdown_filter = this.$target.querySelector('[data-component="Dropdown-filter"]')
    const $dropdown_submenu = this.$target.querySelector('[data-component="Dropdown-submenu"]')

    new Tranding($tranding, {});
    new Recent($recent, {});
    new Filter($filter, {});
    new Submenu($submenu, {});
    // new Dropdown($dropdown_filter, {list:["오늘", "이번 주", "이번 달", "올해"], selected:1});
    new Dropdown($dropdown_submenu, {list:["공지사항", "태그 목록", "서비스 정책", "Slack"]});
  
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
    // this.addEvent('click', '[data-component="Filter"]', ()=>{

    //   const $filter = this.$target.querySelector('[data-component="Filter"]')
    //   const top = $filter.getBoundingClientRect().top;
    //   const left = $filter.getBoundingClientRect().left;

    //   const $dropdown = this.$target.querySelector('[data-component="Dropdown-filter"]');

    //   const fade = $dropdown.getAttribute('class');
    //   if(fade =="fadein"){
    //     $dropdown.setAttribute('class', `fadeout`);
    //     return;
    //   }

    //   $dropdown.setAttribute('style', `position:absolute; display:block; top:${top+60}px; left:${left-90}px`);
    //   $dropdown.setAttribute('class', `fadein`);
      
    // })


    this.addEvent('click', '[data-component="Submenu"]', ()=>{
      const $submenu = this.$target.querySelector('[data-component="Submenu"]')
      const top = $submenu.getBoundingClientRect().top;
      const left = $submenu.getBoundingClientRect().left;

      const $dropdown = this.$target.querySelector('[data-component="Dropdown-submenu"]');

      const fade = $dropdown.getAttribute('class');
      if(fade =="fadein"){
        $dropdown.setAttribute('class', `fadeout`);
        return;
      }

      $dropdown.setAttribute('style', `position:absolute; display:block; top:${top+60}px; left:${left-170}px`);
      $dropdown.setAttribute('class', `fadein`);

    })
  }

}