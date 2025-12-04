import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Stack } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export function MUIGrid() {
  return (
    <div>
      <div className="item">
        <h2>MUI Grid</h2>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {Array.from(Array(6)).map((_, index) => (
              <Grid key={index} size={{ xs: 2, sm: 4, md: 4 }}>
                <Item>{index + 1}</Item>
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
      <div className="item">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid size={4}>
              <Stack spacing={2}>
                <Item>Column 1 - Row 1</Item>
                <Item>Column 1 - Row 2</Item>
                <Item>Column 1 - Row 3</Item>
              </Stack>
            </Grid>
            <Grid size={8}>
              <Item sx={{ height: "100%", boxSizing: "border-box" }}>
                Column 2
              </Item>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
}

export default MUIGrid;
