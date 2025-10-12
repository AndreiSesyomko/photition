import React, {useContext, useState} from 'react';
import {Card, Image} from "react-bootstrap";
import {Heart, Chat, Person, PencilFill} from 'react-bootstrap-icons';
import Photo from "./Photo";
import {useNavigate} from "react-router-dom";
import { Context } from '..';
import { observer } from 'mobx-react-lite';
import EditCardModal from './modals/EditCardModal';

const PhotoCard = ({photo}) => {
    const [showDesc, setShowDesc] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false)
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
    const {user} = useContext(Context)
    const navigate = useNavigate();
    const handleMouseMove = (e) => {
        setCursorPos({
            x: e.clientX,
            y: e.clientY
        });
    };
    return (
        <>
            <Card
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setShowDesc(true)}
            onMouseLeave={() => setShowDesc(false)}
            
            className="photo-card"
        >
            <Card.Header className="d-flex justify-content-between align-items-center" style={{ padding: '8px 24px' }}>
                <div className="d-flex align-items-center" style={{ gap: '8px' }}>
                    <div style={{ borderRadius: '50%', height: '59px', width: '59px', overflow: 'hidden', border: '1px solid #CFAD81', padding: '4px', transform: 'scale(0.8)' }}>
                        {photo.user.avatar ? <Image style={{height: '100%', width: '100%', borderRadius: '50%'}} src={photo.user.avatar} /> : <Person className="card-avatar" />}
                    </div>
                    <span style={{ fontWeight: '700', color: '#CFAD81' }}>{photo.user.username}</span>
                </div>
                <h5 style={{marginRight: '20px'}}>{photo.title}{user.user.id === photo.user.id && <PencilFill onClick={() => setShowEditModal(true)} className="pencil-icon"/>}</h5>
                <span style={{ fontWeight: '600' }}>{photo.publishedAt}</span>
            </Card.Header>
            {photo.photo ? <Photo onClick={() => navigate('/photo/' + photo.id)} photoUrl={photo.photo} />:
                <div onClick={() => navigate('/photo/' + photo.id)} style={{height: '100%', backgroundColor: '#ccc'}}></div>}
            <Card.Footer className="d-flex justify-content-center align-items-center" style={{ padding: '8px 12px', borderRadius: '0 0 15px 15px' }}>
                <div className="d-flex align-items-center my-icon" style={{gap: '10px', marginRight: '24px'}}>
                    <span style={{fontWeight: '600'}}>{photo.likes}</span>
                    <Heart style={{marginTop: '3px'}} size={20}/>
                </div>
                <div className="d-flex align-items-center my-icon" style={{ gap: '10px' }}>
                    <Chat size={20} />
                    <span style={{fontWeight: '600'}}>{photo.comments}</span>
                </div>
            </Card.Footer>
            {showDesc && (
                <div
                    style={{
                        position: 'fixed',
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
                    {photo.description ? photo.description : photo.title}
                </div>
            )}
        </Card>
        <EditCardModal show={showEditModal} onHide={() => setShowEditModal(false)}/>
        </>
    );
};

export default observer(PhotoCard);