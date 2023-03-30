import React from 'react';
import './Library.css';

const Library = (props) => {
    const { author_img, author_name, blog_cover_image
        , published_in, blog_title, read_time } = props.book;
    return (
        <div>
            <div className="card w-75 h-100">
                <img className="w-full mt-3 card-img-top mx-auto" src={blog_cover_image} alt="..." />
                <div className="card-body">
                    <div className='d-flex justify-content-around'>
                        <div className='d-flex g-2'>
                            <img className='author-img' src={author_img} alt="" />
                            <div>
                                <h5 className="card-title text-center">{author_name}</h5>
                                <h5 className="card-title text-center">{published_in}</h5>
                            </div>
                        </div>
                        <div>
                            <p>{read_time}</p>
                        </div>
                    </div>
                    <h3 className="card-title text-center">Price :</h3>
                    <p className="card-text text-center">Category :</p>
                    <button>Details</button>
                </div>
                <div className="card-footer">
                    <button className="text-primary bg-danger border-0 px-5 rounded py-1 w-100 mx-auto">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default Library;