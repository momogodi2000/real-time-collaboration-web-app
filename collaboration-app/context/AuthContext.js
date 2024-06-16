import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const router = useRouter();

    const register = async (email, password, name, role) => {
        try {
            const res = await axios.post('http://localhost:8000/api/register', { email, password, name, role });
            setUser(res.data.user);
            setError(null);
            redirectUser(res.data.user.role);
        } catch (err) {
            setError(err.response.data.message || 'Registration failed');
        }
    };

    const login = async (email, password) => {
        try {
            const res = await axios.post('http://localhost:8000/api/login', { email, password });
            setUser(res.data.user);
            setError(null);
            redirectUser(res.data.user.role);
        } catch (err) {
            setError(err.response.data.message || 'Login failed');
        }
    };

    const logout = async () => {
        try {
            await axios.post('http://localhost:8000/api/logout', null, {
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            });
            setUser(null);
            localStorage.removeItem('user');
            router.push('/signin');
        } catch (err) {
            console.error('Logout failed:', err);
        }
    };

    const redirectUser = (role) => {
        if (role === 'developer') {
            router.push('/developer');
        } else if (role === 'designer') {
            router.push('/designer');
        } else if (role === 'manager') {
            router.push('/manager');
        } else if (role === 'admin') {
            router.push('/admin');
        } else {
            router.push('/');
        }
    };
    

    useEffect(() => {
        // Check if user is already authenticated on component mount
        const checkUser = async () => {
            try {
                const res = await axios.get('http://localhost:8000/api/user');
                setUser(res.data.user);
                redirectUser(res.data.user.role);
            } catch (err) {
                setUser(null);
            }
        };

        checkUser();
    }, []);

    return (
        <AuthContext.Provider value={{ user, register, login, logout, error }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
