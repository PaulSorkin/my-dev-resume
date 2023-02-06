import React from 'react';

const Link = ({text, ...props}) => {
    return (
        <p className="link" onClick={props.onClick}>
            {text}
        </p>
    );
};

export default Link;