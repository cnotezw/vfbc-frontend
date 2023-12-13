import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import IndexPage from "./containers/Home";
import Destination from "./containers/Destination";
import TripPlanner from "./containers/TripPlanner";
import Blog from "./containers/Blog";
import BlogPost from "./containers/BlogPost";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";

import { Navbar } from "./components/Navbar";

const ScrollToTop = () => {
  // Extracts pathname property(key) from an object
  const { pathname } = useLocation();
  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}

function Content() {
  const location = useLocation();

  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransistionStage] = useState("fadeIn");

  useEffect(() => {
    if (location !== displayLocation) setTransistionStage("fadeOut");
  }, [location, displayLocation]);

  return (
    <div
      className={`${transitionStage}`}
      onAnimationEnd={() => {
        if (transitionStage === "fadeOut") {
          setTransistionStage("fadeIn");
          setDisplayLocation(location);
        }
      }}
    >
      <Routes location={displayLocation}>
        <Route index element={<IndexPage />} />
        <Route path=":destination" element={<Destination />}>
            <Route index element={<Destination />} />
            {/* <Route path="about" element={<Destination />} /> */}
            <Route path="plan-your-trip" element={<TripPlanner />} />
            <Route path="useful-links" element={<Destination />} />
            <Route path="blog" element={<Blog />} />
            <Route path="*" element={<NotFound />} />
        </Route>
          {/* <Route path="/:destination" element={<Destination />} />
          <Route path="/blog" element={<Blog />} /> */}
      </Routes>
    </div>
  );
}
// Define the App component
function App() {
  const location = useLocation();

  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransistionStage] = useState("fadeIn");

  useEffect(() => {
    if (location !== displayLocation) setTransistionStage("fadeOut");
  }, [location, displayLocation]);

  return (
    // Create a browser router
    <>
    <Navbar />
    <div
      className={`${transitionStage}`}
      onAnimationEnd={() => {
        if (transitionStage === "fadeOut") {
          setTransistionStage("fadeIn");
          setDisplayLocation(location);
        }
      }}
    >
          
      <Routes location={displayLocation}>
        <Route index element={<IndexPage />} />
            <Route exact path=":destination" element={<Destination />} />
            <Route exact path=":destination/plan-your-trip" element={<TripPlanner />} />
            <Route path=":destination/useful-links" element={<Destination />} />
            <Route path=":destination/blog" element={<Blog />} />
            <Route path=":destination/blog/:slug/:id" element={<BlogPost />} />
            <Route path="*" element={<NotFound />} />
      </Routes>
    <Footer />
    <ScrollToTop />
  </div></>
  );
}

export default App;
