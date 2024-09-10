import "./App.scss";
import Body from "./components/Body";

function App() {
  return (
    <div className="App p-10">
      <header className="App-header bg-slate-300">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <Body></Body>
    </div>
  );
}

export default App;
