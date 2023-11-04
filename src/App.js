import { Routes, Route } from "react-router-dom";
import Home from "./containers/Home";
import Destination from "./containers/Destination";
import Blog from "./containers/Blog";

import {Navbar} from "./components/Navbar";

// Define the App component
function App() {
  return (
    // Create a browser router
    <div>
      {/* Create a navigation bar with links to each route */}
      <Navbar />

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
