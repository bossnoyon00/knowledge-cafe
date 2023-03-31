import React, { useEffect, useState } from 'react';
import Bookmarks from '../Bookmarks/Bookmarks';
import Library from '../Library/Library';
import SideBar from '../SideBar/SideBar';

const Librarys = () => {
    const [books, setBooks] = useState([]);
    const [cardTime, setTime] = useState([]);
    const [bookmark, setBookmark] = useState([]);
    useEffect(() => {
        fetch('text.json')
            .then(res => res.json())
            .then(data => setBooks(data.blogs))
    }, [])

    const timeHandler = (time) => {
        const newTime = [...cardTime, time]
        setTime(newTime);
    }
    const bookMark = (mark) => {
        const newBookmark = [...bookmark, mark]
        setBookmark(newBookmark);
    }


    return (
        <div className='d-flex mt-5'>
            <div className="grid col-8">
                <div id="container" className="row row-cols-1 g-4">
                    {
                        books.map(book => <Library bookMark={bookMark} timeHandler={timeHandler} key={book.id} book={book}></Library>)
                    }
                </div>
            </div>
            <div className="col-4 sticky">
                <div id='time-box' className="border border-1 border-warning">
                    <SideBar cardTime={cardTime}></SideBar>
                </div>

                <div id='bookmarks-box' className=" border border-1 border-warning mt-3">
                    <Bookmarks bookmark={bookmark}></Bookmarks>
                </div>
            </div>

        </div>);
};
export default Librarys;