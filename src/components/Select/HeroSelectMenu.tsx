import Select from "react-select";
import { heroData } from "../../assets/herodata";

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
  return <Select placeholder="Please Select A Hero" options={options} />;
};

export default HeroSelectMenu;
