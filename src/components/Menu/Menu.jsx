import classes from "./Menu.module.css";
import closeIcon from "../../assets/icon-menu-close.svg";

const MenuScreen = (props) => {
  return (
    <div className={classes.backdrop} onClick={props.onClick}>
      <div className={classes.sideMenu}>
        <img src={closeIcon} alt="close menu" className={classes.menuImage} onClick={props.onClick}/>
        <ul className={classes.menuList}>
          <li className={classes.menuListItem}>Home</li>
          <li className={classes.menuListItem}>New</li>
          <li className={classes.menuListItem}>Popular</li>
          <li className={classes.menuListItem}>Trending</li>
          <li className={classes.menuListItem}>Categories</li>
        </ul>
      </div>
    </div>
  );
};

export default MenuScreen;
