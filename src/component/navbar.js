/* eslint-disable */

function NavBar() {
  return (
    <div className="navbar">
      <nav>
        <img src={process.env.PUBLIC_URL + '/person.png'} className="personImage" />
        <div className="abc">
          <span> 1학년 3반 담임 </span>
          <p> 김익환</p>
        </div>
      </nav>
    </div>
  );
}
export default NavBar;
