import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useState } from 'react';
import ServiceCard from './ServiceCard';
const Services = props => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div>
            <div className='text-center my-6 space-y-3'>
                <h3 className='text-xl font-semiboldbold text-orange-600'>Service</h3>
                <h2 className='text-5xl font-semibold'>Our Service Area</h2>
                <p className='w-3/5 mx-auto'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

Services.propTypes = {

};

export default Services;