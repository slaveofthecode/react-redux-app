import React from 'react';

const index = () => {
  return (
    <footer className="position-absolute bottom-0position-absolute bottom-0 p-2 my-2 container border-top">
      <div className="d-flex justify-content-between align-items-center">
        <small>
          <em>© {new Date().getFullYear()} </em>
        </small>
        <small>
          <em>
            Created by <strong>Gustavo Lopez</strong>
          </em>
        </small>
        <span>
          <a href="https://github.com/slaveofthecode" className="mx-1">
            <i className="bi bi-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/gustavoml/" className="mx-1">
            <i className="bi bi-linkedin"></i>
          </a>
        </span>
      </div>
    </footer>
  );
};

export default index;
