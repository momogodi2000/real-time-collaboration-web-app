import { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/router';

export default function Manager() {
    const { user } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!user || user.role !== 'manager') {
            router.push('/signin');
        }
    }, [user]);

    return user && user.role === 'manager' ? (
        <div>
            <h1>Manager Dashboard</h1>
            {/* Add manager-specific content here */}
        </div>
    ) : null;
}
