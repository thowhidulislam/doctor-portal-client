import React from 'react';

const InfoCard = ({ img, cardTitle, bgColor }) => {
    return (
        <div className={`card lg:card-side bg-base-100 shadow-xl bg-accent ${bgColor}`}>
            <figure className='pl-5'>
                <img src={img} alt="" />

            </figure>
            <div className="card-body text-white">
                <h2 className="card-title">{cardTitle}</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
            </div>
        </div>
    );
};

export default InfoCard;