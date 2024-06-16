import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../context/AuthContext';

export default function Developer() {
    const { user } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!user) {
            router.push('/signin');
        } else if (user.role !== 'developer') {
            router.push('/');
        }
    }, [user, router]);

    if (!user || user.role !== 'developer') {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Welcome, {user.name}</h1>
            <p>This is the developer page.</p>
        </div>
    );
}
