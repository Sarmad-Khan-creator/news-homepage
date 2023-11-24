import NewSectionData from "../NewSectionData/NewSectionData";
import classes from "./NewSection.module.css";

const NewSection = (props) => {
  return (
    <div className={`${classes.newSectionBackground} ${props.className}`}>
      <h1 className={classes.heading}>New</h1>
      <NewSectionData
        heading="Hydrogen vs Electric Cars"
        detail="Will hydrogen-fueled cars will ever catch up to EVs?"
      />
      <hr />
      <NewSectionData 
        heading="The Downsides of AI Artistry"
        detail="What are the possible adverse effects of on-demand AI image generation" />
      <hr />
      <NewSectionData 
        heading="Is VC Funding Drying Up?" 
        detail="Private funding by VC firms is down 50% YoY We take a look at what that means." />
    </div>
  );
};

export default NewSection;
