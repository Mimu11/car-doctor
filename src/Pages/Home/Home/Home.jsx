import PropTypes from 'prop-types';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Services from '../Services/Services';
const Home = props => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
        </div>
    );
};

Home.propTypes = {

};

export default Home;