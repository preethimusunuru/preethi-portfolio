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
          <p className="mt-2">
            <span role="img" aria-label="phone">📞</span> 309-612-6760 | 
            <span role="img" aria-label="email">📧</span> preethimusunuru@gmail.com
          </p>
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
              {[
                {
                  position: 'Software Engineer',
                  company: 'ZettaPrime',
                  duration: 'Apr 2023 – Aug 2024',
                  details: (
                    <>
                      <ul className="list-disc pl-6">
                        <li>Worked on developing internal dashboards using ReactJS for improved data visualization and management.</li>
                        <li>Optimized data processing pipelines with the backend services built on Java and Spring Boot to ensure high performance and scalability.</li>
                        <li>Collaborated with cross-functional teams to implement features and enhancements, delivering regular updates to improve system usability.</li>
                        <li>Participated in code reviews and helped mentor junior developers, ensuring adherence to coding standards and best practices.</li>
                      </ul>
                    </>
                  )
                },
                {
                  position: 'Software Engineer',
                  company: 'Wipro',
                  duration: 'May 2021 – Jun 2022',
                  details: (
                    <>
                      <ul className="list-disc pl-6">
                        <li>Contributed to a credit card management system, developing both frontend and backend to enable secure transaction processing.</li>
                        <li>Implemented dynamic transaction tables using ReactJS, allowing users to sort, filter, and paginate data effectively.</li>
                        <li>Worked with the automation team to develop and enhance the automated testing framework using Cucumber, ensuring comprehensive testing coverage for both frontend and backend components.</li>
                        <li>Collaborated with the QA team to write and execute test cases, identifying critical bugs and improving system stability.</li>
                        <li>Worked with the DevOps team to deploy the system on AWS, utilizing EC2 instances for hosting and S3 for data storage.</li>
                      </ul>
                    </>
                  )
                },
                {
                  position: 'Java Developer',
                  company: 'Neven IT Services',
                  duration: 'Jul 2020 – Apr 2021',
                  details: (
                    <>
                      <ul className="list-disc pl-6">
                        <li>Developed enterprise-level applications using Java, ensuring high-quality performance and scalability.</li>
                        <li>Implemented RESTful APIs to integrate with various external systems, ensuring seamless data exchange.</li>
                        <li>Worked closely with product managers and clients to gather requirements and translate them into technical specifications.</li>
                        <li>Optimized the performance of the backend system by refactoring legacy code and improving database queries.</li>
                      </ul>
                    </>
                  )
                },
                {
                  position: 'Frontend Developer Intern',
                  company: 'TheSmartBridge',
                  duration: 'Apr 2020 – Jun 2020',
                  details: (
                    <>
                      <ul className="list-disc pl-6">
                        <li>Developed a Smart Health Monitoring System for elderly people using IBM Cloud and IoT technologies.</li>
                        <li>Built a web interface to visualize real-time health data from wearable devices, integrating it with cloud-based services for alerts and notifications.</li>
                        <li>Worked with cross-functional teams to implement efficient data processing and ensure system reliability and security.</li>
                      </ul>
                    </>
                  )
                },
                {
                  position: 'Machine Learning Intern',
                  company: 'CodeMania',
                  duration: 'Jun 2019',
                  details: (
                    <>
                      <ul className="list-disc pl-6">
                        <li>Developed image classification models using RNN and CNN for sign language recognition, contributing to the field of assistive technologies.</li>
                        <li>Worked with large datasets and used TensorFlow to implement deep learning models, improving recognition accuracy over time.</li>
                        <li>Delivered projects on time, ensuring high-quality output and practical application of machine learning techniques.</li>
                      </ul>
                    </>
                  )
                }
              ].map((experience, index) => (
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
              {[
                {
                  title: 'Graduate Teaching Assistant Management System',
                  description: 'A MERN stack-based system developed for Florida Atlantic University to manage the workflow of Graduate Teaching Assistants.',
                  details: (
                    <>
                      <ul className="list-disc pl-6">
                        <li>The system features application submission, resume uploads via Cloudinary, profile management, and secure user authentication with JWT.</li>
                        <li>Optimized performance through MongoDB and Node.js for data handling and processing, ensuring a seamless user experience.</li>
                        <li>Implemented role-based access control (RBAC) to ensure secure and appropriate access to resources by different users.</li>
                      </ul>
                    </>
                  ),
                },
                {
                  title: 'Credit Card Management System',
                  description: 'A full-stack credit card management system developed using Java and ReactJS, with automated testing in Cucumber.',
                  details: (
                    <>
                      <ul className="list-disc pl-6">
                        <li>The system allows users to manage transactions, balances, and account information securely with robust backend APIs.</li>
                        <li>Implemented sorting, filtering, and pagination for transaction history using ReactJS for better user experience.</li>
                        <li>Enhanced system stability with continuous integration practices and automated testing using Cucumber to validate functional accuracy.</li>
                      </ul>
                    </>
                  ),
                },
                {
                  title: 'Edu Connect Mobile App',
                  description: 'A mobile app built with Flutter for students and faculty to connect, share resources, and manage schedules.',
                  details: (
                    <>
                      <ul className="list-disc pl-6">
                        <li>The app supports real-time notifications, user authentication via Firebase, and real-time activity tracking.</li>
                        <li>Implemented various engagement features such as a messaging platform, shared calendars, and document sharing for easy communication.</li>
                        <li>Used Firebase to manage app data in real-time, ensuring a smooth user experience with instant updates and seamless cloud storage integration.</li>
                      </ul>
                    </>
                  ),
                }
              ].map((project, index) => (
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

        <section className="skills my-8">
          <h2 className="text-3xl font-semibold mb-4">Skills</h2>
          <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
            <ul className="list-disc ml-6">
              <li>JavaScript, TypeScript, Python, Java, C++, Swift</li>
              <li>ReactJS, AngularJS, Node.js, Spring Boot</li>
              <li>Cloud Technologies: AWS, Azure, Firebase</li>
              <li>Mobile App Development: Flutter, Swift</li>
              <li>Testing Frameworks: Cucumber, Jest, Mocha</li>
              <li>Version Control: Git, GitHub</li>
            </ul>
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
