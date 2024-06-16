import { useState, useContext } from 'react';
import Link from 'next/link';
import AuthContext from '../context/AuthContext';

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login, error } = useContext(AuthContext);

    const handleSignIn = async (e) => {
        e.preventDefault();
        login(email, password);
    };

    return (
        <div>
            <h2>Sign In</h2>
            <form onSubmit={handleSignIn}>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">Sign In</button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>
            <Link href="/signup">Don't have an account? Sign Up</Link>
        </div>
    );
}
