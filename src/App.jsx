import {BrowserRouter , Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Pricing from "./components/Pricing";
import About from "./components/About";
import Services from "./components/Services";
import ContactForm from "./components/ContactForm";
import SignInPage from "./components/SignIn";
import Wematchit from "./components/Wematchit";
import Footer from "./components/Footer";
import Terms from "./components/Terms";
import PrivacyPolicy from "./components/Policies";
import Refunds from "./components/Refunds";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
            path="/"
            element={(
              <>
                <Navbar />
                <HeroSection />
                <About />
                <Services />
                <Pricing />
                <Footer />
              </>
            )}
          />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/terms" element={(
            <>
            <Navbar />
            <Terms />
            <Footer />
            </>
          )}
           />
           <Route path="/privacy" element={(
            <>
            <Navbar />
            <PrivacyPolicy />
            <Footer />
            </>
          )}
           />
           <Route path="/refund-cancellation" element={(
            <>
            <Navbar />
            <Refunds />
            <Footer />
            </>
          )}
           />
      </Routes>
    </BrowserRouter>
  );

}

export default App

