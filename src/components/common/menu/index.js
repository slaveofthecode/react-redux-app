import { Link, NavLink } from 'react-router-dom';

const LINK_EXPLAIN = `A <Link> is an element that lets the user navigate to another page by clicking or tapping on it. In react-router-dom, a <Link> renders an accessible <a> element with a real href that points to the resource it's linking to. This means that things like right-clicking a <Link> work as you'd expect. You can use <Link reloadDocument> to skip client side routing and let the browser handle the transition normally (as if it were an <a href>).`;

const NAVLINK_EXPLAIN = `A <NavLink> is a special type of <Link> that will add styling attributes to the rendered element when it matches the current URL. In addition to the styling attributes, it also adds a boolean prop called isActive to the element it renders. This prop can be used to add custom class names to the rendered element. You can also use <NavLink exact> to only match if the location is matched exactly.`;

const index = () => {
  return (
    <div>
      {renderMenuLink()}
      {renderMenuNavLink()}
    </div>
  );
};

export default index;

function renderMenuLink() {
  return (
    <div>
      <div>
        Using <strong>Link</strong> from <em>react-router-dom</em>
        <details>
          <summary>...</summary>
          <p>{LINK_EXPLAIN}</p>
        </details>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
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
    <div>
      <div>
        Using <strong>NavLink</strong> from <em>react-router-dom</em>
        <details>
          <summary>...</summary>
          <p>{NAVLINK_EXPLAIN}</p>
        </details>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              style={({ isActive }) =>
                isActive ? linkStyle.active : linkStyle.inactive
              }
            >
              home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              style={({ isActive }) =>
                isActive ? linkStyle.active : linkStyle.inactive
              }
            >
              about
            </NavLink>
          </li>
          <li>
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
