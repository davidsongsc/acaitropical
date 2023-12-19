import React, { useState } from 'react';
import '../visual/loginEstilo.css';  // Make sure to create your own CSS file for styling

const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = () => {
        console.log('Logging in with:', username, password);
    };

    return (
        <div className="login-container">
            <form>
                <input
                    type="text"
                    id="username"
                    placeholder='Usuario'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    id="password"
                    placeholder='Senha'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="button" onClick={handleLogin}>
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
