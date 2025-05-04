// src/components/LocationList.js
import React, { useEffect, useState } from 'react';

const fetchLocations = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/location');
    const data = await response.json();
    return data.results;
};

const LocationList = () => {
    const [locations, setLocations] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const getLocations = async () => {
            const locationsData = await fetchLocations();
            setLocations(locationsData);
        };
        getLocations();
    }, []);

    return (
        <div>
            <h2 onClick={() => setIsOpen(!isOpen)} style={{ cursor: 'pointer' }}>
                Локации {isOpen ? '-' : '+'}
            </h2>
            {isOpen && (
                <div>
                    {locations.map(location => (
                        <div key={location.id} className="location-card">
                            <h3>{location.name}</h3>
                            <p>Тип: {location.type}</p>
                            <p>Размер: {location.dimension}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LocationList;
