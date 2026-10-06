import Book from "./components/Book";
import Fruit from "./components/Fruit";
import Pen from "./components/Pen";
import Event from "./components/Event"
import { books } from "./data/books";
import { pens } from "./data/pens";

export default function App() {
  return (
  <>      
  <h1>Online Book Store</h1>
  <div className="container">
  <Book book={books[0]}/>     
  <Book book={books[1]}/>
  <Book book={books[0]}/>
  <Book book={books[1]}/>
  </div>
  <h1>Online Pen Store</h1>
  <div className="container">
  <Pen pen={pens[0]} />
  <Pen pen={pens[1]} />
  <Pen pen={pens[0]} />
  <Pen pen={pens[1]} />
  <Fruit/>
  </div>
  </>
  );       
}
