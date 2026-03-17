import React from "react";
import { Link } from 'react-router-dom';
import Price from './Price';
import Rating from './Rating';

const Book = ({ book }) => {
    function imageLoaded() {

    }
    return (
        <div className="book">
            {
                img ?
                    <>
            <Link to={`/books/${book.id}`} className="book__link">
                <figure className="book__img--wrapper">
                    <img
                        src={book.url}
                        alt={book.title}
                        className="book__img"
                        onLoad={imageLoaded}
                    />
                </figure>
            </Link>

            <div className="book__title">
                <Link to={`/books/${book.id}`} className="book__title--link">
                    {book.title}
                </Link>
            </div>

            <Rating rating={book.rating} />

            <Price salePrice={book.salePrice} originalPrice={book.originalPrice} />
                </>
                <div className="book__img--skeleton"></div>
                <div className="book__title--skeleton"></div>
                <div className="book__rating--skeleton"></div>
                <div className="book__price--skeleton"></div>
                :<> </>
            }
        </div>
    );
}

export default Book;