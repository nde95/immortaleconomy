import Select, { ActionMeta } from "react-select";
import { heroData } from "../../assets/herodata";

interface HeroSelectMenuProps {
  onSelectHero: (heroId: string) => void;
  isLoading: boolean;
}

const options = Object.entries(heroData).map(([heroKey, heroValue], index) => {
  return {
    value: heroValue.heroId,
    key: heroKey,
    label: (
      <div key={index} className="flex items-center gap-1 font-Sora">
        <img src={heroValue.image} height="30px" width="30px" />
        {heroValue.name}
      </div>
    ),
  };
});

const customStyles = {
  control: (base: any) => ({
    ...base,
    height: 50,
    minHeight: 50,
    width: 200,
    maxWidth: 250,
    whiteSpace: "nowrap",
    textOverflow: "hidden",
    "@media (max-width: 768px)": {
      maxWidth: 100,
    },
  }),
};

const HeroSelectMenu = ({ onSelectHero, isLoading }: HeroSelectMenuProps) => {
  const handleChange = (
    newValue: unknown,
    _actionMeta: ActionMeta<unknown>
  ) => {
    const selectedOption = newValue as { value: string };
    onSelectHero(selectedOption.value);
  };

  return (
    <div className="font-Sora text-sm">
      <Select
        placeholder="Please Select A Hero"
        required
        options={options}
        styles={customStyles}
        onChange={handleChange}
        isSearchable={false}
        isDisabled={isLoading}
      />
    </div>
  );
};

export default HeroSelectMenu;
