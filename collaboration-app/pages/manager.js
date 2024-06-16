import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../context/AuthContext';

export default function Manager() {
    const { user } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!user) {
            router.push('/signin');
        } else if (user.role !== 'manager') {
            router.push('/');
        }
    }, [user, router]);

    if (!user || user.role !== 'manager') {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Welcome, {user.name}</h1>
            <p>This is the manager page.</p>
        </div>
    );
}
