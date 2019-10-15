import React from 'react';

// props are how components talk to each other
const Gif = props => (
  <li className="gif-wrap">
    <img src={props.url} alt=""/>
  </li>
);

export default Gif;