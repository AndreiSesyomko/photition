import React, {useState} from 'react';
import {Card, Image} from "react-bootstrap";
import { Heart, Chat } from 'react-bootstrap-icons';
import { ReactComponent as User } from '../assets/user.svg';

const PhotoCard = ({photo}) => {
    const [showDesc, setShowDesc] = useState(false);
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setCursorPos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
    };
    return (
        <Card
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setShowDesc(true)}
            onMouseLeave={() => setShowDesc(false)}
            className="photo-card"
        >
            <Card.Header className="d-flex justify-content-between align-items-center" style={{ padding: '8px 12px' }}>
                <div className="d-flex align-items-center" style={{ gap: '8px' }}>
                    <div style={{ borderRadius: '50%', border: '1px solid #CFAD81', padding: '4px', transform: 'scale(0.8)' }}>
                        {photo.user.avatar ? <Image src={photo.user.avatar} /> : <User/>}
                    </div>
                    <span style={{ fontWeight: '700', color: '#7a5035' }}>{photo.user.username}</span>
                </div>
                <span style={{ fontWeight: '600' }}>{photo.publishedAt}</span>
            </Card.Header>
            <div style={{ height: '100%', backgroundColor: '#ccc' }}></div>
            <Card.Footer className="d-flex justify-content-between align-items-center" style={{ padding: '8px 12px', borderRadius: '0 0 15px 15px' }}>
                <div className="d-flex align-items-center" style={{ gap: '8px' }}>
                    <Heart size={20} />
                    <span>{photo.likes}</span>
                </div>
                <div className="d-flex align-items-center" style={{ gap: '8px' }}>
                    <Chat size={20} />
                    <span>{photo.comments}</span>
                </div>
            </Card.Footer>
            {showDesc && (
                <div
                    style={{
                        position: 'absolute',
                        left: cursorPos.x + 10,
                        top: cursorPos.y + 10,
                        pointerEvents: 'none',
                        background: '#fff',
                        border: '2px solid #c6a174',
                        borderRadius: '8px',
                        padding: '8px 12px',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
                        whiteSpace: 'nowrap',
                        zIndex: 20,
                        minWidth: '160px'
                    }}>
                    {photo.description}
                </div>
            )}
        </Card>
    );
};

export default PhotoCard;