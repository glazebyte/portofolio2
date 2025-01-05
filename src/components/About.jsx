import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="w-full bg-blue-50 flex justify-center px-8 main-section"
      style={{ opacity: 1, transform: "none" }}
    >
      <div className="max-w-[45rem] mb-28 text-center leading-8 sm:mb-40 scroll-mt-28">
        <h2 className="text-4xl font-medium capitalize mb-8 text-center">
          About me
        </h2>
        <p className="mb-3">
          I am an undergraduate student from UPN “Veteran” Jawa Timur, majoring
          in <b>Informatics</b>. I love to explore many things in tech,
          especially cloud and embedded systems. Known as a dedicated and
          curious learner, I have always been passionate about understanding
          the intricacies of how technology can be leveraged to solve
          real-world problems.
        </p>
      </div>
    </section>
  );
};

export default About;
