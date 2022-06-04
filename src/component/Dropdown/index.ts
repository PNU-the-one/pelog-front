import Component from "core/Component";
import "./index.css";

//
export default class Dropdown extends Component {
  setup() {
    const { list } = this.props;
    const selected = this.props.selected || -1;
    this.state = {
      list,
      selected,
    };
  }

  template() {
    const { list } = this.state;
    const { selected } = this.state;

    return `<div class='dropdown' style=";">
      <ul>
      ${list.map((li: string) => `<li  class="${li === selected ? "active" : ""}">${li}</li>`).join("")}
      </ul>
    </div>`;
  }

  setEvent() {
    this.addEvent("click", "li", (e: any) => {
      const { list } = this.state;
      const term = e.target.innerText;
      if (this.props.setFilter) {
        this.props.setFilter(term);
      }
    });
  }
}
