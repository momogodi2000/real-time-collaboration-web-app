import { useEffect, useState } from 'react';
import { getRepositories } from '../services/github';

export default function Repositories() {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        const fetchRepos = async () => {
            const data = await getRepositories();
            setRepos(data);
        };
        fetchRepos();
    }, []);

    return (
        <div>
            <h2>Repositories</h2>
            <ul>
                {repos.map((repo) => (
                    <li key={repo.id}>{repo.name}</li>
                ))}
            </ul>
        </div>
    );
}
