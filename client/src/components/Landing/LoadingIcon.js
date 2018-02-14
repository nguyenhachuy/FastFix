import React from 'react';
import Button from './../Button';
import '../style/Style.css'
const LoadingIcon = ({type, onClick, link}) => {
    return (
        <Button className="btn-lg button-centered" onClick={onClick} link={link}>
            <span className={["glyphicon", `glyphicon-${type}`, "glyph-link"].join(' ')} aria-hidden="true">
            </span>
            <div> {type==='user' ? 'User' : 'Provider'} </div>
        </Button>        
    )
};

export default LoadingIcon;
