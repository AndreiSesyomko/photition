import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function UserInfoModal({ show, onHide, user }) {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Информация о пользователе</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="text-start">
          <p><strong style={{ color: '#F0AF6B' }}>Имя:</strong> {user.username}</p>
          <p><strong style={{ color: '#F0AF6B' }}>Email:</strong> {user.email}</p>
          <p><strong style={{ color: '#F0AF6B' }}>Дата регистрации:</strong> {user.registerAt}</p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={onHide}>Закрыть</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default UserInfoModal;
