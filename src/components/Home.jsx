import { ArrowDownToLine, MoveRight } from 'lucide-react';
import React from 'react';
import Github from '../assets/github.svg';

function HomeSection() {
    return (
        <section
            id="home"
            className="pt-56 px-8 sm:px-8 main-section"
            style={{
                backgroundColor: 'rgb(239, 246, 255)',
                backgroundImage:
                    'radial-gradient(at 38.27% 16.67%, rgb(56, 189, 248) 0, transparent 46%), radial-gradient(at 59.29% 41.67%, rgb(196, 181, 253) 0, transparent 61%)',
            }}
        >
            <div className="flex justify-center flex-col-reverse sm:flex-col-reverse md:flex-row px-0 sm:px-12 md:px-12 lg:px-12 xl:px-12 2xl:px-80">
                <div className="mb-10 self-auto mt-14 px-0 text-6xl font-medium leading-[1.5] text-center flex-initial md:w-9/12 sm:w-full">
                    <h1>
                        <b>Hello, I’m Zaky Ahmad Fauzi.</b> I’m a <b>DevOps</b> and <b>Robotics Engineer.</b>
                    </h1>
                    <div
                        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium pt-14"
                        style={{ opacity: 1 }}
                    >
                        <a
                            className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
                            href="#contact"
                        >
                            Contact me here
                            <MoveRight color='white' size={20}/>
                        </a>
                        <a
                            className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack"
                            href="/cv.pdf"
                            download
                        >
                            Download CV
                            <ArrowDownToLine color='grey' size={20}/>
                        </a>
                        <a
                            className="bg-white p-3 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack"
                            href="https://www.linkedin.com/in/zaky-ahmad-fauzi"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img width="30" height="30" src="https://img.icons8.com/color/48/linkedin.png" alt="linkedin"/>
                        </a>
                        <a
                            className="bg-white p-3 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack"
                            href="https://github.com/glazebyte"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img width="30" height="30" src={Github} alt="github"/>
                        </a>
                    </div>
                </div>
                <div
                    className="flex-none self-center sm:self-center md:self-auto"
                    style={{ width: '290px', height: '387px' }}
                >
                    <img
                        style={{ transform: 'none', width: '290px', height: '387px' }}
                        src="profil.png"
                        alt="Profile"
                    />
                </div>
            </div>
        </section>
    );
}

export default HomeSection;
