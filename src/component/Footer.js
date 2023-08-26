/* eslint-disable */
import baby from '../image/Footer/Baby.png';
import chat from '../image/Footer/ChatsCircle.png';
import circle from '../image/Footer/Circle.png';
import home from '../image/Footer/home.png';
import Text from '../image/Footer/IecoText.png';

function Footer() {
  return (
    <div className="footer">
      <img src={circle} className="FooterCircle" />
      <img src={Text} className='FooterText' />
      <a href="/board" style={{ textDecoration: 'none', color: 'black' }}>
        <div>
          <img src={chat} className="iconChat" />
          <p className="ft12">채팅</p>
        </div>
      </a>
      <a href="/mypage" style={{ textDecoration: 'none', color: 'black' }}>
        <div>
          <img src={baby} className="" />
          <p className="ft12">마이페이지</p>
        </div>
      </a>
    </div>
  );
}
export default Footer;
