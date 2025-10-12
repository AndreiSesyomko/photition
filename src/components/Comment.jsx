import React, { useContext, useState } from "react";
import { Card, Image, Form, Button, InputGroup } from 'react-bootstrap';
import {Heart, Chat, Person, ArrowRight, Arrow90degRight, PencilFill} from 'react-bootstrap-icons';
import Photo from "../components/Photo";
import { observer } from "mobx-react-lite";
import {Context} from '../index'

const Comment = ({ comment, replyInput, setReplyInput, setShowModal, setEdit }) => {
    const {user} = useContext(Context);
    const handleReply = () => {
        if(replyInput == comment.id) setReplyInput(null)
        else setReplyInput(comment.id)
    }

    const handleEdit = () => {
        setShowModal(true)
        setEdit(comment.id)
    }

    return(
    <Card className="comment">
                    <Card.Header className="d-flex justify-content-between align-items-center" style={{ padding: '8px 24px' }}>
                        <div className="d-flex align-items-center" style={{ gap: '8px' }}>
                            <div style={{ borderRadius: '50%', height: '59px', width: '59px', overflow: 'hidden', border: '1px solid #CFAD81', padding: '4px', transform: 'scale(0.8)' }}>
                                {comment.user.avatar ? <Image style={{height: '100%', width: '100%', borderRadius: '50%'}} src={comment.user.avatar} /> : <Person className="card-avatar" />}
                            </div>
                            <span style={{ fontWeight: '700', color: '#CFAD81' }}>{comment.user.username}</span>
                            {comment.reply_to && <span className="comment-replyto"> to @{comment.reply_to.user.username}</span>}
                        </div>
                        <span style={{ fontWeight: '600' }}>{user.user.id === comment.user.id && <PencilFill onClick={handleEdit} className="pencil-icon"/>}{comment.editedAt && <small>edited</small>} {comment.publishedAt}</span>
                    </Card.Header>
                    <Card.Body>
                        <div className="comment-text">
                            {comment.comment}
                        </div>
                        {user.user.id !== comment.user.id && <div onClick={handleReply} className="comment-answer">Ответить <Arrow90degRight style={{marginLeft: '5px'}}/></div>}
                        {replyInput == comment.id && <InputGroup className="mb-3 mt-3">
                                                    <Form.Control
                                                    placeholder="Комментарий"
                                                    aria-label="Recipient's username"
                                                    aria-describedby="basic-addon2"
                                                    />
                                                    <Button variant="primary" id="button-addon2">
                                                        Отправить <ArrowRight/>
                                                    </Button>
                                                </InputGroup>}
                    </Card.Body>
                    {comment.replies.length ? <Card.Footer>
                        <div className="comment-replies">
                            <h5>Ответы</h5>
                            {comment.replies.map(reply => <Comment key={reply.id} comment={reply} replyInput={replyInput} setReplyInput={setReplyInput}/>)}    
                        </div>
                    </Card.Footer> : null}
                </Card>

)};

export default observer(Comment);