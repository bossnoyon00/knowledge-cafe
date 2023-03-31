import React from 'react';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = (props) => {
    const book = props.bookmark;
    // book.map(bk=> console.log(bk))
    let bookMark = [];
    for (const blog of book) {
        const bookss = blog.blog_title;
        bookMark.push(bookss);
    }
    return (
        <div>

          

        </div>
    );
};

export default Bookmarks;