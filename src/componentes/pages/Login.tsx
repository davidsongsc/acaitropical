import React, { useState } from 'react';
import '../visual/loginEstilo.css';  // Make sure to create your own CSS file for styling
import { LuLogIn, LuUser, LuUser2, LuUserMinus } from 'react-icons/lu';

const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = () => {
        console.log('Logging in with:', username, password);
    };

    return (
        <div className="login-container">
            <div className='display-desfoco'>

            </div>
            <div className='login-usuario'>
                
                <form>
                <LuUser2 size={62} />
                <h2>Autenticação</h2>
                <LuUser size={12} />
                    <input
                        type="text"
                        id="username"
                        placeholder='Usuario'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <LuUserMinus size={12} />
                    <input
                        type="password"
                        id="password"
                        placeholder='Senha'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button type="button" onClick={handleLogin}>
                        Login <LuLogIn />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
