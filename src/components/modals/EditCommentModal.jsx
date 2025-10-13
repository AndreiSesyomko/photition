import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function EditCommentModal({ show, onHide, target }) {
    const [checked, setChecked] = useState(false);
    const [comment, setComment] = useState(null);
    const [errors, setErrors] = useState(null);
    const validate = () => {
        const newErrors = {};
        if (!comment) newErrors.name = "Комментарий не может быть пустым";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const validateDelete = () => {
        const newErrors = {};
        if (!(checked)) newErrors.terms = "Подтвердите удаление!";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const handleSubmit = () => {
        if(validate()) {

        }
    }

    const handleDelete = () => {
        if(validateDelete()) {

        }
    }
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
          <Modal.Title>Изменить комментарий</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
            <Form.Group className="mb-3">
                <Form.Control
                    placeholder="Новый текст"
                    value={comment}
                    isInvalid={errors?.name}
                    onChange={e => setComment(e.target.value)}
                    className="mb-3"
                />
                <Form.Control.Feedback type="invalid">{errors?.name}</Form.Control.Feedback>
            </Form.Group>
          <Button onClick={handleSubmit} variant="primary" className="w-100 mb-3">
            Изменить
          </Button>
          <Button onClick={handleDelete} variant="danger" type="button" className="w-100 mb-3">
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
                  isInvalid={errors?.terms}
                  feedback={errors?.terms}
                  feedbackType="invalid"
                  feedbackTooltip
              />
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default EditCommentModal;
