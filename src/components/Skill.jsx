import React from 'react'

function SkillSection() {
    const mySkills = ['C/C++', 'ESP32', 'Java', 'JavaScript', 'React', 'Next.js', 'Raspberry Pi', 'PHP', 'Python', 'OpenCV', 'MySQL', 'Redhat', 'Debian', 'Ubuntu', 'Bootstrap', 'Tailwind', 'Laravel', 'Nginx', 'Wireguard', 'jQuery', 'Docker', 'Nodejs', 'Bash', 'Ansible', 'Embedded', 'ROS2', 'microROS', 'SSH', 'Podman', 'Ansible', 'FreeRTOS', 'Github', 'Terraform', 'Git', 'Yarn', 'Webpack', 'Apache', 'TensorFlow', 'Orange']
    return (
        <section id="skills" class="pb-28 px-8 scroll-mt-28 text-center sm:pb-40 w-full bg-blue-50 flex justify-center main-section">
            <div class="max-w-[53rem]">
                <h2 class="text-3xl font-medium capitalize mb-8 text-center">My Skills</h2>
                <ul class="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
                    {mySkills.map(skill => (
                        <li class="bg-blue-100 borderBlack rounded-xl px-5 py-3 " style={{ opacity: 1, transform: 'none' }}>{skill}</li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default SkillSection