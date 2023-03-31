import React from 'react';

const SideBar = (props) => {
    const time = props.cardTime;
    console.log(time);
    let number = 0;
    for (const book of time) {
        number = number + book.read_time;
    }
    return (
        <div>
            <h2 className='text-center'>Spend time on read :{number}  </h2>
        </div>
    );
};

export default SideBar;