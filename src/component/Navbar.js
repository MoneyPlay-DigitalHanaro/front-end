/* eslint-disable */
import styles from '../style/css/Admin.module.css';
import '../style/css/App.css';

function NavBar() {
  return (
    <div className="navbar">
      <nav>
        <img src={process.env.PUBLIC_URL + '/person.png'} className={styles.personImage} />
        <div className={styles.teacher}>
          <span> 1학년 3반 담임 </span>
          <p> 김익환</p>
        </div>
      </nav>
    </div>
  );
}
export default NavBar;
