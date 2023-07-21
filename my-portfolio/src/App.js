import "./App.css";
import { Home } from "./components/Home";
import { Nav } from "./components/Nav";
import "./App.css";
import GoToTop from "./components/GoToTop";

function App() {
  return (
    <div id="app-container">
      <Nav />
      <Home />
      <GoToTop />
    </div>
  );
}

export default App;
