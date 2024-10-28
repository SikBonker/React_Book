import Book from "./Book";

function BookPage({books}) {    
    return (
        <div className="bookpage">
            {books.map((book, index) =>
                <Book name={book.name} pic={book.pic} author={book.author} rate={book.rate} id={index} key={book.index}/>
            )}
        </div>
    );
}
export default BookPage;