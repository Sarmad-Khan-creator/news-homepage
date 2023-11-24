import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import logo from "./assets/logo.svg";
import desktopImage from "./assets/image-web-3-desktop.jpg";
import NewSection from "./components/NewSection/NewSection";
import ReadMore from "./components/ReadMore/ReadMore";
import Items from "./components/Items/Items";
import pc from "./assets/image-retro-pcs.jpg";
import gaming from "./assets/image-gaming-growth.jpg";
import laptop from "./assets/image-top-laptops.jpg";
import menu from "./assets/icon-menu.svg";
import mobileImage from "./assets/image-web-3-mobile.jpg";
import MenuScreen from "./components/Menu/Menu";
import { useState } from "react";

function App() {
  const x = window.matchMedia("(max-width: 375px)");
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuState = () => {
    setShowMenu(!showMenu);
    
    if(!showMenu) {
      document.querySelector("body").style.overflow = "hidden";
    } else {
      document.querySelector("body").style.overflow = "visible";
    }
  }

  return (
    <div className="App">
      <div className="topbar">
        <img src={logo} alt="logo" />
        {x.matches ? (
          <img src={menu} alt="menu" onClick={handleMenuState}/>
          
        ) : (
          <Navbar className="navbarFloatRight" />
        )}
      </div>
      <div className="grid">
        <div className="item1">
          <img
            src={x.matches ? mobileImage : desktopImage}
            alt="desktop"
            className="desktopImage"
          />
        </div>
        <NewSection className="item2" />
        <h1 className="item3">The Bright Future of WEB 3.0?</h1>
        <ReadMore className="item4" />
      </div>
      <div className="wrapper">
      
        <Items
          src={pc}
          number="01"
          heading="Reviving Retro PCs"
          detail="What happens when old PCs are given modern upgrades?"
        />
        <Items
          src={laptop}
          number="02"
          heading="Top 10 laptops of 2022"
          detail="Our best picks for various needs and budgets"
        />
        <Items
          src={gaming}
          number="03"
          heading="The growth of gaming"
          detail="How the pandemic has sparked fresh opportunities"
        />
      </div>
      {showMenu && <MenuScreen onClick={handleMenuState} />}
    </div>
  );
}

export default App;