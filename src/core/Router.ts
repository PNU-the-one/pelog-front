import Main from "../page/main";
import Component from "./Component";

type Route = {
  path: string;
  name: string;
  Component: typeof Component;
};

const routes: Route[] = [
  {
    path: "/",
    name: "Main",
    Component: Main,
  },
];

class Router {
  constructor() {
    window.onpopstate = () => {
      const pathName = window.location.pathname;
      const route = routes.find((e) => e.path === pathName);
      this.render(route);
    };
    window.onload = () => {
      const pathName = window.location.pathname;
      const route = routes.find((e) => e.path === pathName);
      this.render(route);
    };
  }

  push(pathName: string) {
    window.history.pushState({}, pathName, window.location.origin + pathName);
    const route = routes.find((e) => e.path === pathName);
    this.render(route);
  }

  render(route: Route) {
    const $routeview = document.querySelector("[data-component='routeview']");
    const component = new route.Component($routeview, {});
  }
}

export default Router;
