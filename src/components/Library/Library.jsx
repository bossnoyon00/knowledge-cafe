import React from 'react';
import './Library.css';
import { FaBookmark } from 'react-icons/fa';



const Library = (props) => {
    const { author_img, author_name, blog_cover_image
        , published_in, blog_title, read_time } = props.book;
    const timeHandler = props.timeHandler;
    const bookMark = props.bookMark;
    return (
        <div className=''>
            <div className="card w-full h-full mb-5">
                <img className="w-full mt-3 card-img-top mx-auto" src={blog_cover_image} alt="..." />
                <div className="card-body">
                    <div className='d-flex justify-content-between align-items-center'>
                        <div className='d-flex gy-2'>
                            <img className='author-img me-3' src={author_img} alt="" />
                            <div>
                                <h6 className="card-title text-center">{author_name}</h6>
                                <p className="card-title text-center">{published_in}</p>
                            </div>
                        </div>

                        <div className='d-flex'>
                            <p>{read_time} min read</p>
                            <FaBookmark className='ms-2 d-flex align-items-center ' onClick={() => bookMark(props.book)} />
                        </div>

                    </div>
                    <h3 className="card-title mt-3">{blog_title}</h3>
                    <p className='text-mute'>#begginers #programming</p>
                </div>
                <div className="card-footer">
                    <button onClick={() => timeHandler(props.book)} className="text-primary bg-danger border-0 px-5 rounded py-1 w-100 mx-auto">Marks as read</button>
                </div>
            </div>
        </div>
    );
};

export default Library;