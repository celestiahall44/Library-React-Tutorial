import React, { useState } from "react";
import { books as booksData } from "../../data";
import Book from "../ui/Book";


const Books = ({books: initialBooks}) => {
    const sourceBooks = initialBooks ?? booksData;
    const [books, setBooks] = useState(sourceBooks);

    function getBookPrice(book) {
        return book.salePrice ?? book.originalPrice;
    }

    function filterBooks(filter) {
        let nextBooks = [...sourceBooks];

        if (filter === "LOW_TO_HIGH") {
            nextBooks.sort((a, b) => getBookPrice(a) - getBookPrice(b));
        }

        if (filter === "HIGH_TO_LOW") {
            nextBooks.sort((a, b) => getBookPrice(b) - getBookPrice(a));
        }

        if (filter === "RATING") {
            nextBooks.sort((a, b) => b.rating - a.rating);
        }

        setBooks(nextBooks);
    }
    
    return (
        <section id="books__body">
            <main id="books__main">
                <section>
                    <div className="books__container">
                        <div className="row">
                            <div className="books__header">
                                <h2 className="section__title books__header--title">All books</h2>
                                <select id="filter" defaultValue="DEFAULT" onChange={(event) => filterBooks(event.target.value)}>
                                    <option value="DEFAULT" disabled>Sort</option>
                                    <option value="LOW_TO_HIGH">Price, Low to High</option>
                                    <option value="HIGH_TO_LOW">Price, High to Low</option>
                                    <option value="RATING">Rating</option>
                                </select>
                            </div>
                            <div className="books">
                                {books.map(book => (
                                    <Book book={book} key={book.id} />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </section>
    );
}

export default Books;