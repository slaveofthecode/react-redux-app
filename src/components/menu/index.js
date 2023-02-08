import { Link, NavLink } from 'react-router-dom';
import { ROUTE } from '../../enums/routes';

const LINK_EXPLAIN = `A <Link> is an element that lets the user navigate to another page by clicking or tapping on it. In react-router-dom, a <Link> renders an accessible <a> element with a real href that points to the resource it's linking to. This means that things like right-clicking a <Link> work as you'd expect. You can use <Link reloadDocument> to skip client side routing and let the browser handle the transition normally (as if it were an <a href>).`;

const NAVLINK_EXPLAIN = `A <NavLink> is a special type of <Link> that will add styling attributes to the rendered element when it matches the current URL. In addition to the styling attributes, it also adds a boolean prop called isActive to the element it renders. This prop can be used to add custom class names to the rendered element. You can also use <NavLink exact> to only match if the location is matched exactly.`;

const index = () => {
  return (
    <div className="row">
      <div className="col-md-6">{renderMenuLink()}</div>
      <div className="col-md-6">{renderMenuNavLink()}</div>
    </div>
  );
};

export default index;

function renderMenuLink() {
  return (
    <div className="d-flex justify-content-start align-items-center position-relative">
      <span className="mx-2">
        <i className="bi bi-info-circle tooltip-sibling"></i>
        <small>{LINK_EXPLAIN}</small>
      </span>
      <nav>
        <ul className="d-flex justify-content-start align-items-center">
          <li className="p-2">
            <Link to={ROUTE.HOME}>TODOS</Link>
          </li>
          <li className="p-2">
            <Link to={ROUTE.TODO_ADD}>ADD</Link>
          </li>
          <li className="p-2">
            <Link to="/contact">contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

function renderMenuNavLink() {
  const linkStyle = {
    active: {
      textDecoration: 'underline'
    },
    inactive: {
      textDecoration: 'none'
    }
  };
  return (
    <div className="d-flex justify-content-start align-items-center position-relative">
      <span className="mx-2">
        <i className="bi bi-info-circle tooltip-sibling"></i>
        <small>{NAVLINK_EXPLAIN}</small>
      </span>
      <nav>
        <ul className="d-flex justify-content-start align-items-center">
          <li className="p-2">
            <NavLink
              to={ROUTE.HOME}
              style={({ isActive }) =>
                isActive ? linkStyle.active : linkStyle.inactive
              }
            >
              TODOS
            </NavLink>
          </li>
          <li className="p-2">
            <NavLink
              to={ROUTE.TODO_ADD}
              style={({ isActive }) =>
                isActive ? linkStyle.active : linkStyle.inactive
              }
            >
              ADD
            </NavLink>
          </li>
          <li className="p-2">
            <NavLink
              to="/contact"
              style={({ isActive }) =>
                isActive ? linkStyle.active : linkStyle.inactive
              }
            >
              contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
