import App from "./App";
import Router from "./core/Router";

declare global {
  interface Window{
    router: Router;
  }
}

const $root = document.getElementById("root");
const app = new App($root, {});
window.router = new Router();
