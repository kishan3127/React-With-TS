import { Link, Outlet } from "react-router-dom";
import Header from "../components/Header";

function Layout() {
  return (
    <div>
      <Header></Header>

      <ul>
        <li>
          <Link to="/">Public Page</Link>
        </li>
        <li>
          <Link to="/protected">Protected Page</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
}
export default Layout;
