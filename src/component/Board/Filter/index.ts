import Dropdown from "component/Dropdown";
import Component from "../../../core/Component";
import "./index.css";

export default class Filter extends Component {
  setup() {
    this.state = {
      filter: "이번 주",
    };
  }

  template() {
    return `
        <div class='filter'>
        ${this.state.filter}<svg width='1em' height='1em'><path d="M7 10l5 5 5-5z"></path></svg>
            <div data-component="Dropdown-filter" style="display:none"></div>
        </div>
        `;
  }

  mounted() {
    const $dropdownFilter = this.$target.querySelector("[data-component='Dropdown-filter']");
    new Dropdown($dropdownFilter, {
      list: ["오늘", "이번 주", "이번 달", "올해"],
      selected: this.state.filter,
      setFilter: this.setFilter.bind(this),
    });
  }

  setFilter(term: string) {
    this.setState({ filter: term });
  }

  setEvent() {
    this.addEvent("click", ".filter", () => {
      const $filter = this.$target.querySelector(".filter");
      const { top } = $filter.getBoundingClientRect();
      // const { right } = $filter.getBoundingClientRect();

      const $dropdown = this.$target.querySelector("[data-component='Dropdown-filter']");

      const fade = $dropdown.getAttribute("class");
      if (fade === "fadein") {
        $dropdown.setAttribute("class", "fadeout");
        return;
      }
      $dropdown.setAttribute("style", `position:absolute; display:block; top:${top - 50}px; right:${1}rem`);
      $dropdown.setAttribute("class", "fadein");
    });
    this.addEvent("click", "[data-component='Dropdown-filter']", () => {
      const $dropdown = this.$target.querySelector("[data-component='Dropdown-filter']");
      $dropdown.setAttribute("class", "fadeout");
    });
  }
}
