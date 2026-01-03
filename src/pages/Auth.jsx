import React, {useContext, useState} from 'react';
import {Alert, Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import {login, registration} from "../api/userApi";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";

const Auth = () => {
    const [isRegister, setIsRegister] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [errors, setErrors] = useState(null);
    const {user} = useContext(Context)
    const navigate = useNavigate();

    const switchMode = () => {
        setIsRegister(!isRegister);
        setEmail('');
        setPassword('');
        setUsername('');
        setErrors(null);
    };

    const validateEmail = (email) => {
        return /^\S+@\S+\.\S+$/.test(email);
    };

    const validate = () => {
        const newErrors = {};
        if (!(username.trim().length > 4 && username.trim().length < 30) && isRegister) newErrors.name = "Username должен быть не менее 4 символов и не более 30";
        if (!(password.trim().length > 4 && password.trim().length < 30)) newErrors.password = "Пароль должен быть не менее 4 символов и не более 30";
        if (!email.trim()) newErrors.email = "Email обязателен";
        else if (!validateEmail(email)) newErrors.email = "Неправильный email";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

  const handleSubmit = e => {
      console.log(errors)

      if (validate()) {
        let response;
        if(isRegister) {
            response = registration({email, password, username})
        } else {
            response = login({email, password})
        }

        response.then((data) => {
            if('error' in data){
                console.log(data.error.message);
                setErrors({...errors, 'error': data.error})
            } else {
                user.setIsAuth(true)
                user.setUser(data)
                user.setIsStaff(data.is_staff)
                localStorage.setItem('token', data.token)
                navigate('/')
            }
        })

    }
  };
    return (
        <Container className="d-flex justify-content-center align-items-center auth-container">
            <Card className="auth-card">
                <h3 className="text-center mb-4">
                    {isRegister ? 'Регистрация' : 'Авторизация'}
                </h3>

                    <Form.Group  className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Email"
                            value={email}
                            isInvalid={errors?.email}
                            onChange={e => setEmail(e.target.value)}
                            className="mb-3"
                        />
                        <Form.Control.Feedback type="invalid">{errors?.email}</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Пароль</Form.Label>
                        <Form.Control
                                placeholder="Пароль"
                                value={password}
                                isInvalid={errors?.password}
                                onChange={e => setPassword(e.target.value)}
                                className="mb-3"
                            />
                            <Form.Control.Feedback type="invalid">{errors?.password}</Form.Control.Feedback>
                    </Form.Group>

                    {isRegister && (
                        <Form.Group className="mb-3">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                placeholder="Username"
                                value={username}
                                isInvalid={errors?.name}
                                onChange={e => setUsername(e.target.value)}
                                className="mb-3"
                            />
                            <Form.Control.Feedback type="invalid">{errors?.name}</Form.Control.Feedback>
                        </Form.Group>
                    )}

                    <Button
                        variant="primary"
                        onClick={handleSubmit}
                        className="w-100 mt-3"
                    >
                        {isRegister ? 'Зарегистрироваться' : 'Войти'}
                    </Button>

                <Row className="mt-3">
                    <Col className="text-center" style={{color: '#CFAD81'}} onClick={switchMode}>
                        {isRegister ? 'Уже есть аккаунт? ' : 'Нет аккаунта? '} <span onClick={switchMode} className="auth-link">
                        {isRegister ? 'Войти! ' : 'Зарегистрироваться! '}</span>
                    </Col>
                </Row>
                {errors?.error && (
                    <Alert
                        variant="danger"
                        onClose={() => setErrors(null)}
                        dismissible
                        className="error-alert"
                    >
                        {errors.error.message}
                    </Alert>
                )}
            </Card>
        </Container>
    );
};

export default observer(Auth);