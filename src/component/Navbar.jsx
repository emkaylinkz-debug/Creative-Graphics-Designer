// app/component/Navbar.jsx
import Link from "next/link";

export default function Navbar() {
  return (
    
    <nav className="navbar navbar-expand-md shadow-sm py-1 fixed-top">
      <div className="container">
        <img src="/logo.jpg" className="rounded-2" width={200} height={80} alt="Logo" />
        <a href="/" className="navbar-brand fw-bolder text-uppercase">Portfolio</a>

        <button
          className="navbar-toggler shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main-nav"
          aria-controls="main-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="bi bi-list text-light"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="main-nav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/" className="nav-link fw-bold">Home</Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className="nav-link fw-bold">About Us</Link>
            </li>
            <li className="nav-item">
              <Link href="/skills" className="nav-link fw-bold">Skills</Link>
            </li>
            <li className="nav-item">
              <Link href="/work" className="nav-link fw-bold">Projects</Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" className="nav-link fw-bold">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}