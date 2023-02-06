import React from 'react';
import { Menu } from '../../components';

const index = () => {
  return (
    <header className="border-bottom mb-2 p-2">
      <h1>My React-Redux-App</h1>
      <pre>
        simple example using react-redux with toolkit (<em>@reduxjs/toolkit</em>
        )
      </pre>
      <Menu />
    </header>
  );
};

export default index;
