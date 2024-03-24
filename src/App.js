// App.js (or any other component where you're rendering the menu)

import React from 'react';
import DynamicMenu from './components/DynamicMenu';
import Body from './components/Body';

const App = () => {
  const items = [
    { label: "HOME" },
    { label: "ELECTRONICS" },
    { label: "BOOKS" },
    { label: "MUSIC" },
    { label: "MOVIES" },
    { label: "CLOTHING" },
    { label: "GAMES" },
  ];

  return (
    <div>
      <DynamicMenu items={items} />
      <Body />
    </div>
  );
};

export default App;

{/*



 header
  logo
  components
  search
 body
  carousel

*/}