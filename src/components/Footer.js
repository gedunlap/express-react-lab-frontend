import {Link} from 'react-router-dom'

function Footer(props) {

    const footStyle = {
        display: "flex",
        justifyContent: "space-around",
        backgroundColor: "black",
        color: "white",
        fontSize: "20px",
        position: "fixed",
        bottom: "0",
        fontWeight: "900",
        padding: "8px",
        width: "100%",
        margin: "auto",
    }

    return (
        <footer style={footStyle}>
            <Link to='/contact'>
                <div className="navItem">CONTACT</div>
            </Link>
        </footer>
    )
}

export default Footer