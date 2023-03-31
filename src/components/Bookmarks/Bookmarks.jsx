import React from 'react';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = (props) => {
    const book = props.bookmark;
    let bookMark = [];
    for (const blog of book) {
        const bookss = blog.blog_title;
        bookMark.push(bookss);
    }
    return (
        <div>

            <h2>Bookmark : {bookMark.length}</h2>
            {
                bookMark.map(bk => <Bookmark key={bk.id} bk={bk}></Bookmark>)

            }



        </div>
    );
};

export default Bookmarks;