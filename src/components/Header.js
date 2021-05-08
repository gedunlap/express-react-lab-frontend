import {Link} from "react-router-dom"

function Header(props) {
    //inline style for the nav tag
    const navStyle = {
        display: "flex",
        justifyContent: "space-around",
        backgroundColor: "black",
        fontSize: "20px",
        position: "fixed",
        top: "0",
        fontWeight: "900",
        padding: "8px",
        width: "100%",
        margin: "auto",
    }

    return (
        <header>
            <nav style={navStyle}>
                <Link to='/'>
                    <div className="navItem">HOME</div>
                </Link>
                <Link to='/about'>
                    <div className="navItem">ABOUT</div>
                </Link>
                <Link to='/projects'>
                    <div className="navItem">PROJECTS</div>
                </Link>
            </nav>
        </header>
    )
}

export default Header