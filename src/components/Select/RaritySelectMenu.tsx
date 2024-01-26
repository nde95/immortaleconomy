import Select, { ActionMeta, StylesConfig } from "react-select";

interface RaritySelectMenuProps {
  onSelectRarity: (id: string) => void;
  isLoading: boolean;
}

const dot = (color = "transparent") => ({
  alignItems: "center",
  display: "flex",

  ":before": {
    backgroundColor: color,
    borderRadius: 10,
    content: '" "',
    display: "block",
    marginRight: 8,
    height: 10,
    width: 10,
  },
});

const colourStyles: StylesConfig<any, true> = {
  control: styles => ({
    ...styles,
    backgroundColor: "white",
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
  option: (styles, { data }) => ({
    ...styles,
    padding: "8px",
    ...dot(data.color),
  }),
  input: styles => ({ ...styles }),
  placeholder: styles => ({ ...styles }),
  singleValue: (styles, { data }) => ({
    ...styles,
    ...dot(data.color),
  }),
};

const options = [
  { value: "Immortal", label: "Immortal", color: "yellow" },
  { value: "Arcana", label: "Arcana", color: "green" },
];

const RaritySelectMenu = ({
  onSelectRarity,
  isLoading,
}: RaritySelectMenuProps) => {
  const handleChange = (newValue: unknown, actionMeta: ActionMeta<unknown>) => {
    const selectedOption = newValue as { value: string };
    onSelectRarity(selectedOption.value);
  };

  return (
    <div className="cursor-pointer font-Sora text-sm">
      <Select
        placeholder="Please Select A Rarity"
        required
        options={options}
        styles={colourStyles}
        onChange={handleChange}
        isSearchable={false}
        isDisabled={isLoading}
      />
    </div>
  );
};

export default RaritySelectMenu;
