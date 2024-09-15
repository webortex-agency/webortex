import { useState } from "react";
import "@fontsource/poppins";
import Navbar from "./Components/Navabar/Navbar";
import Footer from "./Components/Footer/Footer";
import LandingPage from "./Components/LandingPage/LandingPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./Components/NotFound/NotFound";
import Contact from "./Components/Contact/Contact";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import SIP from "./Components/SIP/SIP";

const App = () => {
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 2000);
  }

  return (
    !loading && (
      <>
        <Router>
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route exact path="/sip" element={<SIP />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Router>
      </>
    )
  );
};

export default App;
