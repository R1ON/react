import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));

const USERS = {
	1: { id: 1, name: "Alex", age: 35 },
	2: { id: 2, name: "John", age: 20 },
	3: { id: 3, name: "Anna", age: 18 },
};

root.render(
  <App users={USERS} />
);

