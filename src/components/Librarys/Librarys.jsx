import React, { useEffect, useState } from 'react';
import Library from '../Library/Library';

const Librarys = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('text.json')
            .then(res => res.json())
            .then(data => setBooks(data.blogs))
    }, [])
    return (
        <div className="d-flex g-2">
            <div className="grid col-8">
                <div id="container" className="row row-cols-1 g-4">
                    {
                        books.map(book => <Library key={book.id} book={book}></Library>)
                    }
                </div>
            </div>
            <div className="col-4 border border-1 border-warning h-50 mt-5 sticky-top">
                <h2 className="text-center">My cart</h2>
                <div className="px-5 mt-2">

                </div>
            </div>
        </div>
    );
};

export default Librarys;