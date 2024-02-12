import React, { useState } from 'react';
import './App.css';

import ViewCars from './cars/ViewCars';
import CreateNewCar from './cars/CreateNewCar';
import CreateNewEngine from "./engines/CreateNewEngine";
import ViewEngines from "./engines/ViewEngines";

function App() {
    const [activePage, setActivePage] = useState(null);

    const showViewCars = () => {
        setActivePage('viewCars');
    };

    const showCreateNewCar = () => {
        setActivePage('createNewCar');
    };

    const showViewEngines = () => {
        setActivePage('viewEngines');
    };

    const showCreateNewEngine = () => {
        setActivePage('createNewEngine');
    };

    const showMainPage = () => {
        setActivePage(null);
    }

    return (
        <div className="app-container">
            {activePage === null && (
                <>
                    <h1>Car Management</h1>
                    <button onClick={showViewCars}>View Cars</button>
                    <button onClick={showCreateNewCar}>Create New Car</button>
                    <br />
                    <button onClick={showViewEngines}>View Engines</button>
                    <button onClick={showCreateNewEngine}>Create New Engine</button>
                </>
            )}

            {activePage !== null && (
                <button onClick={showMainPage}>Go back</button>
            )}

            {activePage === 'viewCars' && <ViewCars />}
            {activePage === 'createNewCar' && <CreateNewCar />}
            {activePage === 'viewEngines' && <ViewEngines />}
            {activePage === 'createNewEngine' && <CreateNewEngine />}
        </div>
    );
}

export default App;
