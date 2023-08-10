/* eslint-disable */
import baby from '../image/Footer/Baby.png';
import chat from '../image/Footer/ChatsCircle.png';

function Footer() {
  return (
    <div className="footer">
      <img src={process.env.PUBLIC_URL + '/Baby.png'} />
      <img src={process.env.PUBLIC_URL + '/ChatsCircle.png'} />
    </div>
  );
}
export default Footer;
