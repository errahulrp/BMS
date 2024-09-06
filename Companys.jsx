import React from 'react';
import American from '../assets/company/American.jpg';
import Better from '../assets/company/Better.jpg';
import British from '../assets/company/British.jpg';
import First from '../assets/company/first.jpg';
import National from '../assets/company/National.jpg';
import Singapore from '../assets/company/Singapore.jpg';
import Thomson from '../assets/company/Thomson.jpg';

const Companys = () => {
    const logos = [
        American,
        British,
        Better,
        First,
        National,
        Singapore,
        Thomson
    ];

    const duplicatedLogos = [...logos, ...logos];

    return (
        <div className="w-full py-6 bg-gray-100">
            <div className="text-center font-Asul text-3xl mb-6">Our Awesome Clients</div>
            
            <div className="w-full overflow-hidden py-6 bg-white">
                <div className="flex items-center animate-slide">
                    {duplicatedLogos.map((logo, index) => (
                        <div key={index} className="flex-shrink-0 mx-20">
                            <img
                                src={logo}
                                alt={`Company Logo ${index + 1}`}
                                className="h-36 object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Companys;
