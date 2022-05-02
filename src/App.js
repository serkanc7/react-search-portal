import Landing from "./pages/Landing/Landing";
import ListPage from "./pages/ListPage/ListPage";
import AddPage from "./pages/AddPage/AddPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/add" element={<AddPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
