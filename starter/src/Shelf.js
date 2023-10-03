import Book from "./Book";

const Shelf = ({ title, bookList }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {bookList.map((book) => <Book book={book} />)}
        </ol>
      </div>
    </div>
  );
};

export default Shelf;