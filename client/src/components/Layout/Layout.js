import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/DemoApp">DemoApp</Link>
          </li>
          <li>
            <Link to="/ProductList">ProductList</Link>
          </li>
          <li>
            <Link to="/AddProduct">AddProduct</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;