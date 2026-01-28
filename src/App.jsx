import ResponsiveAppBar from "./components/ResponsiveAppBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EsportsPage from "./EsportsPage";
import Page from "./page";
import Footer from "./components/Footer";
export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col overflow-x-hidden">
        <ResponsiveAppBar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Page />}></Route>
            {/* <Route path="/events/cultural" element={<CulturalPage />} />
            <Route path="/events/edufun" element={<EdufunPage />} />
            <Route path="/events/sports" element={<SportsPage />} /> */}
            {/* <Route path="/events/esports" element={<EsportsPage />} /> */}
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
