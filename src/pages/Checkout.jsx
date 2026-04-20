import { useNavigate } from "react-router-dom";

function Checkout() {
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/success");
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Checkout</h2>
      <button onClick={handleCheckout}>Place Order</button>
    </div>
  );
}

export default Checkout;