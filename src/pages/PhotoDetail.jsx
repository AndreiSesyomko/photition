import React from 'react';
import { Card, Image, Form, Button, InputGroup } from 'react-bootstrap';
import {Chat, Heart, Person} from 'react-bootstrap-icons';
import { ReactComponent as UserIcon } from '../assets/user.svg';
import Photo from "../components/Photo";

const Comment = ({
                     user,
                     date,
                     text,
                     edited = false,
                     isEditing = false,
                     replies = [],
                     parentUser,
                     onReply,
                 }) => {
    return (
        <div
            style={{
                border: "1px solid #d9c6b1",
                borderRadius: "10px",
                marginBottom: "12px",
                background: "#f8f1ea",
                padding: "12px",
                fontFamily: "Arial, sans-serif",
                color: "#7f6c5a",
            }}
        >
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                <div style={{ fontWeight: "bold", color: "#7f6c5a" }}>
                    {parentUser ? (
                        <>
                            <span>{user}</span> to <span>{parentUser}</span>
                        </>
                    ) : (
                        user
                    )}
                </div>
                <div style={{ fontSize: "12px", color: "#7f6c5a", fontWeight: "normal", display: "flex", alignItems: "center", gap: "4px" }}>
                    {isEditing && <span style={{ fontSize: "16px", lineHeight: 1 }}>✏️</span>}
                    {edited && !isEditing && <span style={{ fontSize: "12px", color: "#b29a80" }}>edited</span>}
                    <span>{date}</span>
                </div>
            </div>
            <div style={{ fontWeight: "bold", fontSize: "14px", marginBottom: "6px" }}>{text}</div>
            {!isEditing && (
                <div
                    style={{
                        fontSize: "13px",
                        fontWeight: "bold",
                        color: "#b29a80",
                        cursor: "pointer",
                        userSelect: "none",
                    }}
                    onClick={onReply}
                >
                    Ответить →
                </div>
            )}

            {replies.length > 0 && (
                <div
                    style={{
                        marginTop: "10px",
                        borderTop: "2px solid #d9c6b1",
                        paddingTop: "8px",
                        color: "#b29a80",
                        fontWeight: "bold",
                    }}
                >
                    Ответы
                    <div style={{ marginTop: "8px" }}>
                        {replies.map((reply, idx) => (
                            <Comment
                                key={idx}
                                {...reply}
                                parentUser={reply.parentUser || user}
                                onReply={reply.onReply || (() => {})}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

const photo = {
    user: {
        id: 1,
        username: 'user1',
        avatar: ''
    },
    publishedAt: "24.09.2025",
    photo: null,
    likes: 972,
    title: "Название",
    description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    commentsCount: 117,
    comments: [
        {
            user: {
                id: 1,
                username: 'user1',
                avatar: ''
            },
            date: "24.09.2025",
            text: "Текст комментария",
            replies: [
                {
                    username: "User1",
                    avatar: null,
                    date: "24.09.2025",
                    text: "Текст комментария",
                    replies: [],
                },
                {
                    username: "User2",
                    avatar: null,
                    date: "24.09.2025",
                    text: "Текст комментария",
                    replies: [],
                },
            ],
        },
    ],
};

const PhotoDetail = () => {
    return (
        <div className="main" style={{ height: 'initial', maxHeight: 'none' }}>

               <div className="detail">
                   <Card
                       className="photo-card" style={{height:'780px',}}
                   >
                       <Card.Header className="d-flex justify-content-between align-items-center"
                                    style={{padding: '8px 24px'}}>
                           <div className="d-flex align-items-center" style={{gap: '8px'}}>
                               <div style={{
                                   borderRadius: '50%',
                                   height: '59px',
                                   width: '59px',
                                   overflow: 'hidden',
                                   border: '1px solid #CFAD81',
                                   padding: '4px',
                                   transform: 'scale(0.8)'
                               }}>
                                   {photo.user.avatar ? <Image style={{height: '100%', width: '100%', borderRadius: '50%'}}
                                                               src={photo.user.avatar}/> : <Person className="card-avatar"/>}
                               </div>
                               <span style={{fontWeight: '700', color: '#CFAD81'}}>{photo.user.username}</span>
                           </div>
                           <h5 style={{marginRight: '20px'}}>{photo.title}</h5>
                           <span style={{fontWeight: '600'}}>{photo.publishedAt}</span>
                       </Card.Header>
                       {photo.photo ? <Photo photoUrl={photo.photo}/> :
                           <div style={{height: '100%', backgroundColor: '#ccc'}}></div>}
                       <Card.Footer className="d-flex justify-content-start align-items-center"
                                    style={{padding: '8px 12px', borderRadius: '0 0 15px 15px'}}>
                           <div className="d-flex align-items-center my-icon" style={{gap: '10px', marginRight: '24px'}}>
                               <span style={{fontWeight: '600'}}>{photo.likes}</span>
                               <Heart style={{marginTop: '3px'}} size={20}/>
                           </div>
                       </Card.Footer>
                   </Card>
               </div>
               <div className="detail">
                   <h3>Описание</h3>
                   <p>{photo.description ? photo.description : photo.title}</p>
               </div>
               <div className="detail">
                   <h3>Комментарии</h3>
                   <Comment
                       user="User"
                       date="24.09.2025"
                       text="Текст комментария"
                   />

                   <Comment
                       user="User"
                       date="24.09.2025"
                       text="Текст комментария"
                       edited={true}
                   />

                   <Comment
                       user="User"
                       date="24.09.2025"
                       text="Текст комментария"
                       replies={[
                           { user: "User1", text: "Текст комментария", date: "24.09.2025" },
                           { user: "User2", text: "Текст комментария", date: "24.09.2025" }
                       ]}
                   />

                   <Comment
                       user="User"
                       date="24.09.2025"
                       text="Текст комментария"
                       isEditing={true}
                   />
               </div>

        </div>
    );
};

export default PhotoDetail;
