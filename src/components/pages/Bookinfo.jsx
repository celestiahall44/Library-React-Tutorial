import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { books as booksData } from '../../data';
import Rating from '../ui/Rating';
import Price from '../ui/Price';
import Book from '../ui/Book';

const Bookinfo = ({ addToCart, cart = [] }) => {
    const { id } = useParams();
    const bookId = Number(id);
    const book = booksData.find((bookItem) => bookItem.id === bookId);
    const recommendedBooks = booksData
        .filter((bookItem) => bookItem.id !== bookId)
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 4);

    function addBookToCart(book) {
        if (addToCart) {
            addToCart(book);
        }
    }

    function bookExistsOnCart() {
        return cart.some((bookItem) => bookItem.id === bookId);
    }

    if (!book) {
        return (
            <section id="books__body">
                <main id="books__main">
                    <div className="books__container">
                        <div className="row">
                            <div className="book__selected--top">
                                <Link to="/books" className="book__link">
                                    <FontAwesomeIcon icon={faArrowLeft} />
                                </Link>
                                <h2 className="book__selected--title">Book not found</h2>
                            </div>
                        </div>
                    </div>
                </main>
            </section>
        );
    }



    return (
        <section id="books__body">
            <main id="books__main">
                <div className="books__container">
                    <div className="row">
                        <div className="book__selected--top">
                            <Link to="/books" className="book__link">
                                <FontAwesomeIcon icon={faArrowLeft} />
                            </Link>
                            <Link to="/books" className="book__link">
                                <h2 className="book__selected--title">Books</h2>
                            </Link>
                        </div>
                        <div className="book__selected">
                            <figure className="book__selected--figure">
                                <img src={book.url} alt={book.title} className="book__selected--img" />
                            </figure>
                            <div className="book__selected--description">
                                <h2 className="book__selected--title">{book.title}</h2>
                                <Rating rating={book.rating} />
                                <Price salePrice={book.salePrice} originalPrice={book.originalPrice} />
                                <div className="book__summary">
                                    <h3 className="book__summary--title">Summary</h3>
                                    <p className="book__summary--para">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
                                    </p>
                                </div>
                                {bookExistsOnCart() ? (
                                <Link to={`/cart`} className="book__link">
                                    <button className="btn">Checkout</button>
                                </Link>
                                ) : (
                                    <button className="btn" onClick={() => addBookToCart(book)}>Add to Cart</button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="books__container">
                    <div className="row">
                        <div className="book__selected--top">
                            <h2 className="book__selected--title--top">
                                Recommended Books
                            </h2>
                        </div>
                        <div className="books">
                            {recommendedBooks.map((bookItem) => (
                                <Book book={bookItem} key={bookItem.id} />
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </section>
    );
}

export default Bookinfo;