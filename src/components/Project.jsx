import React from 'react';
import ProjectCard from './ProjectCard';

function ProjectsSection() {
    const projectLists = [
        {
            title: 'Kasirku',
            description: 'Desktop app for record purchases and managing menu items in restaurants easily.',
            tags: ['Java', 'JavaFX', 'SQLite'],
            imgsrc: 'kasirku.png',
        },
        {
            title: 'GA-Connect',
            description: 'Web app for managing the ticketing system to help the General Affairs Division manage requests from other divisions',
            tags: ['PHP', 'Javascript', 'MySQL', 'JQuery', 'Bootstrap'],
            imgsrc: 'ga-connect.png',
        },
        {
            title: 'Math Adventure',
            description: 'A simple math game to challege student answering mathematics quiz from teacher. Online System',
            tags: ['Java', 'JavaFX', 'mysql'],
            imgsrc: 'math_adventure.png',
        },
        {
            title: 'Robot Soccer',
            description: '3 Wheeled Soccer Robot for KRSBI Competition.',
            tags: ['C++', 'ROS2', 'ESP32', 'Ubuntu', 'microros', 'python', 'opencv', 'docker'],
            imgsrc: 'robot_bola.gif',
        },
        {
            title: 'Autonomous Boat',
            description: 'Autonomous Boat for for KKCTBN/KKI Autonomous Surface Vessel Competition.',
            tags: ['C++', 'ROS2', 'ESP32', 'Ubuntu', 'microros', 'python', 'opencv', 'docker'],
            imgsrc: 'asv.gif',
        },
        {
            title: 'Home Server and Automation',
            description : 'Home Server and Automation using vps and raspberry pi for home automation and and many service.',
            tags: ['Raspberry Pi', 'Debian', 'Docker', 'Python', 'NodeJS', 'Nginx', 'MQTT','wireguard'],
        },
        {
            title : 'Wayang Classification',
            description : 'Compare Vision Transformer, YOLO5, YOLO8, Resnet34 for classify wayang. 91% accuracy on test data.',
            tags : ['Python', 'Pytorch', 'YOLO5','YOLO8','Resnet34','Transformer'],
            imgsrc : 'wayang.png'
        },
        {
            title : 'lorem',
            description : 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Quisquam, quos.',
            tags : ['lorem', 'ipsum', 'dolor', 'sit', ' amet'],
        }

    ]
    return (
        <section
            id="projects"
            className="w-full grid grid-col justify-center pb-28 px-20 main-section"
            style={{
                backgroundColor: 'rgb(239, 246, 255)',
                backgroundImage: `
                    radial-gradient(at 85.34% 33.17%, rgb(221, 214, 254) 0, transparent 20%),
                    radial-gradient(at 20.34% 70.17%, rgb(221, 214, 254) 0, transparent 20%)
                    `,
            }}
        >
            <h2 className="text-4xl font-medium capitalize pb-8 text-center  bg-blue-50 w-full">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
                {projectLists.map((projectlist, index) => (
                    <ProjectCard key={index} {...projectlist} />
                ))}
            </div>
        </section>
    );
}

export default ProjectsSection;
