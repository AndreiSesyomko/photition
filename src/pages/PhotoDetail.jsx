import React, { useState } from 'react';
import { Card, Image, Form, Button, InputGroup } from 'react-bootstrap';
import {Heart, Chat, Person, ArrowRight, Arrow90degRight} from 'react-bootstrap-icons';
import Photo from "../components/Photo";
import Comment from '../components/Comment.jsx'
import EditCommentModal from '../components/modals/EditCommentModal.jsx';


const test = {
                id: 1,
                title: 'Дженифер Коннели',
                description: 'Дженифер Коннели',
                photo: '../test_photos/dzhennifer-konnelli.jpg',
                user: {
                    id: 1,
                    username: 'user1',
                    avatar: ''
                },
                likes: 256,
                commentsCount: 3,
                comments: [
                    {
                        id: 1,
                        comment: "she's best!",
                        user: {
                            id: 1,
                            username: 'user1',
                            avatar: ''
                        },
                        publishedAt: '2025-10-08',
                        editedAt: null,
                        reply_to: null,
                        sub_of: null,
                        replies: []
                    },
                    {
                        id: 2,
                        comment: "she's best actress!",
                        user: {
                            id: 2,
                            username: 'user1',
                            avatar: ''
                        },
                        publishedAt: '2025-10-08',
                        editedAt: '2025-10-11',
                        reply_to: null,
                        sub_of: null,
                        replies: []
                    },
                    {
                        id: 3,
                        comment: "she's best actress!",
                        user: {
                            id: 3,
                            username: 'user1',
                            avatar: ''
                        },
                        publishedAt: '2025-10-08',
                        editedAt: null,
                        reply_to: null,
                        sub_of: null,
                        replies: [
                            {
                        id: 4,
                        comment: "and she's beautiful!",
                        user: {
                            id: 4,
                            username: 'user2',
                            avatar: ''
                        },
                        publishedAt: '2025-10-08',
                        editedAt: null,
                        reply_to: {
                        id: 3,
                        comment: "she's best!",
                        user: {
                            id: 3,
                            username: 'user1',
                            avatar: ''
                        },
                        publishedAt: '2025-10-08',
                        editedAt: null,
                        
                    },
                        sub_of: 3,
                        replies: []
                    },
                    {
                        id: 5,
                        comment: "you're goddamn right!",
                        user: {
                            id: 5,
                            username: 'user3',
                            avatar: ''
                        },
                        publishedAt: '2025-10-08',
                        editedAt: null,
                        reply_to: {
                        id: 4,
                        comment: "she's best!",
                        user: {
                            id: 4,
                            username: 'user2',
                            avatar: ''
                        },
                        publishedAt: '2025-10-08',
                        editedAt: null,
                        
                    },
                        sub_of: 3,
                        replies: []
                    },
                        ]
                    },
                    
                    {
                        id: 6,
                        comment: "she's best actress!",
                        user: {
                            id: 6,
                            username: 'user',
                            avatar: ''
                        },
                        publishedAt: '2025-10-08',
                        editedAt: null,
                        reply_to: null,
                        sub_of: null,
                        replies: []
                    },
                ],
                publishedAt: '2025-10-08'
            }

const PhotoDetail = ({ photo=test }) => {
    const [replyInput, setReplyInput] = useState(null);
    const [showEditModal, setShowEditModal] = useState(false);
    const [editableComment, setEditableComment] = useState(null);
    return (
        <>
        <div className='main' style={{height: 'auto'}}>
            <Card
                    className="photo-card"
                >
                    <Card.Header className="d-flex justify-content-between align-items-center" style={{ padding: '8px 24px' }}>
                        <div className="d-flex align-items-center" style={{ gap: '8px' }}>
                            <div style={{ borderRadius: '50%', height: '59px', width: '59px', overflow: 'hidden', border: '1px solid #CFAD81', padding: '4px', transform: 'scale(0.8)' }}>
                                {photo.user.avatar ? <Image style={{height: '100%', width: '100%', borderRadius: '50%'}} src={photo.user.avatar} /> : <Person className="card-avatar" />}
                            </div>
                            <span style={{ fontWeight: '700', color: '#CFAD81' }}>{photo.user.username}</span>
                        </div>
                        <h5 style={{marginRight: '20px'}}>{photo.title}</h5>
                        <span style={{ fontWeight: '600' }}>{photo.publishedAt}</span>
                    </Card.Header>
                    {photo.photo ? <Photo photoUrl={photo.photo} />:
                        <div style={{height: '100%', backgroundColor: '#ccc'}}></div>}
                    <Card.Footer className="d-flex justify-content-start align-items-center" style={{ padding: '8px 12px', borderRadius: '0 0 15px 15px' }}>
                        <div className="d-flex align-items-center my-icon" style={{gap: '10px', marginRight: '24px'}}>
                            <span style={{fontWeight: '600'}}>{photo.likes}</span>
                            <Heart style={{marginTop: '3px'}} size={20}/>
                        </div>
                    </Card.Footer>
                </Card>
                <div className='detail'>
                    <h5>Описание</h5>
                    <p>{photo.description ? photo.description : photo.title}</p>
                </div>
                {[photo.commentsCount &&
                    <div className='detail'>
                        <h5>Комментарии {photo.commentsCount}</h5>
                        <InputGroup className="mb-3 mt-3">
                            <Form.Control
                            placeholder="Комментарий"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            />
                            <Button variant="primary" id="button-addon2">
                                Отправить <ArrowRight/>
                            </Button>
                        </InputGroup>
                        {photo.comments.map(comment => <Comment 
                            key={comment.id} 
                            comment={comment} 
                            replyInput={replyInput} 
                            setReplyInput={setReplyInput} 
                            setEdit={setEditableComment} 
                            setShowModal={setShowEditModal}/>)}
                    </div>
                ]}
        </div>
        <EditCommentModal show={showEditModal} onHide={() => setShowEditModal(false)} target={editableComment}/>
        </>
    );
};

export default PhotoDetail;
