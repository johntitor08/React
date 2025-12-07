import "./App.css";
import MUIAccordion from "./components/MUIAccordion";
import MUIAlert from "./components/MUIAlert";
import MUIAppBar from "./components/MUIAppBar";
import MUIAutoComplete from "./components/MUIAutoComplete";
import MUIButton from "./components/MUIButton";
import MUICard from "./components/MUICard";
import MUICheckbox from "./components/MUICheckbox";
import MUIDialog from "./components/MUIDialog";
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
      <MUIDialog />
      <MUIAlert />
    </>
  );
}

export default App;
