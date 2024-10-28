import { useParams } from "react-router-dom"

function BookDetail({ books }) {
    const { id } = useParams();
    const book = books[id];

    return (
        <section className="book-detail">
            <img src={book.pic} alt={book.name} className="book-detail-image" />
            <div className="book-detail-content">
                <h2 className="book-detail-title">{book.name}</h2>
                <p className="book-detail-author">{book.author}</p>
                <p className="book-detail-rating">★ {book.rate}</p>
                <p className="book-detail-description">{book.bio}</p>
            </div>
        </section>
    );
}

export default BookDetail;