const b1 = {
  picUrl:"https://m.media-amazon.com/images/I/81q77Q39nEL._AC_UF1000,1000_QL80_.jpg",
  bname:"HarryPotter Design Patten",
  price:1199,
  quantity:10,
  rating:5.0,
};

const b2 = {
  picUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTOMBjiQfAVzEl5p71ntHcMVc7XC8Lwg_Ht7mhL5BlNQ&s=10",
  bname:"Doraemon Design Pattern",
  price:2299,
  quantity:12,
  rating:4.3,
};

function Book(props) {
  console.log(props);
  return (
    <div>
    <img src={props.book.picUrl} alt={props.book.bname}/>
    <h1>{props.book.bname}</h1>
    <h2>Price: {props.book.price}</h2>
    <h3>Quantity: {props.book.quantity}</h3>
    <h4>Rating: {props.book.rating}</h4>
    </div>
  );
}

export default function App() {
  return (
  <>      
  <Book book={b1}/>
  <h1>Hello React</h1>
  <Book book={b2}/>
  <Book book={b1}/>
  <Book book={b2}/>
  </>
  );
}