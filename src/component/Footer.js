/* eslint-disable */
import baby from '../image/Footer/Baby.png';
import chat from '../image/Footer/ChatsCircle.png';
import circle from '../image/Footer/Circle.png';
import home from '../image/Footer/home.png';
import Text from '../image/Footer/IecoText.png';

function Footer() {
  return (
    <div className="footer">
      <a href="/main" ><img src={circle} className="FooterCircle" /></a>
      <img src={Text} className='FooterText' />
      <a href="/board" className='footerElement' style={{ textDecoration: 'none', color: 'black' }}>
        <div>
          <img src={chat} className="iconChat" />
          <p className="ft12" style={{ marginBottom: 0}}>채팅</p>
        </div>
      </a>
      <a href="/mypage" className='footerElement' style={{ textDecoration: 'none', color: 'black' }}>
        <div>
          <img src={baby} className="" />
          <p className="ft12" style={{ marginBottom: 0}}>마이페이지</p>
        </div>
      </a>
    </div>
  );
}
export default Footer;
