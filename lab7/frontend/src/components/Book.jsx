export default function Book(props) {
  // console.log(props);
  const{bname,price,quantity,rating,picUrl}=props.book;
  const qtystyle = {
    fontSize:"irem",
    color:"blue",
    texAlign:"center",
    backgroundColor:"Yellow",
    padding:"10px",
  }
  return (
    <div className="container">
    <img src={picUrl} alt={bname}/>
    <h1>{bname}</h1>
    <h2>Price: {price}</h2>
    <h3 style={qtystyle}>Quantity: {quantity}</h3>
    <h4 style={{color:"red",textAlign:"center"}}>Rating: {rating}</h4>
    <button>Buy Now</button>
    </div>
  );
}