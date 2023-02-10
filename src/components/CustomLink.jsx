import React from 'react';
import {Link} from "react-router-dom";

const CustomLink = ({text, ...props}) => {
    return (
        <Link className='react_link' to={props.to ? props.to : '/'}>
            <p className='link' onClick={props.onClick}>
                {text}
            </p>
        </Link>
    );
};

export default CustomLink;