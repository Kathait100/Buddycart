import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { FoodState } from "../src/context/contextState";
import Addbuddycart from "./pages/Explore/Explore.js";
import CartMenu from "./Components/FoodCartMenu/FoodCartMenu.js";
import Dashboard from "./pages/Dashboard/Dashboard";
import About from "./pages/AboutUs/About";
import Onboarding from "./pages/Onboarding";
import "./App.css";
function App() {
  return (
    <FoodState>
      <div className="App">
        <header className="App-header">
          <Router>
            <Routes>
              <Route
                exact
                path="/home"
                caseSensitive={false}
                element={<Onboarding />}
              />
              <Route
                exact
                path="/about"
                caseSensitive={false}
                element={<About />}
              />
              <Route
                exact
                path="/explore"
                caseSensitive={false}
                element={<Addbuddycart />}
              />
              <Route
                exact
                path="/dashboard"
                caseSensitive={false}
                element={<Dashboard />}
              />
              <Route
                exact
                path="/explore/:id"
                caseSensitive={false}
                element={<CartMenu />}
              />
              <Route exact path="/*" element={<Navigate to="/home" />} />
            </Routes>
          </Router>
        </header>
      </div>
    </FoodState>
  );
}

export default App;
