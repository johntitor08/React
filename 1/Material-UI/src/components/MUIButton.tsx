import { Button } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";

function MUIButton() {
  return (
    <div>
      <h2>MUI Button</h2>
      <div className="item">
        <Button variant="text">Click Me</Button>
        <Button variant="contained">Click Me</Button>
        <Button variant="outlined">Click Me</Button>
      </div>
      <div className="item">
        <Button color="primary" variant="contained">
          Click Me
        </Button>
        <Button color="secondary" variant="contained">
          Click Me
        </Button>
        <Button color="info" variant="contained">
          Click Me
        </Button>
        <Button color="error" variant="contained">
          Click Me
        </Button>
        <Button color="success" variant="contained">
          Click Me
        </Button>
        <Button color="warning" variant="contained">
          Click Me
        </Button>
      </div>
      <div className="item">
        <Button size="small" variant="contained">
          Click Me
        </Button>
        <Button size="medium" variant="contained">
          Click Me
        </Button>
        <Button size="large" variant="contained">
          Click Me
        </Button>
      </div>
      <div className="item">
        <Button variant="contained" startIcon={<AddCircleIcon />}>
          Click Me
        </Button>
        <Button variant="contained" endIcon={<AddCircleIcon />}>
          Click Me
        </Button>
      </div>
    </div>
  );
}

export default MUIButton;
