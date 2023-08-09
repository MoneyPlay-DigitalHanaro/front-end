import { Outlet, Link } from 'react-router-dom';
import SideBar from './Sidebar';

const Layout = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-sm bg-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/admin">
              관리자
            </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
};

export default Layout;
