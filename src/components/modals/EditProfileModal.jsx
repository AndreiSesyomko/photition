import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function EditProfileModal({ show, onHide }) {
  const [username, setUsername] = useState('')
  const [checked, setChecked] = useState(false)
  const [img, setImg] = useState(null);
   const [errors, setErrors] = useState(null);

    const validate = () => {
        const newErrors = {};
        if (!(username.trim().length > 4 && username.trim().length < 30) && !img) newErrors.name = "Username должен быть не менее 4 символов и не более 30";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const validateExit = () => {
      const newErrors = {};
      if (!(checked)) newErrors.terms = "Подтвердите выход!";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const handleSubmit = () => {
        if(validate()) {

        }
    }

    const handleExit = () => {
        if(validateExit()) {

        }
    }

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Редактирование профиля</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        
          <div className="d-flex mb-3">
            <Form.Control
              type="file"
              id="avatar-upload"
              onChange={(e) => setImg(e.target.files[0]) }
              accept="image/*"
            />
          </div>
          <Form.Group className="mb-3">
              <Form.Label name='change-name'>Username</Form.Label>
              <Form.Control
                  placeholder="Username"
                  value={username}
                  id='change-name'
                  name='change-name'
                  isInvalid={errors?.name}
                  onChange={e => setUsername(e.target.value)}
                  className="mb-3"
              />
              <Form.Control.Feedback type="invalid">{errors?.name}</Form.Control.Feedback>
          </Form.Group>
          <Button variant="primary" className="w-100 mb-3">
            Сгенерировать новый токен
          </Button>
          <Button onClick={handleSubmit} variant="primary" className="w-100 mb-3">
            Изменить
          </Button>
          <Button onClick={handleExit} variant="danger" className="w-100 mb-3">
            Выйти
          </Button>
          <div className="d-flex justify-content-center align-items-center mb-2">
            <Form.Check
              type="checkbox"
              checked={checked}
              id="confirm-checkbox"
              label="Подтвердить выход"
              onChange={e => setChecked(e.target.checked)}
              className="mb-0"
              style={{fontWeight:500}}
              isInvalid={errors?.terms}
              feedback={errors?.terms}
              feedbackType="invalid"
              feedbackTooltip
            />
          </div>
        
      </Modal.Body>
    </Modal>
  );
}

export default EditProfileModal;