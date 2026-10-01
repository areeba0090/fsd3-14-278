const b1 = {
  picUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvsNCwA4pajVZbpl1AalVB0ZhNntMX4sXqfAaWR90R0A&s=10",
  bname:"Crayon Shinchan",
  price:1199,
  quantity:10,
  rating:5.0,
};

const b2 = {
  picUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTOMBjiQfAVzEl5p71ntHcMVc7XC8Lwg_Ht7mhL5BlNQ&s=10",
  bname:"Doraemon's Adventure at the farm",
  price:2299,
  quantity:12,
  rating:4.3,
};

function Book(props) {
  // console.log(props);
  const{bname,price,quantity,rating,picUrl}=props.book;
  return (
    <div>
    <img src={picUrl} alt={bname}/>
    <h1>{bname}</h1>
    <h2>Price: {price}</h2>
    <h3>Quantity: {quantity}</h3>
    <h4>Rating: {rating}</h4>
    <button>Buy Now</button>
    </div>
  );
}

export default function App() {
  return (
  <>      
  <h1>Online Book Store</h1>
  <div className="container">
  <Book book={b1}/>     
  <Book book={b2}/>
  <Book book={b1}/>
  <Book book={b2}/>
  </div>
  </>
  );
}