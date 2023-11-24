import classes from "./NewSectionData.module.css";
const NewSectionData = (props) => {
  return (
    <div>
      <h2 className={classes.heading}>{props.heading}</h2>
      <p className={classes.detail}>{props.detail}</p>
    </div>
  );
};

export default NewSectionData;
