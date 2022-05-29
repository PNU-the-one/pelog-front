import HeartIcon from "component/Icon/heart";
import Component from "core/Component";
import "./index.css";

export default class Card extends Component {
  template() {
    const { link, imgSrc, title, summary, date, comments, writer, hearts } = this.props;
    return `
      <div class='card'>
        <a href=${link}>
          <div class='image-wrapper'>
            <img src='${imgSrc}' />
          </div>
        </a>
        <div class='card-contents'>
          <a href=${link}>
            <p class='card-title'>
              ${title}
            </p>
            <p class='card-summary'>
              ${summary}
            </p>
          </a>
          <p class='card-date'>${date} · ${comments}개의 댓글</p>
        </div>
        <div class='card-footer'>
          <a class='card-writer-info'>
            by
            <span>${writer}</span>
          </a>
          <div class='card-heart'>
            <div></div>
            <span>${hearts}<span/>
          </div>
        </div>
      </div>
    `;
  }

  mounted(): void {
    const $wrapper = this.$target.querySelector(".card-heart > div");

    const heartIcon = new HeartIcon($wrapper);
  }
}
