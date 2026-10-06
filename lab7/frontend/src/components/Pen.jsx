export default function Pen(props) {
  const { pname, price, quantity, rating, picUrl } = props.pen;
  const qtystyle = {
    fontSize: "1rem",
    color: "blue",
    textAlign: "center",
    backgroundColor: "Yellow",
    padding: "10px",
  }
  return (
    <div className="container">
      <img src={picUrl} alt={pname} />
      <h1>{pname}</h1>
      <h2>Price: {price}</h2>
      <h3 style={qtystyle}>Quantity: {quantity}</h3>
      <h4 style={{ color: "red", textAlign: "center" }}>Rating: {rating}</h4>
      <button>Buy Now</button>
    </div>
  );
}

