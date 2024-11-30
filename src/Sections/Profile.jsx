import { Icon } from '@iconify/react/dist/iconify.js';
import logo from '../assets/logo.svg'
import ProfileImage from '../assets/Shariar.jpg'
const Profile = () => {
    const skills = [
        {
            icon: <Icon icon="lucide:linkedin" width="30" height="30" />,
            link:'https://www.linkedin.com/in/shariarsultan'
        },
        {
            icon: <Icon icon="meteor-icons:discord" width="30" height="30" />,
            link:'https://discord.com/users/323843210994647040'
        },
        {
            icon: <Icon icon="lucide:facebook" width="30" height="30" />,
            link:'https://www.facebook.com/shariarsfahim'
        },
        {
            icon: <Icon icon="icon-park-outline:youtube" width="30" height="30" />,
            link:'https://www.youtube.com/@shariarfahim738'
        },
        {
            icon: <Icon icon="ri:dribbble-fill" width="30" height="30" />,
            link:''
        },
        {
            icon: <Icon icon="tdesign:logo-github" width="30" height="30" />,
            link:'https://github.com/shariarSultanFahim'
        },
        {
            icon: <Icon icon="majesticons:mail-line" width="30" height="30" />,
            link:'shariarsfahim@gmail.com'
        }
        
    ]

    const handleButtonClick = (link) => {
        if (link.startsWith('http')) {
            window.open(link, '_blank'); // Open link in a new window
        } else if (link.includes('@')) {
            window.location.href = `mailto:${link}`; // Open mail app
        }
    };

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
                            <p className="text-[20px] text-white text-opacity-60">Frontend Developer, currently working at Defined Solution LTD</p>
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

           <div className='hidden lg:flex flex-col gap-2 lg:gap-4  place-items-center'>
                <div className='flex gap-2 lg:gap-4'>
                     <button className='cardbg text-icon hover-animation' onClick={() => handleButtonClick('https://www.linkedin.com/in/shariarsultan')}>
                        <Icon icon="lucide:linkedin" width="30" height="30" />
                    </button>
                     <button className='cardbg text-icon hover-animation' onClick={() => handleButtonClick('https://discord.com/users/323843210994647040')}>
                        <Icon icon="meteor-icons:discord" width="30" height="30" />
                    </button>
                     <button className='cardbg text-icon hover-animation' onClick={() => handleButtonClick('https://www.facebook.com/shariarsfahim')}>
                        <Icon icon="lucide:facebook" width="30" height="30" />
                    </button>
                </div>

                <div className='grid grid-cols-3 gap-2 lg:gap-4 '>
                    <div className='flex flex-col gap-2 lg:gap-4 place-items-center'>
                         <button className='cardbg text-icon hover-animation' onClick={() => handleButtonClick('https://www.youtube.com/@shariarfahim738')}>
                            <Icon icon="icon-park-outline:youtube" width="30" height="30" />
                        </button>
                         <button className='cardbg text-icon hover-animation' onClick={() => handleButtonClick('')}>
                            <Icon icon="ri:dribbble-fill" width="30" height="30" />
                        </button>
                    </div>
                    <button className='cardbg col-span-2 text-icon hover-animation' onClick={() => handleButtonClick('https://github.com/shariarSultanFahim')}>
                        <Icon icon="tdesign:logo-github" width="40" height="40" />
                    </button>
                </div>
                <button className='cardbg w-[17rem] hover-animation' onClick={() => handleButtonClick('shariarsfahim@gmail.com')}>
                    <h1 className='text-[12px] inline-flex gap-2 lg:gap-4 text-icon place-items-center'>
                        <span><Icon icon="majesticons:mail-line" width="30" height="30" /></span>shariarsfahim@gmail.com
                    </h1>
                </button>
           </div>

           <div className=' mx-auto flex flex-wrap gap-2 lg:hidden'>
                {
                    skills.map((skill) => (

                        <button key={skill} className='cardbg text-icon' onClick={() => handleButtonClick(`${skill.link}`)}>
                            {skill.icon}
                        </button>
                    ))
                }
            </div>
        </div>
    );
};

export default Profile;