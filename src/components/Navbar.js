import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="navbar">
            <Link to="/todo" style={{textDecoration: 'none', color: 'blue'}}>Todo</Link>
            <Link to="/draw" style={{textDecoration: 'none', color: 'blue'}}>Draw</Link>
        </div>
    );
}