import { useEffect, useState } from 'react';

export default function Analytics({ projectId }) {
    const [analytics, setAnalytics] = useState({ totalTasks: 0, completedTasks: 0, pendingTasks: 0 });

    useEffect(() => {
        const fetchAnalytics = async () => {
            const response = await fetch(`/api/analytics/project/${projectId}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            const data = await response.json();
            setAnalytics(data);
        };
        fetchAnalytics();
    }, [projectId]);

    return (
        <div>
            <h2>Project Analytics</h2>
            <p>Total Tasks: {analytics.totalTasks}</p>
            <p>Completed Tasks: {analytics.completedTasks}</p>
            <p>Pending Tasks: {analytics.pendingTasks}</p>
        </div>
    );
}
