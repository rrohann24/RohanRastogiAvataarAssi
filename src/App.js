import React from "react";
import Body from "./components/Body";
import MainMenu from "./components/MainMenu";
import Header from "./components/Header";

const App = () => {

  return (
    <div>
      <Header/>
      {/* <MainMenu items={items}/> */}
      {/* <DynamicMenu items={items}  moreitems={moreitems}/> */}
      <Body />
    </div>
  );
};

export default App;

{
  /*

 header
  logo
  components
  search
 body
  carousel

*/
}
