function Shop() {
  const products = [
    { id: 1, name: "Organic Honey", price: 10 },
    { id: 2, name: "Herbal Tea", price: 8 },
    { id: 3, name: "Natural Soap", price: 5 },
  ];

  return (
    <div style={styles.container}>
      <h2>Shop Products</h2>

      <div style={styles.grid}>
        {products.map((item) => (
          <div key={item.id} style={styles.card}>
            <h3>{item.name}</h3>
            <p>${item.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: { padding: "40px" },
  grid: {
    display: "flex",
    gap: "20px",
  },
  card: {
    border: "1px solid #ccc",
    padding: "20px",
  },
};

export default Shop;