import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointment = ({ date }) => {
    // const [services, setServices] = useState([])
    const [treatment, setTreatment] = useState(null)
    const formattedDate = format(date, 'PP')
    /*  useEffect(() => {
         fetch(`https://dry-shore-58116.herokuapp.com/available?date=${formattedDate}`)
             .then(res => res.json())
             .then(data => setServices(data))
     }, [formattedDate]) */

    const { data: services, isLoading, refetch } = useQuery(['available', formattedDate], () => fetch(`https://dry-shore-58116.herokuapp.com/available?date=${formattedDate}`)
        .then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h4 className='text-secondary text-center text-2xl mb-7'>Available Appointments on {format(date, 'PP')}</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services?.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></Service>)
                }
            </div>
            <div>
                {
                    treatment && <BookingModal
                        date={date}
                        treatment={treatment}
                        setTreatment={setTreatment}
                        refetch={refetch}
                    ></BookingModal>
                }
            </div>
        </div>
    );
};

export default AvailableAppointment;