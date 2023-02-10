import React from 'react';
import {Link} from "react-router-dom";

const CustomLink = ({text, ...props}) => {
    return (
        {...props.to ? (
                <Link className='react_link' to={props.to}>
                    <p className='link' onClick={props.onClick}>
                        {text}
                    </p>
                </Link>
            ) : (
                <div className='react_link'>
                    <p className='link' onClick={props.onClick}>
                        {text}
                    </p>
                </div>
            )}
    );
};

export default CustomLink;