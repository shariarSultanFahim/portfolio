import dslogo from '../assets/ds.svg'
import reserveit from '../assets/reserveit 1.svg'
import planetx from '../assets/planetx 1.svg'

const Experience = () => {
    return (
        <section className="max-w-7xl mx-auto flex justify-between flex-col gap-2 lg:flex-row lg:gap-4">
            <div className="cardbg lg:w-1/3 flex flex-col gap-4 place-items-start">
                <div>
                    <img className='h-12 w-12' src={dslogo} alt="Defined Solution Logo" />
                </div>
                <div>
                    <h1 className='text-white text-opacity-80'>Co-Founder & Senior Software Engineer</h1>
                    <p className='text-icon'>Oct 2023 ~</p>
                </div>
            </div>
            <div className="cardbg lg:w-1/3 flex flex-col gap-4 place-items-start">
                <div>
                    <img className='h-12 w-12' src={reserveit} alt="reserveitLogo" />
                </div>
                <div>
                    <h1 className='text-white text-opacity-80'>Senior Software Engineer</h1>
                    <p className='text-icon'>Oct 2021 - Oct 2023</p>
                </div>
            </div>
            <div className="cardbg lg:w-1/3 flex flex-col gap-4 place-items-start">
                <div>
                    <img className='h-12 w-12' src={planetx} alt="planetx Logo" />
                </div>
                <div>
                    <h1 className='text-white text-opacity-80'>Junior Full Stack Engineer</h1>
                    <p className='text-icon'>Mar 2021 - Sep 2021</p>
                </div>
            </div>
        </section>
    );
};

export default Experience;