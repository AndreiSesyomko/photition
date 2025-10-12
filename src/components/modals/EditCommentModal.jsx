import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function EditCommentModal({ show, onHide, target }) {
    const [checked, setChecked] = useState(false);
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title style={{textAlign: 'center'}}>Изменить комментарий</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control placeholder="Новый текст" className="mb-3" />
          <Button variant="primary" className="w-100 mb-3">
            Изменить
          </Button>
          <Button variant="danger" type="button" className="w-100 mb-3">
            Удалить
          </Button>
          <div className="d-flex justify-content-center align-items-center mb-2">
            <Form.Check
              type="checkbox"
              checked={checked}
              id="confirm-checkbox"
              label="Подтвердить удаление"
              onChange={e => setChecked(e.target.checked)}
              className="mb-0"
              style={{fontWeight:500}}
            />
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default EditCommentModal;
