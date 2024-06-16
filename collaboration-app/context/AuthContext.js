import React, { createContext, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const router = useRouter();

    const register = async (email, password, name, role) => {
        try {
            const response = await axios.post('http://localhost:8000/api/register', { email, password, name, role });
            setUser(response.data.user);
            router.push('/signin');
        } catch (err) {
            if (err.response && err.response.data) {
                setError(err.response.data.message || 'Registration failed');
            } else {
                setError('An unexpected error occurred during registration');
            }
            console.error('Error during registration:', err);
        }
    };

    const login = async (email, password) => {
        try {
            const response = await axios.post('http://localhost:8000/api/login', { email, password });
            setUser(response.data.user);
            const role = response.data.user.role;
            if (role === 'developer') {
                router.push('/developer');
            } else if (role === 'designer') {
                router.push('/designer');
            } else if (role === 'manager') {
                router.push('/manager');
            }
        } catch (err) {
            if (err.response && err.response.data) {
                setError(err.response.data.message || 'Login failed');
            } else {
                setError('An unexpected error occurred during login');
            }
            console.error('Error during login:', err);
        }
    };

    const logout = async () => {
        try {
            await axios.post('http://localhost:8000/api/logout');
            setUser(null);
            router.push('/signin');
        } catch (err) {
            console.error('Error during logout:', err);
        }
    };

    return (
        <AuthContext.Provider value={{ user, error, register, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
