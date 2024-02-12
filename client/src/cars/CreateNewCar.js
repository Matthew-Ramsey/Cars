import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CreateNewCar() {
    const [engines, setEngines] = useState([]);
    const [carInfo, setCarInfo] = useState({
        make: '',
        model: '',
        preOwned: false,
        engine: null,
        doorCount: 0,
        colour: ''
    });

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

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCarInfo((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleEngineSelect = (selectedEngine) => {
        setCarInfo((prevData) => ({
            ...prevData,
            engine: JSON.parse(selectedEngine),
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/cars/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(carInfo),
            });

            if (response.ok) {
                const createdCar = await response.json();
                console.log('Car created:', createdCar);
            } else {
                console.error('Failed to create car:', response.status, response.statusText);
            }
        } catch (error) {
            console.error('Error during fetch:', error.message);
        }
    };

    return (
        <div>
            <h1>Create New Car</h1>
            <form onSubmit={handleSubmit}>
                {/* Make */}
                <label>
                    Make:
                    <input type="text" name="make" value={carInfo.make} onChange={handleInputChange} />
                </label>

                {/* Model */}
                <label>
                    Model:
                    <input type="text" name="model" value={carInfo.model} onChange={handleInputChange} />
                </label>

                {/* Pre-Owned Checkbox */}
                <label>
                    Pre-Owned:
                    <input type="checkbox" name="preOwned" checked={carInfo.preOwned} onChange={handleInputChange} />
                </label>

                {/* Door Count */}
                <label>
                    Door Count:
                    <input type="number" name="doorCount" value={carInfo.doorCount} onChange={handleInputChange} />
                </label>

                {/* Colour */}
                <label>
                    Colour:
                    <input type="text" name="colour" value={carInfo.colour} onChange={handleInputChange} />
                </label>

                {/* Engine Selection */}
                <label>
                    Engine:
                    <select name="engine" onChange={(e) => handleEngineSelect(e.target.value)}>
                        <option value="" disabled selected>
                            Select Engine
                        </option>
                        {engines.map((engine) => (
                            <option key={engine.id} value={JSON.stringify(engine)}>
                                {`${engine.make} ${engine.model} (${engine.releaseYear})`}
                            </option>
                        ))}
                    </select>
                </label>

                {/* Submit Button */}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default CreateNewCar;
