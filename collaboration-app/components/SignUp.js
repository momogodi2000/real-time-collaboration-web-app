import { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '../context/AuthContext';

export default function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [role, setRole] = useState('developer');
    const { register, error } = useAuth();

    const handleSignUp = async (e) => {
        e.preventDefault();
        await register(email, password, name, role);
    };

    return (
        <div className="auth-container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSignUp}>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
                <select value={role} onChange={(e) => setRole(e.target.value)}>
                    <option value="developer">Developer</option>
                    <option value="designer">Designer</option>
                    <option value="manager">Project Manager</option>
                </select>
                <button type="submit">Sign Up</button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>
            <p>Already have an account? <Link href="/signin">Sign In</Link></p>
        </div>
    );
}
