import React from 'react';
import { Image } from 'react-bootstrap';

const Photo = ({ photoUrl, onClick }) => {
    return (
        <div onClick={onClick} className="photo-container">
            <div
                style={{backgroundImage: `url(${photoUrl})`}}
                className="photo-back"
            />
            <Image
                src={photoUrl}
                alt="photo"
                className="photo-image"
            />
        </div>
    );
};

export default Photo;
