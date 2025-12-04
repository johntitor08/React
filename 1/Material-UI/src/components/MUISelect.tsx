import { Select, MenuItem } from "@mui/material";

export function MUISelect() {
  return (
    <div className="item">
      <h2>MUI Select</h2>
      <Select defaultValue="option1">
        <MenuItem value="option1">Option 1</MenuItem>
        <MenuItem value="option2">Option 2</MenuItem>
        <MenuItem value="option3">Option 3</MenuItem>
      </Select>
    </div>
  );
}

export default MUISelect;
