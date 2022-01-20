import "./App.css";
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from "./Home";
import LootTest from "./LootTest";

const App = () => {

  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/LootTest" element={<LootTest />} />
      </Routes>
    </Router>
  );
};

export default App;
