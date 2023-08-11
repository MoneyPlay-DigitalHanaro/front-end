/* eslint-disable */
import baby from '../image/Footer/Baby.png';
import chat from '../image/Footer/ChatsCircle.png';
import circle from '../image/Footer/Circle.png';

function Footer() {
  return (
    <div className="footer">
      <img src={circle} className="FooterCircle" />
      <div>
        <img src={chat} className="iconChat" />
        <p className="ft12">채팅</p>
      </div>
      <div>
        <img src={baby} className="" />
        <p className="ft12">마이페이지</p>
      </div>
    </div>
  );
}
export default Footer;
