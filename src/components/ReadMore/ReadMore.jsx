import classes from "./ReadMore.module.css";

const ReadMore = (props) => {
  return (
    <div className={props.className}>
      <p className={classes.paragraph}>
        We dive into the next evolution of the web that claims to put the power
        of the platforms back into the hands of the people. But is it really
        fulfilling its promise?
      </p>
      <button className={classes.readmoreButton} >Read More</button>
    </div>
  );
};

export default ReadMore;
