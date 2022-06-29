import Component from "core/Component";
import "./index.css";

class Setting extends Component {
  setup() {}

  template(): string {
    return `
      <div id="setting">
        <section class=setting-profile>
          <div class="thumbnail-area"> 
              <img src="https://velog.velcdn.com/images/thingseong/profile/a0bdfa22-34fc-434d-9e46-3045b6a4e998/social_profile.png" alt="profile">
              <button color="teal" class="img-upload">이미지 업로드</button>
              <button color="transparent" class="img-del">이미지 제거</button>
            </div>
              <div class="info-area">
              <h2>명성</h2>
              <p>자기소개</p>
              <button class="edit">수정</button>
            
          </div>
        </section>


        <section class="setting-info">
          <div class="information">
            <div class="wrapper">
              <div class="title-wrapper">
                <h3>펠로그 제목</h3>
              </div>
              <div class="block-for-mobile">
                <div class="contents">
                  thingseong.log
                </div>
                <div class="edit-wrapper">
                  <button class="edit">수정</button>
                </div>
              </div>
            </div>
            <div class="description">개인 페이지의 좌측 상단에 나타나는 페이지 제목입니다.</div>
          </div>
          <div class="information">
          <div class="wrapper">
            <div class="title-wrapper">
              <h3>소셜 정보</h3>
            </div>
            <div class="block-for-mobile">
              <div class="edit-wrapper">
                <button class="edit">정보추가</button>
              </div>
            </div>
          </div>
          <div class="description">포스트 및 블로그에서 보여지는 프로필에 공개되는 소셜 정보입니다.</div>
        </div>
        <div class="information">
          <div class="wrapper">
            <div class="title-wrapper">
              <h3>이메일 주소</h3>
            </div>
            <div class="block-for-mobile">
                <div class="contents">
                audtjd1893@gmail.com
              </div>
            </div>
          </div>
          <div class="description">회원 인증 또는 시스템에서 발송하는 이메일을 수신하는 주소입니다.</div>
        </div>
        <div class="information">
          <div class="wrapper">
            <div class="title-wrapper">
              <h3>이메일 수신 설정</h3>
            </div>
            <div class="block-for-mobile">
                <div class="contents">
                  <ul>
                    <li>
                      <span>댓글알림</span>
                      <div class="on-off"><div class="circle" style="transform: translate(0rem); box-shadow: rgba(0, 0, 0, 0.05) 2px 0px 4px;"></div></div>
                    </li>
                    <li>
                      <span>펠로그 업데이트 소식</span>
                      <div class="on-off"><div class="circle" style="transform: translate(0rem); box-shadow: rgba(0, 0, 0, 0.05) 2px 0px 4px;"></div></div>
                    </li>
                  </ul>
              </div>
            </div>
          </div>
          </div>
        <div class="information">
          <div class="wrapper">
            <div class="title-wrapper">
              <h3>회원 탈퇴</h3>
            </div>
            <div class="block-for-mobile">
                <div class="contents">
                <button color="red" class="withdarw">회원탈퇴</button>
              </div>
            </div>
          </div>
          <div class="description">탈퇴 시 작성하신 포스트 및 댓글이 모두 삭제되며 복구되지 않습니다.</div>
        </section>
      </div>
    `;
  }
}

export default Setting;
