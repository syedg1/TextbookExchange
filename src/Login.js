import React from 'react';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import { useStateValue } from './StateProvider.js';
import Col from 'react-bootstrap/Col';
import './Login.css';

function Login() {

    const history = useHistory();
    const { register, handleSubmit, errors, reset } = useForm();
    const [{ user }, dispatch] = useStateValue();
    const onSubmit = data => {
        console.log(data);
        dispatch({
            type: 'SET_USER',
            user: data.user
        });
        history.replace('/');
    }

    return (
        <div className='login'>
            <div className="login__card">
                <h5>Please log in using your Mac ID and password.</h5>
                {(errors.user || errors.password) && <p className='login__required'>MAC ID and Password required</p>}
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Row>
                    <Form.Group as={Col} md="12" controlId="loginUser">
                        <Form.Label className='login__label'>MAC ID</Form.Label>
                        <Form.Control
                        name='user'
                        ref={register({ required: true })}
                        type="text"
                        className='login__input'
                        placeholder='Enter your MAC ID'
                        />
                        <small>Often the same as the start of your email address.</small>
                     </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} md="12" controlId="loginPass">
                        <Form.Label className='login__label'>Password</Form.Label>
                        <Form.Control
                        name='password'
                        ref={register({ required: true })}
                        type="password"
                        className='login__input'
                        placeholder='Enter your password'
                        />
                     </Form.Group>
                </Form.Row>
                <button type='submit' class='login__button'>Submit</button>
            </Form>
            </div>
        </div>
    )
}

export default Login
