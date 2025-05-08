import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedExperience, setSelectedExperience] = useState(null);

  const handleProjectClick = (projectIndex) => {
    setSelectedProject(selectedProject === projectIndex ? null : projectIndex);
  };

  const handleExperienceClick = (experienceIndex) => {
    setSelectedExperience(selectedExperience === experienceIndex ? null : experienceIndex);
  };

  return (
    <div className="App bg-gray-100 text-gray-900 font-sans">
      <header className="bg-blue-500 text-white p-6 text-center">
        <div className="flex flex-col items-center justify-center">
          {/* Profile Image */}
          <img
            src={`${import.meta.env.BASE_URL}profile-image.jpg`}
            alt="Preethi's Profile"
            className="rounded-full w-32 h-32 mb-4 border-4 border-white shadow-lg"
          />
          <h1 className="text-4xl font-bold">Preethi Musunuru</h1>
          <p className="text-xl mt-2">Software Engineer | Full-Stack Developer</p>
          <p className="text-white mt-1">📞 309-612-6760 | 📧 preethimusunuru@gmail.com</p>
        </div>
      </header>

      <main className="container mx-auto my-8 p-4">
        <section className="about-me">
          <h2 className="text-3xl font-semibold mb-4">About Me</h2>
          <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
            <p>
              Hi, I'm Preethi! I'm a passionate software engineer with a diverse skill set in full-stack development, cloud technologies, and mobile app development.
              With experience working at companies like Wipro and ZettaPrime, I love building dynamic, user-friendly applications using modern technologies.
            </p>
            <p className="mt-4">
              I am constantly seeking to learn and grow in the ever-evolving tech industry. I enjoy solving complex problems and contributing to innovative projects.
              I am also an advocate for clean, maintainable code and believe in the importance of working collaboratively to create meaningful software solutions.
            </p>
          </div>
        </section>

        {/* Work Experience Section */}
        <section className="experience my-8">
          <h2 className="text-3xl font-semibold mb-4">Work Experience</h2>
          <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
            <ul className="space-y-4">
              {[ /* experience objects here, omitted for brevity (same as your original code) */ ]
              .map((experience, index) => (
                <li
                  key={index}
                  className="bg-gray-100 p-4 rounded-lg shadow-sm cursor-pointer"
                  onClick={() => handleExperienceClick(index)}
                >
                  <h3 className="text-xl font-medium">{experience.position}</h3>
                  <p>{experience.company} | {experience.duration}</p>
                  {selectedExperience === index && (
                    <div className="mt-4 p-4 bg-gray-50 rounded-lg shadow-sm">
                      {experience.details}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="projects my-8">
          <h2 className="text-3xl font-semibold mb-4">My Projects</h2>
          <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
            <ul className="space-y-4">
              {[ /* project objects here, omitted for brevity (same as your original code) */ ]
              .map((project, index) => (
                <li
                  key={index}
                  className="bg-blue-100 p-4 rounded-lg shadow-sm cursor-pointer"
                  onClick={() => handleProjectClick(index)}
                >
                  <h3 className="text-xl font-medium">{project.title}</h3>
                  <p>{project.description}</p>
                  {selectedProject === index && (
                    <div className="mt-4 p-4 bg-blue-50 rounded-lg shadow-sm">
                      {project.details}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Updated Skills Section */}
        <section className="skills my-8">
          <h2 className="text-3xl font-semibold mb-4">Skills</h2>
          <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-blue-100 p-4 rounded-lg shadow-sm">
                <h3 className="font-medium text-lg mb-2">Programming Languages</h3>
                <ul className="list-disc list-inside">
                  <li>JavaScript, TypeScript</li>
                  <li>Python, Java</li>
                  <li>C++, Swift</li>
                </ul>
              </div>
              <div className="bg-blue-100 p-4 rounded-lg shadow-sm">
                <h3 className="font-medium text-lg mb-2">Frameworks & Libraries</h3>
                <ul className="list-disc list-inside">
                  <li>ReactJS, AngularJS</li>
                  <li>Node.js, Spring Boot</li>
                  <li>Flask, TensorFlow</li>
                </ul>
              </div>
              <div className="bg-blue-100 p-4 rounded-lg shadow-sm">
                <h3 className="font-medium text-lg mb-2">Cloud & Tools</h3>
                <ul className="list-disc list-inside">
                  <li>AWS, Azure, Firebase</li>
                  <li>Git, GitHub, Jira</li>
                  <li>Cucumber, Jest, Mocha</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="resume my-8">
          <h2 className="text-3xl font-semibold mb-4">Download My Resume</h2>
          <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
            <p>If you'd like to learn more about my experience, feel free to download my resume or view it below.</p>
            <h3 className="text-xl font-medium mb-2">Resume Preview</h3>
            <iframe
              src="https://asset.cloudinary.com/dg9cntzrg/4cad0d9a4ca4ded64d400fbe6981afa1"
              width="100%"
              height="600px"
              title="Preethi's Resume"
              className="border-2 border-gray-300 rounded-lg"
            ></iframe>
            <a
              href="https://asset.cloudinary.com/dg9cntzrg/4cad0d9a4ca4ded64d400fbe6981afa1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline mt-4 block"
            >
              Download My Resume
            </a>
          </div>
        </section>

        <section className="linkedin my-8">
          <h2 className="text-3xl font-semibold mb-4">Connect with Me on LinkedIn</h2>
          <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
            <p>If you'd like to connect professionally, feel free to visit my LinkedIn profile!</p>
            <a
              href="https://www.linkedin.com/in/preethi-musunuru-289995176/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Visit My LinkedIn Profile
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-blue-500 text-white p-6 text-center">
        <p>&copy; 2025 Preethi. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
