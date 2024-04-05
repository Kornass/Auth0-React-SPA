import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./views/Home";
import Profile from "./views/Profile";
import Spinner from "./components/Spinner";
import Products from "./views/Products";
import Navbar from "./components/Navbar";

function App() {
  const { isLoading, isAuthenticated, error } = useAuth0();

  if (isLoading) {
    return <Spinner />;
  }
  if (error) {
    return <div>Oops... {error.message}</div>;
  }
  return (
    <div className="App">
      <Router>
        {isAuthenticated && <Navbar />}
        <Routes>
          <Route path="/" element={isAuthenticated ? <Profile /> : <Home />} />
          <Route
            path="/products"
            element={isAuthenticated ? <Products /> : <Navigate to="/" />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
