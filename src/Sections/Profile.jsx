import { Icon } from '@iconify/react/dist/iconify.js';
import logo from '../assets/logo.svg'
import ProfileImage from '../assets/Shariar.jpg'
const Profile = () => {
    return (
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-4">
           <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                    <div className="cardbg w-1/3 ">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="cardbg w-2/3 flex-1">
                        <div>
                            <h1 className="text-[40px] text-white">Hi! I'm <span className="primary">SHARIAR</span></h1>
                            <p className="text-[20px] text-white text-opacity-60">Software Engineer, currently working at Defined Solution LTD</p>
                        </div>
                    </div>
                </div>
                <div className="cardbg h-96 p-0 block lg:hidden">
                    <img className='w-full h-full object-cover object-center' src={ProfileImage} alt="Image of Shariar" />
                </div>
                <div className="cardbg flex-1">
                    <div className='space-y-2'>
                        <p className="text-icon">about</p>
                        <p className="text-white">I'm a software engineer with strong focus on <span className="primary">software interface </span>
                        & <span className="primary">digital experience.</span></p>
                    </div>
                </div>
           </div>
           <div className="cardbg h-96 p-0 hidden lg:block">
                <img className='w-full h-full object-cover object-center' src={ProfileImage} alt="Image of Shariar" />
           </div>
           <div className='flex flex-col gap-2 lg:gap-4 place-items-center  '>
                <div className='flex gap-2 lg:gap-4'>
                    <div className='cardbg text-icon'>
                        <Icon icon="lucide:linkedin" width="30" height="30" />
                    </div>
                    <div className='cardbg text-icon'>
                        <Icon icon="meteor-icons:discord" width="30" height="30" />
                    </div>
                    <div className='cardbg text-icon'>
                        <Icon icon="lucide:facebook" width="30" height="30" />
                    </div>
                </div>

                <div className='grid grid-cols-3 gap-2 lg:gap-4 '>
                    <div className='flex flex-col gap-2 lg:gap-4 '>
                        <div className='cardbg text-icon'>
                            <Icon icon="icon-park-outline:youtube" width="30" height="30" />
                        </div>
                        <div className='cardbg text-icon'>
                            <Icon icon="ri:dribbble-fill" width="30" height="30" />
                        </div>
                    </div>
                    <div className='cardbg col-span-2 text-icon '>
                            <Icon icon="tdesign:logo-github" width="40" height="40" />
                    </div>
                </div>
                <div className='cardbg flex-1'>
                    <h1 className='inline-flex place-items-center gap-2 lg:gap-4 text-icon'><span ><Icon icon="majesticons:mail-line" width="30" height="30" /></span>shariarsfahim@gmail.com</h1>
                </div>
           </div>
        </div>
    );
};

export default Profile;