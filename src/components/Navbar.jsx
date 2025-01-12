import React, { useEffect } from 'react';
import { Link } from 'react-scroll';

function Navbar() {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.main-section');
      const navbarLinks = document.querySelectorAll('.navbar-link');
      let current = 'home';

      sections.forEach((section) => {
        if (window.scrollY >= section.offsetTop - window.innerHeight / 4) {
          current = section.id;
        }
      });

      navbarLinks.forEach((navbarLink) => {
        const span = navbarLink.querySelector('span');
        span.classList.toggle('bg-gray-100', navbarLink.href.includes(current));
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className='z-[999] relative'>
      <div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[45rem] sm:rounded-full"
        style={{ opacity: 1, transform: 'translateX(-50%) translateY(0px) translateZ(0px)' }}
      ></div>
      <nav
        className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0"
        aria-label="Main navigation"
      >
        <ul
          className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5"
        >
          {[
            { href: '#home', section: 'home', label: 'Home' },
            { href: '#about', section: 'about', label: 'About' },
            { href: '#projects', section: 'projects', label: 'Projects' },
            { href: '#skills', section: 'skills', label: 'Skills' },
            { href: '#experience', section: 'experience', label: 'Experience' },
            { href: '#achievements', section: 'achievements', label: 'Achievements' },
            { href: '#contact', section: 'contact', label: 'Contact' },
          ].map((link, index) => (
            <li
              key={index}
              className="h-3/4 flex items-center justify-center relative"
              style={{ opacity: 1, transform: 'none' }}
            >
              <Link to={link.section} smooth={true} duration={400}
                className="flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition navbar-link"
                href={link.href}
              >
                {link.label}
                <span
                  className="rounded-full absolute inset-0 -z-10"
                  style={{ transform: 'none', transformOrigin: '50% 50% 0px' }}
                ></span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
