import "./App.css";
import MUIAccordion from "./components/MUIAccordion";
import MUIAppBar from "./components/MUIAppBar";
import MUIAutoComplete from "./components/MUIAutoComplete";
import MUIButton from "./components/MUIButton";
import MUICard from "./components/MUICard";
import MUICheckbox from "./components/MUICheckbox";
import MUIGrid from "./components/MUIGrid";
import MUIImageList from "./components/MUIImageList";
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
      <MUICard />
      <MUIAccordion />
      <MUIAppBar />
      <MUIImageList />
    </>
  );
}

export default App;
