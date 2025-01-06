import React from 'react'

function ExperienceSection() {
    const myExperience = [
        {
            title: 'Graha Mutu Persada (Freelance)',
            role: 'Linux Automation and System Administtrator Engineer',
            date: 'Jan 2024 - Now',
            description: 'Manage VPS, Deploy and Optimaze Laravel, Configure Nginx, Automating Cron, Manage Strict Permision,Configure and Hardening VPS'
        },
    ]

    return (
        <section id="experience" class="w-full flex justify-center bg-blue-50 px-8 main-section">
            <div class="container max-w-5xl px-4 py-12 mx-auto">
                <div class="grid gap-4 mx-4 sm:grid-cols-12 text-left">
                    <div class="col-span-12 sm:col-span-3">
                        <div
                            class="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-blue-400">
                            <h3 class="text-3xl font-semibold">My Experience</h3>
                            <span class="text-sm font-bold tracking-wider uppercase text-gray-600">Work
                                Experience</span>
                        </div>
                    </div>
                    <div class="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                        <div class="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-300">
                            {myExperience.map(exp => (
                                <div class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-blue-400">
                                    <h3 class="text-xl font-semibold tracking-wide">{exp.title}</h3>
                                    <h4>{exp.role}</h4>
                                    <time class="text-xs tracking-wide uppercase text-gray-600">{exp.date}</time>
                                    <p class="mt-3">{exp.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ExperienceSection