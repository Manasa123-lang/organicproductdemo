import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={styles.container}>
      <h1>Welcome to Organic Store 🌿</h1>
      <p>Pure. Natural. Healthy living.</p>

      <Link to="/shop">
        <button style={styles.btn}>Shop Now</button>
      </Link>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "60px",
  },
  btn: {
    padding: "10px 20px",
    background: "#2e7d32",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
};

export default Home;