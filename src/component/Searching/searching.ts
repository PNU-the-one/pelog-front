import Component from "core/Component";
import SearchBar from "./searchbar";
import "./searching.css"


class Searching extends Component{
  setup(){

  }
  template(){
    return`
      <div id="searching">
        <div data-component="SearchBar"></div>
        <div data-component="SearchResult"></div>
      </div>
    `
  }
  mounted(){
    const $searchbar = this.$target.querySelector('[data-component="SearchBar"]');

    new SearchBar($searchbar, {});

  }
}

export default Searching;