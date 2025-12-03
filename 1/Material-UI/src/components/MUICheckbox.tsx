import Checkbox from "@mui/material/Checkbox";

export function MUICheckbox() {
  return (
    <div className="item">
      <Checkbox defaultChecked />
      <Checkbox />
      <Checkbox disabled />
      <Checkbox disabled checked />
    </div>
  );
}

export default MUICheckbox;
