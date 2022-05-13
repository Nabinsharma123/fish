
import './Navbar.css';

function Navbar() {
    return (
        <div className="Navbar">
            <div className="Navbar_img" >
                <img alt="1" src={require("./images/logo_1.png")} />
            </div>
            <div className="navbar_options" >
                <h1 className="options" >Catagory</h1>
                <h1 className="options" >FAQs</h1>
                <h1 className="options" >My Cart</h1>
                <button>Login</button>
            </div>
        </div>
    );
}

export default Navbar;
