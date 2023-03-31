import React from 'react';

const Bookmarks = (props) => {
    const book = props.bookmark;
    // book.map(bk=> console.log(bk))
    let bookMark = [];
    for (const blog of book) {
        const bookss = blog.blog_title;
        bookMark.push(bookss);
    }
    console.log(bookMark);
    return (
        <div>

            <h2>Bookmark : {bookMark.length}</h2>
            {
                bookMark.map(bk => {
                    return (<div className="card w-75 mt-2 mx-auto rounded-4">
                        <div class="card-body">
                            <h3>{bk}</h3>
                        </div>
                    </div>)

                })

            }



        </div>
    );
};

export default Bookmarks;