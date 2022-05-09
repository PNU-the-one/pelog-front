import Component from "../../core/Component";

export default class Filter extends Component{
    setup(){
    }
    template(){
        return `
        <div class='filter'>
        이번 주<svg width='1em' height='1em'><path d="M7 10l5 5 5-5z"></path></svg>
        </div>
        `
    }
    mounted(){
    }
}
