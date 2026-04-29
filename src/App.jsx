import { Route, Routes, useLocation } from "react-router-dom";
import WarningBanner from "./components/WarningBanner.jsx";
import FooterDisclaimer from "./components/FooterDisclaimer.jsx";
import Navbar from "./components/layout/Navbar";
import Advanced from "./pages/Advanced";
import StartTrading from "./pages/StartTrading";
import AssetDetail from "./pages/AssetDetail";
import Explore from "./pages/Explore";
import Home from "./pages/Home";
import Learn from "./pages/Learn";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  const { pathname } = useLocation();
  const isAuthPage = pathname === "/signin" || pathname === "/signup";
  const isAdvancedPage = pathname === "/advanced" || pathname === "/start-trading";

  return (
    <div className={`min-h-screen ${isAdvancedPage ? "bg-[#0A0A0A] text-white" : "bg-white text-black"}`}>
      <WarningBanner />
      {!isAuthPage && <Navbar isDark={isAdvancedPage} />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/assets/:symbol" element={<AssetDetail />} />
          <Route path="/advanced" element={<Advanced />} />
          <Route path="/start-trading" element={<StartTrading />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </main>
      <FooterDisclaimer />
    </div>
  );
}

export default App;
