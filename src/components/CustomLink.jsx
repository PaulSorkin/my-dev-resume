import React, {forwardRef} from 'react';
import {Link} from "react-router-dom";
import {motion} from "framer-motion";

const CustomLink = forwardRef(({text, ...props}, ref) => {
    return (
        {...props.to ? (
                <Link ref={ref} className='react_link' to={props.to} target={'_blank'}>
                    <p className='link' onClick={props.onClick}>
                        {text}
                    </p>
                </Link>
            ) : (
                <div ref={ref} className='react_link'>
                    <p className='link' onClick={props.onClick}>
                        {text}
                    </p>
                </div>
            )}
    );
});

export const MCustomLink = motion(CustomLink);
export default CustomLink;