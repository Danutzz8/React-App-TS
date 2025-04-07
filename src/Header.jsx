
import { Link } from "@tanstack/react-router";

export default function Header() {
  return (
    <nav className="fixed top-0 left-0 right-0 flex justify-between items-center bg-white">
      <Link to={"/"}>
        <span className="logo"></span>
        <h1 className="title">React Projects</h1>
      </Link>
      <div className="nav-cart">
        <Link to={"/"}>
            <span className="home">Home</span>
        </Link>
        <span data-testid="cart-number" className="nav-cart-number">
          {0}
        </span>
      </div>
    </nav>
  );
}