import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { Home, BlogEditor, BlogLister } from "./components";
import "./App.css";

function App() {
  const ProtectedRoute = ({ children }) => {
    if (window.sessionStorage.getItem("user") === "Trishant Pahwa") {
      return children;
    } else {
      return <Navigate to="/" replace />;
    }

  };

  const login = () => {
    window.sessionStorage.setItem("user", "Trishant Pahwa");
  };

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route exact path="/" element={<Home login={login} />} />
            <Route
              exact
              path="/list"
              element={
                <ProtectedRoute>
                  <BlogLister />
                </ProtectedRoute>
              }
            />
            <Route
              path="/edit/:id"
              element={
                <ProtectedRoute>
                  <BlogEditor />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
