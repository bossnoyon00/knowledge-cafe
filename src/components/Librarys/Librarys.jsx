import React, { useEffect, useState } from 'react';
import './Librarys.css'
import Bookmarks from '../Bookmarks/Bookmarks';
import Library from '../Library/Library';
import SideBar from '../SideBar/SideBar';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Librarys = () => {
    const [books, setBooks] = useState([]);
    const [cardTime, setTime] = useState([]);
    const [bookmark, setBookmark] = useState([]);
    useEffect(() => {
        fetch('library.json')
            .then(res => res.json())
            .then(data => setBooks(data.blogs))
    }, [])

    const timeHandler = (time) => {
        const newTime = [...cardTime, time]
        setTime(newTime);
    }
    // const bookMark = (mark) => {
    //     const exist = bookMark.map(bm => bm.id === mark.id);
    //     if (exist) {
    //         alert('Heyyy donnnnttt touch')
    //     }
    //     else {

    //         const newBookmark = [...bookmark, mark]
    //         setBookmark(newBookmark);
    //     }
    // }
    const bookMarkHandler = (mark) => {
        const markedItems = bookmark.find(bk => bk.id === mark.id);
        if (markedItems) {
            toast('Already exits')
        }
        else {

            const newBookMark = [...bookmark, mark];
            setBookmark(newBookMark);
        }
    }

    return (
        <div className='d-flex container-main mt-5'>
            <div className="grid col-md-8">
                <div id="container" className="">
                    <ToastContainer></ToastContainer>
                    {
                        books.map(book => <Library bookMarkHandler={bookMarkHandler} timeHandler={timeHandler} key={book.id} book={book}></Library>)
                    }
                </div>
            </div>
            <div className="grid  col-md-4 sticky-top">
                <div id='time-box' className="border border-1 border-warning">
                    <SideBar cardTime={cardTime}></SideBar>
                </div>

                <div id='bookmarks-box' className=" border border-1 sticky-top border-warning mt-3">
                    <Bookmarks bookmark={bookmark}></Bookmarks>
                </div>
            </div>

        </div>);
};
export default Librarys;