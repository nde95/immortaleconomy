import chroma from "chroma-js";
import Select, { StylesConfig } from "react-select";

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
  control: styles => ({ ...styles, backgroundColor: "white" }),
  option: (styles, { data }) => ({
    ...styles,
    padding: "8px", // Adjust padding to accommodate the dot
    ...dot(data.color),
  }),
  input: styles => ({ ...styles }),
  placeholder: styles => ({ ...styles }),
  singleValue: (styles, { data }) => ({
    ...styles,
    ...dot(data.color), // Render the dot for the selected value
  }),
};

const options = [
  { value: "Immortal", label: "Immortal", color: "yellow" },
  { value: "Arcana", label: "Arcana", color: "green" },
];

const RaritySelectMenu = () => {
  return (
    <div className="cursor-pointer">
      <Select
        placeholder="Please Select A Rarity"
        options={options}
        styles={colourStyles}
      />
    </div>
  );
};

export default RaritySelectMenu;
