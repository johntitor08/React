import { TextField } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import InputAdornment from "@mui/material/InputAdornment";
import "../item.css";

function MUITexrField() {
  return (
    <div>
      <div className="item">
        <TextField label="MUI Text Field" variant="outlined" />
        <TextField label="MUI Text Field" variant="filled" />
        <TextField label="MUI Text Field" variant="standard" />
      </div>
      <div className="item">
        <TextField
          label="MUI Text Field"
          variant="outlined"
          color="secondary"
        />
        <TextField label="MUI Text Field" variant="outlined" color="success" />
        <TextField label="MUI Text Field" variant="outlined" color="error" />
      </div>
      <div className="item">
        <TextField
          label="Small MUI Text Field"
          variant="outlined"
          size="small"
        />
        <TextField
          label="Medium MUI Text Field"
          variant="outlined"
          size="medium"
        />
      </div>
      <div className="item">
        <TextField label="MUI Text Field" variant="outlined" disabled />
        <TextField label="MUI Text Field" variant="outlined" required />
      </div>
      <div className="item">
        <TextField
          label="MUI Text Field"
          variant="outlined"
          helperText="Helper Text"
        />
        <TextField
          label="MUI Text Field"
          variant="outlined"
          error
          helperText="Error Text"
        />
      </div>
      <div className="item">
        <TextField
          label="MUI Text Field"
          variant="outlined"
          placeholder="Placeholder Text"
        />
      </div>
      <div className="item">
        <TextField label="MUI Text Field" variant="outlined" fullWidth />
      </div>
      <div className="item">
        <TextField
          label="MUI Text Field"
          variant="outlined"
          multiline
          rows={4}
        />
      </div>
      <div className="item">
        <TextField label="MUI Text Field" variant="outlined" type="password" />
      </div>
      <div className="item">
        <TextField
          id="input-with-icon-textfield"
          label="Text Field"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon />
                </InputAdornment>
              ),
            },
          }}
          variant="standard"
        />
      </div>
    </div>
  );
}

export default MUITexrField;
