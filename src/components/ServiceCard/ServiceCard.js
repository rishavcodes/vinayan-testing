// ServiceCard.js
import React from 'react';

const ServiceCard = ({ title, description, onClick, isSelected }) => {
    return (
        <div
            className={`border ${isSelected ? 'bg-blue-800 text-white' : 'bg-white text-blue-800'} w-80 sm:w-96 p-4 h-24  rounded-lg shadow-md shadow-blue-300 cursor-pointer text-center`}
            onClick={onClick}
        >
            <h3 className="text-2xl font-bold">{title}</h3>
            <p className="text-sm">{description}</p>
        </div>
    );
};

export default ServiceCard;
