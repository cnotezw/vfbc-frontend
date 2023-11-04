import { Routes, Route, Link } from "react-router-dom";
import Home from "./containers/Home";
import Destination from "./containers/Destination";
import Blog from "./containers/Blog";

// Define the App component
function App() {
  return (
    // Create a browser router
    <div>
      {/* Create a navigation bar with links to each route */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/destination">Destination</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </nav>

      {/* Render the component for each route using routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
