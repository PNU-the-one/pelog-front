import { Template } from "webpack";
import Main from "../page/main";
import Component from "./Component";

type Route = {
  path:string,
  name:string,
  component: typeof Component
}

const routes: Route[] = [
  {
    path:"/",
    name: "Main",
    component: Main
  }
]


class Router{
  constructor(){
    window.onpopstate = () =>{
        const pathName = window.location.pathname;
        const route = routes.find(e =>{
            return e.path == pathName
        })
        this.render(route)
    }
    window.onload = () =>{
        const pathName = window.location.pathname;
        const route = routes.find(e =>{
            return e.path == pathName
        })
        this.render(route)
    }
  }

  push(pathName:string){
      window.history.pushState({}, pathName, window.location.origin + pathName);
      const route = routes.find(e =>{
          return e.path == pathName
      })
      this.render(route)
  }

  render(route:Route){
      const $routeview = document.querySelector('[data-component="routeview"]');
      new route.component($routeview,{})
  }

}

export default Router;