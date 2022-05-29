import Component from "core/Component";
import "./postlist.css";
import Card from "component/Card";

export default class Postlist extends Component {
  setup() {}

  template() {
    let i;
    let cards = "";
    for (i = 0; i < 20; i += 1) {
      cards += "<div data-component='Card'></div>";
    }

    return `
      <div id="postlist">
        ${cards}
      </div>
    `;
  }

  mounted() {
    const tmp = this.$target.querySelectorAll("[data-component='Card']");
    tmp.forEach((element) => {
      new Card(element, {});
    });
  }
}
