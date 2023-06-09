import React from "react";
import { Form, Container, Card, Button, Row } from "react-bootstrap";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/constants";
import { useLocation, NavLink } from "react-router-dom";

const Auth = () => {
    const location = useLocation();
    console.log(location)
    const isLogin = location.pathname === LOGIN_ROUTE;
    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{ height: window.innerHeight - 54 }}
        >
            <Card style={{ width: 600 }} className="p-5">
                <h2 className="ml-auto">
                    {isLogin ? "Авторизация" : "Регистрация"}
                </h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите email"
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите пароль"
                    />
                    <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                        {isLogin ? (
                            <div>
                                Нет аккаунта? {" "}
                                <NavLink to={REGISTRATION_ROUTE}>
                                    Зарегистрируйтесь...
                                </NavLink>
                            </div>
                        ) : (
                            <div>
                                Есть аккаунт? {" "}
                                <NavLink to={LOGIN_ROUTE}>Войдите...</NavLink>
                            </div>
                        )}
                        <Button
                            className={"mt-3 align-self-end"}
                            variant={"outline-success"}
                        >
                            {isLogin ? "Войти" : "Зарегистрироваться"}
                        </Button>
                    </Row>
                </Form>
            </Card>
        </Container>
    );
};

export default Auth;
