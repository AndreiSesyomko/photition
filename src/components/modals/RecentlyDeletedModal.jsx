import { Modal, Button, Image } from 'react-bootstrap';
import {getDeletedPhotos, restorePhoto} from "../../api/cardApi";
import {useEffect, useState} from "react";

const deletedCards = [
  {
    id: 1,
    title: 'Заголовок #1',
    imgSrc: null
  },
  {
    id: 2,
    title: 'Заголовок #2',
    imgSrc: null
  },
  {
    id: 3,
    title: 'Заголовок #3',
    imgSrc: null
  }
];

function RecentlyDeletedModal({ show, onHide }) {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    getDeletedPhotos().then((photos) => {
      setPhotos(photos);
    })
  }, [show])

  const handleRestore = (id) => {
    restorePhoto(id).then(() => {
      setPhotos(photos.filter(photo => photo.id !== id));
    })
  }
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Недавно удаленное</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {deletedCards.map(card => (
          <div
            key={card.id}
            className="d-flex align-items-center mb-2"
            style={{
              border: '1px solid #CFAD81',
              borderRadius: 6,
              width: '100%',
              padding: '6px 12px',
              justifyContent: 'space-between'
            }}
          >
            <div className="d-flex align-items-center" style={{ gap: '8px' }}>
              {card.imgSrc ? (
                <Image
                  src={card.imgSrc}
                  alt=""
                  style={{ width: 32, height: 32, borderRadius: 4, objectFit: 'cover' }}
                />
              ) : (
                <div style={{ width: 32, height: 32, borderRadius: 4, background: '#ccc' }} />
              )}
              <span style={{ fontWeight: 500 }}>{card.title}</span>
            </div>
            <Button variant="primary" onClick={() => handleRestore(card.id)}>Восстановить</Button>
          </div>
        ))}
      </Modal.Body>
    </Modal>
  );
}

export default RecentlyDeletedModal;
