import { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
    const [open, setOpen] = useState(false);
    const user = true;

    return (
        <nav>
            <div className="left">
                <Link to="/" className="logo">
                    <img src="/logo.png" alt="" />
                    <span>LamaEstate</span>
                </Link>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contacts">Contacts</Link>
                <Link to="/agents">Agents</Link>
                <Link to="/list">List</Link>
            </div>

            <div className="right">
                {user ? (
                    <div className="user">
                        <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                        <span>John Doe</span>
                        <Link to="/profile" className="profile">
                            <div className="notification">3</div>
                            <span>profile</span>
                        </Link>
                        <Link to="/list" className="list"></Link>
                    </div>
                ) : (
                    <>
                        <Link to="/signin">Sign in</Link>
                        <Link to="/signup" className="register">Sign up</Link>
                    </>
                )}
                <div className="menu-icon">
                    <img src="/menu.png" alt="" onClick={() => setOpen((prev) => !prev)} />
                </div>
                <div className={open ? "menu active" : "menu"}>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contacts">Contacts</Link>
                    <Link to="/agents">Agents</Link>
                    <Link to="/list">List</Link>
                    <Link to="/signin">Sign in</Link>
                    <Link to="/signup">Sign up</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;