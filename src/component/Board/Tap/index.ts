import Component from "core/Component";
import Tranding from "../Tranding";
import Recent from "../Recent";
import Filter from "../Filter";
import Submenu from "../Submenu";
import "./index.css";

export default class Tap extends Component {
  setup() {}

  template() {
    const { selected } = this.props;
    return `
    <div id="tap">
        <div class="selectTap">
          <div class="select">
          <div data-component="Tranding" class=${selected === "tranding" || selected === "" ? "selected" : ""}></div>
          <div data-component="Recent" class=${selected === "recent" ? "selected" : ""}></div>
          <div class='underline ${selected}'></div>
          </div>
          <div data-component="Filter" style='display:${selected === "tranding" || selected === "" ? "" : "none"};'></div>
        </div>
      <div data-component="Submenu"></div>
    </div>
    </div>
    `;
  }

  mounted() {
    const $tranding = this.$target.querySelector("[data-component='Tranding']");
    const $recent = this.$target.querySelector("[data-component='Recent']");
    const $filter = this.$target.querySelector("[data-component='Filter']");
    const $submenu = this.$target.querySelector("[data-component='Submenu']");

    new Tranding($tranding, {});
    new Recent($recent, {});
    new Filter($filter, {});
    new Submenu($submenu, {});
  }

  setEvent() {
    this.addEvent("click", "[data-component='Tranding']", () => {
      const { selected } = this.props;
      if (selected === "tranding") return;
      this.props.setSelect("tranding");
    });
    this.addEvent("click", "[data-component='Recent']", () => {
      const { selected } = this.props;
      if (selected === "recent") return;
      this.props.setSelect("recent");
    });
  }
}
