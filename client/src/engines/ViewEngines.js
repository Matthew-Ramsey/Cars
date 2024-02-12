import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ViewEngines() {
    const [engines, setEngines] = useState([]);

    useEffect(() => {
        const fetchEngines = async () => {
            try {
                const response = await axios.get('/api/engines');
                setEngines(response.data);
            } catch (error) {
                console.error('Error fetching engines:', error);
            }
        };

        fetchEngines();
    }, []);

    const handleDelete = async (id) => {
        try {
            const response = await axios.delete(`/api/engines/${id}`);
            if (response.status === 204) {
                setEngines((prevEngines) => prevEngines.filter((engine) => engine.id !== id));
            } else {
                console.error('Failed to delete engine:', response.status, response.statusText);
            }
        } catch (error) {
            console.error('Error during delete:', error.message);
        }
    };

    return (
        <div>
            <h1>View Engines</h1>
            {Array.isArray(engines) && engines.length > 0 ? (
                <ul>
                    {engines.map((engine) => (
                        <li key={engine.id}>
                            {`${engine.make} ${engine.model} (${engine.releaseYear})`}
                            <button onClick={() => { console.log(engine.id); handleDelete(engine.id); }}>Delete</button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No engines available.</p>
            )}
        </div>
    );
}

export default ViewEngines;

