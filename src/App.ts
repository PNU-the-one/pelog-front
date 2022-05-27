import Header from "component/header/header";
import Component from "./core/Component";


export default class App extends Component{
  template(){
    return `
    <div data-component="Header"></div>
    <div data-component="routeview"></div>
    `;
  }
  mounted(){
    const $header = this.$target.querySelector('[data-component="Header"]');
    new Header($header, {});
  }
  setEvent(){
    this.addEvent('click', 'body', (e:any)=>{

      // 이 가드 어떻게 하면 좋을까요?
      if(e.target.closest(".filter") || e.target.classList.contains("filter")){
        return;
      }
      if(e.target.closest(".submenu") || e.target.classList.contains("submenu")){
        return;
      }
      if(e.target.closest(".profileBtns") || e.target.classList.contains("profileBtns")){
        return;
      }

      
      if(e.target.className != "dropdown"){
        const $dropdown = this.$target.querySelector(".fadein");
        if($dropdown){
          $dropdown.setAttribute("class", "fadeout");
        }
      }
    })
  }
  
}
