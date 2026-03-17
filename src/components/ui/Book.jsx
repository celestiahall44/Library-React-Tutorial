import React, { useEffect, useRef, useState } from "react";
import { Link } from 'react-router-dom';
import Price from './Price';
import Rating from './Rating';

const Book = ({ book }) => {
    const [img, setImg] = useState(false);

    const mountedRef = useRef(true);

    useEffect(() => {
        mountedRef.current = true;
        setImg(false);

        const image = new Image();
        let timeoutId;

        const handleImageDone = () => {
            timeoutId = setTimeout(() => {
                if (mountedRef.current) {
                    setImg(true);
                }
            }, 300);
        };

        image.onload = handleImageDone;
        image.onerror = handleImageDone;
        image.src = book.url;

        return () => {
            mountedRef.current = false;
            image.onload = null;
            image.onerror = null;
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, [book.url]);
    
    return (
        <div className="book">
            {img ? (
                <>
                    <Link to={`/books/${book.id}`} className="book__link">
                        <figure className="book__img--wrapper">
                            <img
                                src={book.url}
                                alt={book.title}
                                className="book__img"
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
            ) : (
                <>
                    <div className="book__img--skeleton"></div>
                    <div className="book__title--skeleton"></div>
                    <div className="book__rating--skeleton"></div>
                    <div className="book__price--skeleton"></div>
                </>
            )}
        </div>
    );
}

export default Book;