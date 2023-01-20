import logo from "./logo.svg";
import "./App.css";
import Spreadsheet from "./spredsheet/Spreadsheet";
import { AppProvider } from "@shopify/polaris";

function App() {
  return (
    <AppProvider>
      <div className="App">
        <Spreadsheet />
      </div>
    </AppProvider>
  );
}

export default App;
