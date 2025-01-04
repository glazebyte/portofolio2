import React from 'react';

function Header() {
  return (
    <header>
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
            { href: '#home', label: 'Home' },
            { href: '#about', label: 'About' },
            { href: '#projects', label: 'Projects' },
            { href: '#skills', label: 'Skills' },
            { href: '#experience', label: 'Experience' },
            { href: '#achievements', label: 'Achievements' },
            { href: '#contact', label: 'Contact' },
          ].map((link, index) => (
            <li
              key={index}
              className="h-3/4 flex items-center justify-center relative"
              style={{ opacity: 1, transform: 'none' }}
            >
              <a
                className="flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition"
                href={link.href}
              >
                {link.label}
                <span
                  className="bg-gray-100 rounded-full absolute inset-0 -z-10"
                  style={{ transform: 'none', transformOrigin: '50% 50% 0px' }}
                ></span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
