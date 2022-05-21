import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L1nntExcvpjzmWW9NOGVtu2LNA5qHieqOgbOqTopVjflcJX58ooYEaXsvgr7slz4IMUVEDMT5g9Hv3gGJEeQ5qb00S9nRnciK');

const Payment = () => {
    const { id } = useParams()
    const url = `http://localhost:5000/booking/${id}`
    const { data: appointment, isLoading } = useQuery(['booking', id], () => fetch(url, {
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className="text-2xl text-purple-500">Pay for: {id}</h2>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <p className='text-success font-bold'> Hello,{appointment.patientName}</p>
                    <h2 class="card-title">Please Pay for {appointment.treatment}</h2>
                    <p>Your appointment: <span className='text-orange-700'>{appointment.date}</span></p>
                    <p>Please Pay: ${appointment.price}</p>
                </div>
            </div>
            <div class="card w-96 bg-base-100 shadow-xl mt-7">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm appointment={appointment} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;