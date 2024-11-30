import pinemesh from '../assets/Pinemesh-12-01-2024_01_25_AM.png'
import onlytech from '../assets/Home-OnlyTech-12-01-2024_01_24_AM.png'
import tourify from '../assets/Home-Tourify-12-01-2024_01_22_AM.png'
import tidder from '../assets/Tidder-Blogs-12-01-2024_01_22_AM.png'
import quintessential from '../assets/Home-Quintessential-12-01-2024_01_20_AM.png'
import csefest from '../assets/CSE-FEST-2K24-12-01-2024_01_27_AM.png'

const Works = () => {
    return (
        <div className='max-w-7xl mx-auto flex flex-col lg:flex-row gap-2 lg:gap-4'>
            <div className="flex flex-col gap-2 lg:gap-4">
                <div className="cardbg w-full h-24">
                    <h1 className="text-icon text-xl">some of my works</h1>
                </div>
                <div className="cardbg p-0 h-auto">
                    <img src={pinemesh} alt="" />
                </div>
            </div>

            <div className='space-y-2 lg:space-y-4'>
                <div className="cardbg p-0 h-auto">
                    <img src={onlytech} alt="" />
                </div>
                <div className="cardbg p-0 h-auto">
                    <img src={tourify} alt="" />
                </div>
            </div>
            <div className='space-y-2 lg:space-y-4'>
                <div className="cardbg p-0 h-auto">
                    <img src={tidder} alt="" />
                </div>
                <div className="cardbg p-0 h-auto">
                    <img src={quintessential} alt="" />
                </div>
            </div>
            <div className='space-y-2 lg:space-y-4'>
                <div className="cardbg p-0 h-auto">
                    <img src={csefest} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Works;