import React from 'react';
import './Library.css';
import { FaBookmark } from 'react-icons/fa';



const Library = (props) => {
    const { author_img, author_name, blog_cover_image
        , published_in, blog_title, read_time } = props.book;
    const timeHandler = props.timeHandler;
    const bookMark = props.bookMark;
    return (
        <div>
            <div className="card w-75 h-100">
                <img className="w-full mt-3 card-img-top mx-auto" src={blog_cover_image} alt="..." />
                <div className="card-body">
                    <div className='d-flex justify-content-around align-items-center'>
                        <div className='d-flex gy-2'>
                            <img className='author-img' src={author_img} alt="" />
                            <div>
                                <h5 className="card-title text-center">{author_name}</h5>
                                <h5 className="card-title text-center">{published_in}</h5>
                            </div>
                        </div>

                        <div className='d-flex'>
                            <p>{read_time} min read</p>
                            <FaBookmark className='ms-2' onClick={() => bookMark(props.book)} />
                        </div>

                    </div>
                    <h3 className="card-title">{blog_title}</h3>

                </div>
                <div className="card-footer">
                    <button onClick={() => timeHandler(props.book)} className="text-primary bg-danger border-0 px-5 rounded py-1 w-100 mx-auto">Marks as read</button>
                </div>
            </div>
        </div>
    );
};

export default Library;