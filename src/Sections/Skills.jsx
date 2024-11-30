import { Icon } from '@iconify/react/dist/iconify.js';

const Skills = () => {

    const skills = [
        {
            icon: <Icon icon="flowbite:html-solid" width="30" height="30" />
        },
        {
            icon: <Icon icon="flowbite:css-solid" width="30" height="30" />
        },
        {
            icon: <Icon icon="mdi:tailwind" width="30" height="30" />
        },
        {
            icon: <Icon icon="fa-brands:js" width="30" height="30" />
        },
        {
            icon: <Icon icon="mdi:react" width="30" height="30" />
        },
        {
            icon: <Icon icon="akar-icons:vue-fill" width="30" height="30" />
        },
        {
            icon: <Icon icon="bi:git" width="30" height="30" />
        },
        {
            icon: <Icon icon="ant-design:python-outlined" width="30" height="30" />
        },
        {
            icon: <Icon icon="nonicons:node-16" width="30" height="30" />
        },
        {
            icon: <Icon icon="lineicons:mongodb" width="30" height="30" />
        },
        
    ]

    return (
        <div className='max-w-7xl mx-auto flex flex-wrap gap-2 lg:gap-4'>
        {
            skills.map((skill) => (

                <div key={skill} className='cardbg text-icon hover-animation'>
                    {skill.icon}
                </div>
            ))
        }
        </div>
    );
};

export default Skills;