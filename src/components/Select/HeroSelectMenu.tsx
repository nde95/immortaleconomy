import Select from "react-select";
import { heroData } from "../../assets/herodata";
import { useState } from "react";
import makeAnimated from "react-select/animated";

const animatedOption = makeAnimated();

const options = Object.entries(heroData).map(([heroKey, heroValue], index) => {
  return {
    value: index,
    label: (
      <div>
        <img src={heroValue.image} height="30px" width="30px" />
        {heroValue.name}
      </div>
    ),
  };
});

const HeroSelectMenu = () => {
  const [isClearable, setIsClearable] = useState(true);

  return (
    <Select
      isClearable={isClearable}
      placeholder="Please Select A Hero"
      components={animatedOption}
      options={options}
    />
  );
};

export default HeroSelectMenu;
