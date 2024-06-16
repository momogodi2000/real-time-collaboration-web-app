import { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '../context/AuthContext';

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login, error } = useAuth();

    const handleSignIn = async (e) => {
        e.preventDefault();
        await login(email, password);
    };

    return (
        <div className="auth-container">
            <h2>Sign In</h2>
            <form onSubmit={handleSignIn}>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">Sign In</button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>
            <p>Don't have an account? <Link href="/signup">Sign Up</Link></p>
        </div>
    );
}
