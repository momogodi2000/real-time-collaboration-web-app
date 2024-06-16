import { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/router';

export default function Designer() {
    const { user } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!user || user.role !== 'designer') {
            router.push('/signin');
        }
    }, [user]);

    return user && user.role === 'designer' ? (
        <div>
            <h1>Designer Dashboard</h1>
            {/* Add designer-specific content here */}
        </div>
    ) : null;
}
