import Dropdown from "component/Dropdown/dropdown";
import Component from "core/Component";
import "./submenu.css";


export default class Submenu extends Component{
    template(){
        return `
            <div class="submenu">
                <svg class="more" width='2em' height='2em' fill='grey'>
                    <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                </svg>

                <div data-component="Dropdown-submenu" style="display:none;"></div>

            </div>
        `
    }
    mounted(){
        const $dropdown = this.$target.querySelector('[data-component="Dropdown-submenu"]')
        new Dropdown($dropdown, {list:["공지사항", "태그 목록", "서비스 정책", "Slack"]});
    }
    setEvent(){
        this.addEvent('click', '.submenu', ()=>{
            const $dropdown = this.$target.querySelector('[data-component="Dropdown-submenu"]');

            const $submenu = this.$target.querySelector('.submenu')
            const top = $submenu.getBoundingClientRect().top;
            const right = $submenu.getBoundingClientRect().right;
      
      
            const fade = $dropdown.getAttribute('class');
            if(fade =="fadein"){
              $dropdown.setAttribute('class', `fadeout`);
              return;
            }
            $dropdown.setAttribute('style', `position:absolute; display:block; top:${top-50}px; right:${1}rem`);
            $dropdown.setAttribute('class', `fadein`);
        })
    }

}