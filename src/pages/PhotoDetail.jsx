import React from 'react';
import { Card, Image, Form, Button, InputGroup } from 'react-bootstrap';
import { Heart } from 'react-bootstrap-icons';
import { ReactComponent as UserIcon } from '../assets/user.svg';

const Comment = ({ username, avatar, date, text, replies }) => (
    <div style={{ border: '1px solid #f1ebe0', borderRadius: 8, padding: 8, marginBottom: 8 }}>
        <div className="d-flex justify-content-between" style={{ fontSize: 12, color: '#977559' }}>
            <div className="d-flex align-items-center" style={{ gap: '6px' }}>
                <div style={{ borderRadius: '50%', border: '1px solid #96794e', padding: '2px 6px' }}>
                    {avatar ? <Image src={avatar} roundedCircle width={18} height={18} /> : <UserIcon width={18} height={18} />}
                </div>
                <span>{username}</span>
            </div>
            <div>{date}</div>
        </div>
        <div style={{ fontSize: 14, color: '#654d3d', marginTop: 4 }}>{text}</div>
        {replies && replies.length > 0 && (
            <div style={{ marginTop: 8, marginLeft: 20, borderLeft: '1px solid #96794e', paddingLeft: 8 }}>
                {replies.map((rep, idx) => (
                    <Comment key={idx} {...rep} />
                ))}
            </div>
        )}
    </div>
);

const PhotoDetail = ({ photo }) => {
    return (
        <Card
            style={{ maxWidth: 400, borderRadius: 15, backgroundColor: '#f7f2e9', padding: 0, overflow: 'hidden' }}
            className="shadow-sm"
        >
            <Card.Header className="d-flex justify-content-between align-items-center" style={{ backgroundColor: '#f7f2e9', borderBottom: 'none', padding: '8px 16px' }}>
                <div className="d-flex align-items-center" style={{ gap: 6 }}>
                    <div style={{ borderRadius: '50%', border: '1px solid #96794e', padding: 4 }}>
                        {photo.user.avatar ? (
                            <Image src={photo.user.avatar} roundedCircle width={30} height={30} />
                        ) : (
                            <UserIcon width={30} height={30} />
                        )}
                    </div>
                    <span style={{ color: '#a68463', fontWeight: '600' }}>{photo.user.username}</span>
                </div>
                <span style={{ fontWeight: '600', color: '#cbb49a' }}>{photo.publishedAt}</span>
            </Card.Header>

            <div style={{ height: 180, backgroundColor: '#ccc' }}>
                {photo.photo ? (
                    <Image src={photo.photo} alt="photo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : (
                    <div style={{ height: '100%', backgroundColor: '#ccc' }} />
                )}
            </div>

            <Card.Body style={{ padding: '0 16px' }}>
                <div className="d-flex align-items-center" style={{ gap: 6, padding: '8px 0' }}>
                    <Heart size={20} color="#654d3d" />
                    <span style={{ fontWeight: '600' }}>{photo.likes}</span>
                </div>
                <div style={{ fontWeight: '600', color: '#b1936e', fontSize: 16, marginBottom: 4 }}>Описание</div>
                <p style={{ fontSize: 14, color: '#654d3d', marginBottom: 16 }}>
                    {photo.description}
                </p>

                <div style={{ fontWeight: '600', color: '#b1936e', fontSize: 16, marginBottom: 8 }}>Комментарии <span style={{ fontWeight: '400', color: '#96794e' }}>{photo.commentsCount}</span></div>

                <Form>
                    <InputGroup className="mb-3">
                        <Form.Control as="textarea" placeholder="Комментарий" rows={2} />
                        <Button variant="warning" style={{ backgroundColor: '#cbb49a', borderColor: '#cbb49a' }}>
                            Отправить &rarr;
                        </Button>
                    </InputGroup>
                </Form>

                {/* Комментарии список */}
                {photo.comments && photo.comments.map((cmt, idx) => (
                    <Comment key={idx} {...cmt} />
                ))}
            </Card.Body>
        </Card>
    );
};

export default PhotoDetail;
