import "./App.css";
import MUIAutoComplete from "./components/MUIAutoComplete";
import MUIButton from "./components/MUIButton";
import MUICheckbox from "./components/MUICheckbox";
import MUIGrid from "./components/MUIGrid";
import MUISelect from "./components/MUISelect";
import MUIStack from "./components/MUIStack";
import MUITextField from "./components/MUITextField";

function App() {
  return (
    <>
      <MUIButton />
      <MUITextField />
      <MUISelect />
      <MUICheckbox />
      <MUIAutoComplete />
      <MUIStack />
      <MUIGrid />
    </>
  );
}

export default App;
