import Header from "component/header/header";
import Component from "./core/Component";
<<<<<<< HEAD
<<<<<<< HEAD

export default class App extends Component {
  template() {
    return `
      <div data-component="routeview"></div>
    `;
  }
}
=======
=======

>>>>>>> 01fb56f (style : all style change)
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
      console.log(e);
      if(e.target.closest(".filter") || e.target.classList.contains("filter")){
        return;
      }
      if(e.target.closest(".submenu") || e.target.classList.contains("submenu")){
        return;
      }
      if(e.target.className != "dropdown"){
        console.log("GOOD");
        const $dropdown = this.$target.querySelector(".fadein");
        if($dropdown){
          $dropdown.setAttribute("class", "fadeout");
        }
      }
    })
  }
  
}
>>>>>>> 4fcdaef (feat: add Tap)
