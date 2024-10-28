import { useNavigate } from "react-router-dom";

function Book({name,pic,id,author,rate}){
    const navigate = useNavigate();
    return(
        <section 
        className="book-card"
        onClick={() => navigate(`/books/${id}`)}
        >
            <img src={pic} alt={name} className="book-card-image" />
            <h2 className="book-card-title">{name}</h2>
            <p className="book-card-author">{author}</p>
            <p className="book-card-rating">★ {rate}</p>
        </section>
        
    );
}
export default Book;