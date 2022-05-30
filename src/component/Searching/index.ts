import Component from "core/Component";
import SearchBar from "./Searchbar";
import "./index.css";
import SearchResult from "./SearchResult";

class Searching extends Component {
  setup() {}

  template() {
    return `
      <div id="searching">
        <div data-component="SearchBar"></div>
        <div data-component="SearchResult"></div>
      </div>
    `;
  }

  mounted() {
    const $searchbar = this.$target.querySelector("[data-component='SearchBar']");
    const $searchres = this.$target.querySelector("[data-component='SearchResult']");

    new SearchBar($searchbar, {});
    new SearchResult($searchres, {});
  }
}

export default Searching;
