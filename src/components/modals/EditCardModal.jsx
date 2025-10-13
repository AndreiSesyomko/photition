import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function EditCardModal({ show, onHide }) {
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [checked, setChecked] = useState(false)
  const [img, setImg] = useState(null);
  const [errors, setErrors] = useState(null);

    const validate = () => {
        const newErrors = {};
        if (!(title.trim().length > 2 && title.trim().length < 26)) newErrors.name = "Название должно быть не менее 3 символов и не более 25";
        if (!(img)) newErrors.img = "Выберите файл";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const validateExit = () => {
      const newErrors = {};
      if (!(checked)) newErrors.terms = "Подтвердите выход!";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const handleExit = () => {
        if(validateExit()) {

        }
    }

  const handleSubmit = () => {
      if(validate()) {

      }
  }
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Изменить карточку</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
         <Form.Group className="mb-3">
            <Form.Control
              type="file"
              id="avatar-upload"
              onChange={(e) => setImg(e.target.files[0]) }
              accept="image/*"
              isInvalid={errors?.img}
            />
            <Form.Control.Feedback type="invalid">{errors?.img}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3">
              <Form.Label>Название</Form.Label>
              <Form.Control
                  placeholder="Название"
                  value={title}
                  isInvalid={errors?.name}
                  onChange={e => setTitle(e.target.value)}
                  className="mb-3"
              />
              <Form.Control.Feedback type="invalid">{errors?.name}</Form.Control.Feedback>
          </Form.Group>
          <Form.Control value={desc} onChange={e => setDesc(e.target.value)} placeholder="Новое описание" as="textarea" rows={3} className="mb-3" />
          <Button onClick={handleSubmit} variant="primary" className="w-100 mb-3">
            Изменить
          </Button>
          <Button onClick={handleExit} variant="danger" className="w-100 mb-3">
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
export default EditCardModal;