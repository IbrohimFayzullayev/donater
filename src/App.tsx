import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import User from "./pages/User";
import Header from "./components/Header";

function App() {
  return (
    <div className="h-screen bg-gray-100">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:username" element={<User />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
