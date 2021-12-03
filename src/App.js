import Lowersection from "./Body/Lowersection.js";
import Section from "./Body/Section.js";
import Navbar from "./Navbar/Navbar.js";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Section />
        <Lowersection />
      </header>
    </div>
  );
}

export default App;
