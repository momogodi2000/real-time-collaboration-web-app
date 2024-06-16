import { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/router';

export default function Admin() {
    const { user } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!user || user.role !== 'admin') {
            router.push('/signin');
        }
    }, [user]);

    return user && user.role === 'admin' ? (
        <div>
            <h1>Admin Dashboard</h1>
            {/* Add admin-specific content here */}
        </div>
    ) : null;
}
