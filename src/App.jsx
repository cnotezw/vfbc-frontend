import React, { useEffect, useState, lazy, Suspense } from "react";
import { useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import IndexPage from "./containers/Home";
// import Destination from "./containers/Destination";
// import TripPlanner from "./containers/TripPlanner";
// import Blog from "./containers/Blog";
// import BlogPost from "./containers/BlogPost";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";
import Loader from "./components/Loader"

import { Navbar } from "./components/Navbar";

import SuspenseWrapper from "./components/SuspenseWrapper";

// import logo from './assets/logos/logo-upright.png';
import logo from './assets/logos/logo-upright.png';


const Destination = lazy(() => import('./containers/Destination'));
const TripPlanner = lazy(() => import('./containers/TripPlanner'));
const Blog = lazy(() => import('./containers/Blog'));
const BlogPost = lazy(() => import('./containers/BlogPost'));

const ScrollToTop = () => {
  // Extracts pathname property(key) from an object
  const { pathname } = useLocation();
  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
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
    <Suspense fallback={<Loader logo={logo} open={true} direction={'left'} />}>
      <Routes location={displayLocation}>
        <Route index element={<IndexPage />} />
            <Route exact path=":destination" element={<Destination />} />
            <Route exact path=":destination/plan-your-trip" element={<TripPlanner />} />
            <Route path="/useful-links" element={<Destination />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug/:id" element={<BlogPost />} />
            <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>

    <Footer />
    <ScrollToTop />
  </div></>
  );
}

export default App;
