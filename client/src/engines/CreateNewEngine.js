import React, { useState } from 'react';

function CreateNewEngine() {
    const [engineData, setEngineData] = useState({
        make: '',
        model: '',
        releaseYear: 0,
        fuelType: '',
        fuelCapacity: 0.0,
        horsePower: 0.0,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEngineData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/engines/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(engineData),
            });

            if (response.ok) {
                const createdEngine = await response.json();
                console.log('Engine created:', createdEngine);
            } else {
                console.error('Failed to create engine:', response.status, response.statusText);
            }
        } catch (error) {
            console.error('Error during fetch:', error.message);
        }
    };

    return (
        <div>
            <h1>Create New Engine</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Make:
                    <input type="text" name="make" value={engineData.make} onChange={handleInputChange} />
                </label>
                <label>
                    Model:
                    <input type="text" name="model" value={engineData.model} onChange={handleInputChange} />
                </label>
                <label>
                    Release Year:
                    <input type="number" name="releaseYear" value={engineData.releaseYear} onChange={handleInputChange} />
                </label>
                <label>
                    Fuel Type:
                    <input type="text" name="fuelType" value={engineData.fuelType} onChange={handleInputChange} />
                </label>
                <label>
                    Fuel Capacity:
                    <input type="number" name="fuelCapacity" value={engineData.fuelCapacity} onChange={handleInputChange} />
                </label>
                <label>
                    Horse Power:
                    <input type="number" name="horsePower" value={engineData.horsePower} onChange={handleInputChange} />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default CreateNewEngine;
