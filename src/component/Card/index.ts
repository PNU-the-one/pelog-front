import Component from "core/Component";
import heart from "../../../public/image/heart.svg";
import "./index.css";

export default class Card extends Component {
  template() {
    const { link, imgSrc, title, summary, date, comments, writer, hearts } =
      this.props;
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
            <img src='${heart}'/>
            <span>${hearts}<span/>
          </div>
        </div>
      </div>
    `;
  }
}
