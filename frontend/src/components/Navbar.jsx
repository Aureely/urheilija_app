import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark mb-4">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Urheilijat
        </Link>
        <Link className="btn btn-success btn-sm" to="/lisaa">
          Lisää urheilija
        </Link>
      </div>
    </nav>
  );
}
