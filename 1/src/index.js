import React from 'react';
import ReactDOM from 'react-dom/client';

import { hello2 } from './myFolder';
import { hello } from './myFolder/hello';

// import fjioeqjfqe from './test';

// import hello23, { TEST1, TEST2 } from './test';

// console.log(hello23);

import Dog from './dog.jpg';

import './index.css';

import App from './App';



console.log(hello2, hello);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
    <div className='hello'>
      <img src={Dog} />
    </div>
  </React.StrictMode>
);


// import / export 

// export const TEST = ...;
// export { TEST, testFunction } 
// import { TEST } from './......'


// export default TEST;
// import HJUFEHQFQJEOF from './......'