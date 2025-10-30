import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import PowerBI from "./pages/PowerBI"; 

function App() {
  return (
    <Router>
      <Navbar />

      {/* Page Content */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/powerbi" element={<PowerBI />} />
      </Routes>
    </Router>
  );
}

export default App;
