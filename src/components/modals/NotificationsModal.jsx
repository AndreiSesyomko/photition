import React, { useState } from 'react';
import { Modal, Button, Form, Image } from 'react-bootstrap';

const test = [
  {
    id: 1,
    title: 'Заголовок #1',
    statusText: 'Одобрена',
    imgSrc: null
  },
  {
    id: 2,
    title: 'Заголовок #1',
    statusText: 'Отклонена',
    imgSrc: null
  },
  {
    id: 3,
    title: 'Заголовок #1',
    statusText: '@User1 добавил комментарий(117)',
    imgSrc: null
  },
  {
    id: 4,
    title: 'Заголовок #1',
    statusText: '@User1 проголосовал(972)',
    imgSrc: null
  },
  {
    id: 5,
    title: 'Заголовок #1',
    statusText: 'Комментарий будет удален',
    imgSrc: null
  }
];

function NotificationsModal({ show, onHide, notifications=test }) {
  const [choosen, setChoosen] = useState(notifications.map(() => false));

  const handleCheck = (index, e=null) => {
    if(e) {
        setChoosen(prev =>
            prev.map((val, i) => i === index ? e.target.checked : val)
        );
    } else {
        setChoosen(prev =>
            prev.map((val, i) => i === index ? !val : val)
        );
    }
};

  return (
    <Modal show={show} onHide={onHide} centered dialogClassName="auto-width-modal">
      <Modal.Header closeButton>
        <Modal.Title>Уведомления</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          {notifications ? notifications.map(({ id, title, statusText, imgSrc }, index) => (
            <div
              key={id}
              onClick={() => handleCheck(index)}
              className="d-flex align-items-center justify-content-between mb-3 p-2"
              style={{ border: '1px solid #CFAD81', borderRadius: 8, gap: '8px' }}
            >
              <Form.Check checked={choosen[index]} onChange={e => handleCheck(e, index)} type="checkbox" className="flex-shrink-0" />
              {imgSrc ? (
                <Image src={imgSrc} alt="icon" rounded style={{ width: 30, height: 30 }} className="me-2" />
              ) : (
                <div style={{ width: 30, height: 30, backgroundColor: '#ccc', marginRight: 8 }} />
              )}
              <span style={{ flexGrow: 1, fontWeight: 500 }}>{title}</span>
              <span style={{ fontWeight: 700 }}>{statusText}</span>
            </div>
          )) : <h5>Здесь пока ничего нет</h5>}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={onHide}>Закрыть</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default NotificationsModal;
