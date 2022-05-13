import Dropdown from "component/Dropdown/dropdown";
import Component from "core/Component";


export default class Submenu extends Component{
    template(){
        return `
            <div class="submenu">
            <svg class="more" width='2em' height='2em' fill='grey'>
            <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
            </svg>
            </div>
        `
    }
    mounted(){

    }
    setEvent(){
        this.addEvent('click', '.more', () =>{
            this.dropDown();
        })
    }
    dropDown(){

        const $dropdown = this.$target.querySelector('[data-component="dropdown"]')
        new Dropdown($dropdown,{})
    }

}