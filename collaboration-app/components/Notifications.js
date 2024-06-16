import { useEffect, useState } from 'react';

export default function Notifications() {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        const fetchNotifications = async () => {
            const response = await fetch('/api/notifications', {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            const data = await response.json();
            setNotifications(data);
        };
        fetchNotifications();
    }, []);

    const markAsRead = async (id) => {
        await fetch(`/api/notifications/${id}`, {
            method: 'PATCH',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        setNotifications(notifications.filter(notif => notif.id !== id));
    };

    return (
        <div>
            <h2>Notifications</h2>
            <ul>
                {notifications.map(notif => (
                    <li key={notif.id}>
                        {notif.message}
                        <button onClick={() => markAsRead(notif.id)}>Mark as read</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
