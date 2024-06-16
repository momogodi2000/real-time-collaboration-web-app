import { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/router';

export default function Developer() {
    const { user } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!user || user.role !== 'developer') {
            router.push('/signin');
        }
    }, [user]);

    return user && user.role === 'developer' ? (
        <div>
            <h1>Developer Dashboard</h1>
            {/* Add developer-specific content here */}
        </div>
    ) : null;
}
