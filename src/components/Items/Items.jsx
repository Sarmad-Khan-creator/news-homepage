import classes from "./Items.module.css";

const Items = (props) => {
  return (
    <div className={classes.wrapper}>
      <img src={props.src} alt="top news" className={classes.image}/>
      <div className={classes.flex}>
        <h2 className={classes.number}>{props.number}</h2>
        <h3 className={classes.heading}>{props.heading}</h3>
        <p className={classes.detail}>{props.detail}</p>
      </div>
    </div>
  );
};

export default Items;
