import "./App.css";
import FlightInfoTable from "./components/FlightInfoTable";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Flight Now Tracker</h1>
      </header>
      {/* <FlightInfoList /> */}
      <FlightInfoTable />
    </div>
  );
}

export default App;
