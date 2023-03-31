import React from 'react';

const Bookmark = ({ bk }) => {
    return (
        <div className="card w-75 mt-2 mx-auto rounded-4">
            <div className="card-body">
                <h3>{bk}</h3>
            </div>
        </div>
    );
};

export default Bookmark;