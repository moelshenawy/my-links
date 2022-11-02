import "./App.css";
import Home from "./components/Home";

function App() {
  return (
    <>
      <div className="app">
        <div className="container">
          <Home />
        </div>
      </div>
      <footer className="d-flex justify-content-end d-flex align-items-center">
        <p> El-Shenawy &copy;</p>
      </footer>
    </>
  );
}

export default App;
