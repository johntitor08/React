import Checkbox from "@mui/material/Checkbox";

export function MUICheckbox() {
  return (
    <div className="item">
      <h2>MUI Checkbox</h2>
      <Checkbox defaultChecked />
      <Checkbox />
      <Checkbox disabled />
      <Checkbox disabled checked />
    </div>
  );
}

export default MUICheckbox;
