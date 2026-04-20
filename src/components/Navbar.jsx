import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>Organic</h2>

      <div style={styles.links}>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/story">Story</Link>
        <Link to="/certifications">Certifications</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 40px",
    background: "#2e7d32",
    color: "#fff",
  },
  logo: {
    fontWeight: "bold",
  },
  links: {
    display: "flex",
    gap: "20px",
  },
};

export default Navbar;