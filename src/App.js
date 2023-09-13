import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "aos/dist/aos.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Landing = React.lazy(() => import("./pages/landing"));

function App() {
  return (
    <>
      <Suspense fallback={<></>}>
        <Router>
          <Routes>
            <Route path="/" element={<Landing />}></Route>
          </Routes>
        </Router>
      </Suspense>

      <ToastContainer />
    </>
  );
}

export default App;
