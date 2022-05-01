import Landing from "./pages/Landing/Landing";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListPage from "./pages/ListPage/ListPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/list" element={<ListPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
