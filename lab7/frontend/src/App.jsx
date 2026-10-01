import Book from "./components/Book";
import Pen from "./components/Pen";
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

const p1 = {
  picUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjkEyuCVyeNVOWHWVIBr5G_p3uhexa2uDGm9GVxp-lHQ&s=10",
  pname: "Blue Ball Pen",
  price: 20,
  quantity: 50,
  rating: 4.5,
};

const p2 = {
  picUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzmEg9eG7WzrD5lPJVM2XUunXTgLip-F9nlnUiLFm4Bg&s",
  pname: "Black Gel Pen",
  price: 30,
  quantity: 40,
  rating: 4.8,
};

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

  <h1>Online Pen Store</h1>
      <div className="container">
        <Pen pen={p1} />
        <Pen pen={p2} />
        <Pen pen={p1} />
        <Pen pen={p2} />
      </div>
  </>
  );
}
