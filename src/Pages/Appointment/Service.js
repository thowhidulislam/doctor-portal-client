import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            < div className="card-body text-center" >
                <h2 className="card-title text-secondary mx-auto" > {name}</h2 >
                <p>
                    {
                        slots.length
                            ? <span>{slots[0]}</span>
                            : <span className='text-red-500'>No Slot Available</span>
                    }
                </p>
                <p>{slots.length} {slots.length > 0 ? 'spaces' : 'space'} available</p>
                <div className="card-actions justify-center" >
                    {
                        slots.length === 0
                            ? <button disabled className="btn btn-sm btn-secondary bg-gray-300 text-white uppercase">Book Appointment</button>
                            : <label onClick={() => setTreatment(service)} htmlFor="booking-modal" className="btn btn-sm btn-secondary bg-gradient-to-r from-secondary to-primary text-white uppercase">Book Appointment</label>
                    }
                </div >
            </div >
        </div >
    );
};

export default Service;