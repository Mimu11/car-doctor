import PropTypes from 'prop-types';
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'
const About = props => {
    return (
        <div className="hero bg-base-200 min-h-screen p-8">
            <div className="hero-content gap-0 flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img
                        src={person}
                        className="w-3/4 rounded-lg shadow-2xl" />
                    <img
                        src={parts}
                        className="w-2/5 rounded-lg absolute right-28 border-8 border-white -bottom-8 shadow-2xl" />
                </div>
                <div className='lg:w-1/2 space-y-6 p-4'>
                    <h3 className='text-3xl font-bold text-orange-500'>About Us</h3>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                    </p>
                    <p>
                        the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                    </p>
                    <button className="btn btn-primary bg-orange-600">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

About.propTypes = {

};

export default About;