import Landing from "./pages/Landing/Landing";
import {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListPage from "./pages/ListPage/ListPage";

function App() {

  const [records, setRecords] = useState([]);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing records={records} setRecords={setRecords} />} />
          <Route path="/list" element={<ListPage records={records} setRecords={setRecords}/>} />

        </Routes>
      </Router>

    </div>
  );
}

export default App;
