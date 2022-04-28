import Landing from "./pages/Landing/Landing";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListPage from "./pages/ListPage/ListPage";

function App() {

  const [isTwoLetters, setIsTwoLetters] = useState(false);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Landing
                setIsTwoLetters={setIsTwoLetters}
                isTwoLetters={isTwoLetters}
              />
            }
          />
          <Route
            path="/list"
            element={
              <ListPage
                setIsTwoLetters={setIsTwoLetters}
                isTwoLetters={isTwoLetters}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
