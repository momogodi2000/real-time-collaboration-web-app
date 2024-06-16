import { useState } from 'react';

export default function AISuggestions() {
    const [codeSnippet, setCodeSnippet] = useState('');
    const [suggestions, setSuggestions] = useState('');

    const getSuggestions = async () => {
        const response = await fetch('/api/ai/suggestions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({ codeSnippet }),
        });

        const data = await response.json();
        setSuggestions(data.suggestions);
    };

    return (
        <div>
            <h2>AI-Powered Suggestions</h2>
            <textarea
                value={codeSnippet}
                onChange={(e) => setCodeSnippet(e.target.value)}
                placeholder="Paste your code snippet here..."
            />
            <button onClick={getSuggestions}>Get Suggestions</button>
            {suggestions && <pre>{suggestions}</pre>}
        </div>
    );
}
