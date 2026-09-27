import './Header.css';

function Header({ storeName, cartCount }) {
  return (
    <header className="site-header">
      <div className="header-container">
        <h1 className="store-name">{storeName}</h1>

        <nav>
          <ul className="nav-list">
            <li><a href="#home">Home</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        <div className="cart-container">
          <span className="cart-icon">🛒</span>
          {cartCount > 0 && (
            <span className="cart-badge">{cartCount}</span>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;