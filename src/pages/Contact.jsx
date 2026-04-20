function Contact() {
  return (
    <div style={{ padding: "40px" }}>
      <h2>Contact Us</h2>
      <form style={styles.form}>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Message"></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    maxWidth: "400px",
  },
};

export default Contact;