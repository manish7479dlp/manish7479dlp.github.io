import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import "index.css"

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init(
  {
    offset: 200, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 500,
  }
);

ReactDom.render(
  <App />,
  document.getElementById('root')
);