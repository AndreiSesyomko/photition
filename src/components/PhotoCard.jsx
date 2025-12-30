import React, {useContext, useState} from 'react';
import {Card, Image} from "react-bootstrap";
import {Heart, Chat, Person, PencilFill} from 'react-bootstrap-icons';
import Photo from "./Photo";
import {useNavigate} from "react-router-dom";
import { Context } from '..';
import { observer } from 'mobx-react-lite';
import EditCardModal from './modals/EditCardModal';
import {vote} from "../api/cardApi";

const PhotoCard = ({photo}) => {
    const [showDesc, setShowDesc] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false)
    const [isLiked, setIsLiked] = useState(false);
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
    const [color, setColor] = useState('#000');
    const {user} = useContext(Context)
    const navigate = useNavigate();
    const handleMouseMove = (e) => {
        setCursorPos({
            x: e.clientX,
            y: e.clientY
        });
    };
    const handleLike = () => {
        if(!isLiked){
            vote(user.user.id, photo.id).then(data => {
                if(data) console.log(data)
                photo.likes += 1
                setIsLiked(true)
            })
        } else {
            vote(user.user.id, photo.id, true).then(data => {
                if(data) console.log(data)
                photo.likes -= 1
                setIsLiked(false)
            })
        }
    }
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
                    <div className="user-avatar-wrapper">
                        {photo.user.avatar ? <Image className="user-avatar-image" src={photo.user.avatar} /> : <Person className="card-avatar" />}
                    </div>
                    <span style={{ fontWeight: '700', color: '#CFAD81' }}>{photo.user.username}</span>
                </div>
                <h5 style={{marginRight: '20px'}}>{photo.title}{user.user.id === photo.user.id &&
                    <PencilFill onClick={() => setShowEditModal(true)} className="pencil-icon"/>}</h5>
                <span style={{ fontWeight: '600' }}>{photo.publishedAt}</span>
            </Card.Header>
            {photo.photo ? <Photo onClick={() => navigate('/photo/' + photo.id)} photoUrl={photo.photo} />:
                <div onClick={() => navigate('/photo/' + photo.id)}
                     style={{height: '100%', backgroundColor: '#ccc'}}></div>}
            <Card.Footer className="d-flex justify-content-center align-items-center"
                         style={{ padding: '8px 12px', borderRadius: '0 0 15px 15px' }}>
                <div onMouseEnter={() => setColor('#c6a174')}
                     onMouseLeave={() => !isLiked && setColor('#000')}
                     onClick={handleLike}
                     className="d-flex align-items-center my-icon"
                     style={{gap: '10px', marginRight: '24px', color: color}}>
                    <span style={{fontWeight: '600'}}>{photo.likes}</span>
                    <Heart style={{marginTop: '3px'}} size={20}/>
                </div>
                <div onClick={() => navigate('/photo/' + photo.id)}
                     className="d-flex align-items-center my-icon" style={{ gap: '10px' }}>
                    <Chat size={20} />
                    <span style={{fontWeight: '600'}}>{photo.comments}</span>
                </div>
            </Card.Footer>
            {showDesc && (
                <div style={{left: cursorPos.x + 10, top: cursorPos.y + 10,}} className="description-tip">
                    {photo.description ?
                        photo.description.length > 80 ?
                            photo.description.slice(0, 80) + '...' :
                            photo.description :
                        photo.title}
                </div>
            )}
        </Card>
        <EditCardModal show={showEditModal} onHide={() => setShowEditModal(false)}/>
        </>
    );
};

export default observer(PhotoCard);