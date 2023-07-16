
import './Header.css'
const Header = () => {
    return (
        <>
        <nav className="container">
      <div className="logo">
        <img src="../../../public/Images/brand-logo.png" alt="logo" />
      </div>
      <ul>
        <li ><a href="/menu">Menu</a></li>
        <li ><a href="/location">Location</a></li>
        <li ><a href="/about">About</a></li>
        <li ><a href="/contact">Contact</a></li>
        
      </ul>

      <button>login</button>
    </nav>
        </>
    );
};

export default Header;