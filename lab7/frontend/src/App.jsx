const h1 = {
  picUrl:"https://m.media-amazon.com/images/I/81q77Q39nEL._AC_UF1000,1000_QL80_.jpg",
  bname:"React Design Patten",
  price:1199,
  quantity:10,
  rating:5.0,
};


function Book() {
  return (
    <div>
    <img
      src="https://m.media-amazon.com/images/I/81q77Q39nEL._AC_UF1000,1000_QL80_.jpg"
      alt="Design Pattern react JS"
    />
    <h1>Lets Us React</h1>
    <h2>Price: 765.00</h2>
    <h3>Quantity: 5</h3>
    <h4>Rating: 5.0</h4>
    </div>
  );
}

export default function App() {
  return (
  <>
  <Book />
  <h1>Hello React</h1>
  <Book />
  <Book />
  <Book />
  </>
  );
}