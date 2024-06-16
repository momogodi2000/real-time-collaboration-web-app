import { createContext, useContext, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const router = useRouter();

    const signin = async (email, password) => {
        try {
            const response = await axios.post('http://localhost:8000/api/login', { email, password });
            setUser(response.data.user);
            setError(null);

            // Redirect based on role
            if (response.data.user.role === 'developer') {
                router.push('/developer');
            } else if (response.data.user.role === 'designer') {
                router.push('/designer');
            } else if (response.data.user.role === 'manager') {
                router.push('/manager');
            } else if (response.data.user.role === 'admin') {
                router.push('/admin');
            }
        } catch (err) {
            setError(err.response.data.message || 'Login failed');
        }
    };

    const signup = async (name, role, email, password) => {
        try {
            const response = await axios.post('http://localhost:8000/api/register', {
                name, role, email, password
            });
            setUser(response.data.user);
            setError(null);

            // Redirect based on role
            if (response.data.user.role === 'developer') {
                router.push('/developer');
            } else if (response.data.user.role === 'designer') {
                router.push('/designer');
            } else if (response.data.user.role === 'manager') {
                router.push('/manager');
            } else if (response.data.user.role === 'admin') {
                router.push('/admin');
            }
        } catch (err) {
            setError(err.response.data.message || 'Registration failed');
        }
    };

    const signout = async () => {
        try {
            await axios.post('http://localhost:8000/api/logout');
            setUser(null);
            router.push('/signin');
        } catch (err) {
            setError('Logout failed');
        }
    };

    return (
        <AuthContext.Provider value={{ user, error, signin, signup, signout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
