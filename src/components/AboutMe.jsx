const AboutMe = () => {
  return (
    <section
      id="about-me"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6"
    >
      <div className="text-center max-w-3xl">
        <p className="text-lg text-secondary mb-4">
          Watashi no namae wa<br></br>{" "}
          <span className="font-bold">Yuvrajsinh D. Chauhan</span>, Since
          January 2024 till date, working as a Software Engineer Intern at
          Rapidops. With a strong foundation in{" "}
          <span className="font-bold">React</span> and{" "}
          <span className="font-bold">JavaScript</span>, Passionate about
          creating engaging and efficient web applications.
        </p>
        <p className="text-lg text-secondary mb-4">
          I graduated with a{" "}
          <span className="font-bold">B.Tech in Computer Engineering</span> from
          Birla Vishvakarma Mahavidhyalaya
        </p>
        <p className="text-lg text-secondary mb-4">
          Apart from coding, I am an avid anime enthusiast.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
