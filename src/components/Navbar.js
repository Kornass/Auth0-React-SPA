import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
    </div>
  );
}

export default Navbar;
