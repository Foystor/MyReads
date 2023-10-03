import Shelf from "./Shelf";
import { Link } from "react-router-dom";

const Library = ({ bookList }) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <Shelf title="Currently Reading" bookList={bookList} />
          <Shelf title="Want to Read" bookList={bookList} />
          <Shelf title="Read" bookList={bookList} />
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};

export default Library;