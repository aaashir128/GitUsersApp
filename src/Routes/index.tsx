import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const LoadingScreen = React.lazy(
  () => import("../pages/LoadingScreen/LoadingScreen")
);
const NotFound = React.lazy(() => import("../pages/NotFound"));
const Home = React.lazy(() => import("../pages/Home/Home"));

const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<LoadingScreen />}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
