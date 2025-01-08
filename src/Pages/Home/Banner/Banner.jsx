import PropTypes from 'prop-types';
import pic1 from '../../../assets/images/banner/5.jpg'
import pic2 from '../../../assets/images/banner/2.jpg'
import pic3 from '../../../assets/images/banner/3.jpg'
import pic4 from '../../../assets/images/banner/4.jpg'
const Banner = props => {
    return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item  relative w-full">
                <img
                    src={pic1}
                    className="w-full rounded-xl" />
                <div className="absolute h-full rounded-xl content-center pl-20 bg-gradient-to-r from-[#151515] to-[rgba(21,22,21,0)] top-0 left-0">
                    <div className='text-white space-y-4 w-2/5'>
                        <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                        <p className='w-2/3'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-5'>
                            <button className="btn btn-primary bg-orange-600">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-4">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img
                    src={pic2}
                    className="w-full rounded-xl" />
                <div className="absolute h-full rounded-xl content-center pl-20 bg-gradient-to-r from-[#151515] to-[rgba(21,22,21,0)] top-0 left-0">
                    <div className='text-white space-y-4 w-2/5'>
                        <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                        <p className='w-2/3'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-5'>
                            <button className="btn btn-primary bg-orange-600">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-4">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img
                    src={pic3}
                    className="w-full rounded-xl" />
                <div className="absolute h-full rounded-xl content-center pl-20 bg-gradient-to-r from-[#151515] to-[rgba(21,22,21,0)] top-0 left-0">
                    <div className='text-white space-y-4 w-2/5'>
                        <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                        <p className='w-2/3'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-5'>
                            <button className="btn btn-primary bg-orange-600">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-4">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img
                    src={pic4}
                    className="w-full rounded-xl" />
                <div className="absolute h-full rounded-xl content-center pl-20 bg-gradient-to-r from-[#151515] to-[rgba(21,22,21,0)] top-0 left-0">
                    <div className='text-white space-y-4 w-2/5'>
                        <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                        <p className='w-2/3'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-5'>
                            <button className="btn btn-primary bg-orange-600">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-4">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

Banner.propTypes = {

};

export default Banner;