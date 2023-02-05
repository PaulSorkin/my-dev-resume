import React from 'react';

const Wrapper = ({children}) => {
    return (
        <div className="container">
            <div className={"wrapper"}>
                {children}
            </div>
        </div>
    );
};

export default Wrapper;