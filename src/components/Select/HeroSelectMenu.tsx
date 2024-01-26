import Select, { ActionMeta } from "react-select";
import { heroData } from "../../assets/herodata";

interface HeroSelectMenuProps {
  onSelectHero: (heroId: string) => void;
}

const options = Object.entries(heroData).map(([heroKey, heroValue], index) => {
  return {
    value: heroValue.heroId,
    label: (
      <div className="flex items-center gap-1 font-Sora">
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
    width: 250,
  }),
};

const HeroSelectMenu = ({ onSelectHero }: HeroSelectMenuProps) => {
  // const [isClearable, setIsClearable] = useState(true);

  const handleChange = (newValue: unknown, actionMeta: ActionMeta<unknown>) => {
    const selectedOption = newValue as { value: string };
    onSelectHero(selectedOption.value);
  };

  return (
    <Select
      placeholder="Please Select A Hero"
      options={options}
      styles={customStyles}
      onChange={handleChange}
    />
  );
};

export default HeroSelectMenu;
