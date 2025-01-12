import React, { useEffect, useRef, useState } from 'react'

function ProjectCard(props) {
    const { title, description, tags, imgsrc } = props
    const cardRef = useRef(null)
    const [cardScale,setCardScale] = useState(0.8);

    useEffect(() => {
        const currentCardRef = cardRef.current;
        const handleScroll = () => {  
            const scale = (window.scrollY + (window.innerHeight * 3 / 5)) / currentCardRef.offsetTop
            if(0.8 < scale && scale < 1) setCardScale(scale);
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, )


    return (
        <div className="group mb-3 sm:mb-8 last:mb-0 project-card" style={{transform: `scale(${cardScale})`}} ref={cardRef}>
            <a href="/">
                <section
                    className="bg-blue-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-blue-200 transition sm:group-even:pl-8"
                >
                    <div
                        className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]"
                    >
                        <h3 className="text-2xl font-semibold">{title}</h3>
                        <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
                        <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
                            {tags.map((tag, index) => (
                                <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full" key={index}>
                                    {tag}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <img
                        display='none'
                        alt="Project I worked on"
                        loading="lazy" width="1305" height="651" decoding="async"
                        data-nimg="1"
                        className="absolute hidden sm:block rounded-t-lg shadow-2xl transition top-8 -right-40 w-[30rem] group-hover:-right-10 group-hover:scale-[1.04] group-hover:-translate-x-16 group-hover:translate-y-3 group-hover:-rotate-2 group-even:top-8 group-even:right-[initial] group-even:group-hover:translate-x-40 group-even:group-hover:translate-y-2 group-even:group-hover:rotate-2 group-even:-left-40"
                        src={imgsrc}
                    />
                </section>
            </a>
        </div>
    )
}

export default ProjectCard