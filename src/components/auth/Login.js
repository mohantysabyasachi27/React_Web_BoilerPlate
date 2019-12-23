import React, { useState } from 'react';
import { useAuthUser } from "./AuthUser";
import Card from '../ui/Card';
import Panel from '../ui/Panel';

// Fake login API Call
const apiLogin = (username, password) => {
    return new Promise((resolve, reject) => {
        if (username === '123' && password === '123') {
            resolve()
        } else {
            reject()
        }
    })
}

const Login = ({ history }) => {
    const { setLogged } = useAuthUser()
    const [errorMessage, setErrorMessage] = useState()

    function handleSubmit(e) {
        e.preventDefault()
        const [usernameNode, passwordNode] = e.target.elements

        apiLogin(usernameNode.value, passwordNode.value)
            .then(() => {
                console.log('log in successful!!')
                setLogged(true)
                history.push('/home')
            })
            .catch(() => {
                setLogged(false)
                setErrorMessage('Invalid')
            })
    }

    return (
        <Panel>
            <Card style={{ minHeight: '10em' }}>
                <h1 className="heading-2">Welcome to Zuri's circle</h1>
                <p>
                    This is the landing page of the application.
                </p>
                <p>
                    The username is <strong>123</strong> and the password is <strong>123</strong>
                </p>
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                <form className="spacing" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Username" required />
                    <input type="password" placeholder="Password" required />
                    <button type="submit" className="button">
                        Login
          </button>
                </form>
            </Card>
        </Panel>
    )
}

export default Login
