import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ViewCars() {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        const fetchCars = async () => {
            try {
                const response = await axios.get('/api/cars');
                setCars(response.data);
            } catch (error) {
                console.error('Error fetching cars:', error);
            }
        };

        fetchCars();
    }, []);

    const handleDelete = async (id) => {
        try {
            const response = await axios.delete(`/api/cars/${id}`);
            if (response.status === 204) {
                setCars((prevCars) => prevCars.filter((car) => car.id !== id));
            } else {
                console.error('Failed to delete car:', response.status, response.statusText);
            }
        } catch (error) {
            console.error('Error during delete:', error.message);
        }
    };

    return (
        <div>
            <h1>View Cars</h1>
            {Array.isArray(cars) && cars.length > 0 ? (
                <ul>
                    {cars.map((car) => (
                        <li key={car.id}>
                            {`${car.make} ${car.model} - ${car.colour}`}
                            <button onClick={() => { console.log(car.id); handleDelete(car.id); }}>Delete</button>
                        </li>
                    ))}

                </ul>
            ) : (
                <p>No cars available.</p>
            )}
        </div>
    );
}

export default ViewCars;

