import { Card, CardContent } from "./components/ui/Card";
import { Mail, Phone, MapPin, Linkedin, Github, Code, Database, Cpu, GitBranch, Lightbulb, Award, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const titleAnimation = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const letterAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Portfolio() {
  const title = "Hi, I'm Dasun Darshaka";

  const sections = [
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "strengths", label: "Strengths" },
    { id: "certifications", label: "Certifications" },
    { id: "contact", label: "Contact" },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black text-gray-100">
      {/* Navigation with hover effects */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-80 backdrop-blur-md shadow-md transition-all duration-300 hover:bg-opacity-90">
        <ul className="flex justify-center flex-wrap gap-6 py-4 text-gray-200 font-semibold text-sm sm:text-base">
          {sections.map((section) => (
            <motion.li 
              key={section.id}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                onClick={() => scrollToSection(section.id)}
                className="hover:text-blue-400 hover:font-bold transition-all duration-300 focus:outline-none relative group"
              >
                {section.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
            </motion.li>
          ))}
        </ul>
      </nav>

      {/* Spacer for nav */}
      <div className="h-20"></div>

      {/* Header with hover effects */}
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-gradient-to-r from-gray-900 via-black to-gray-800 text-white py-32 text-center shadow-lg hover:shadow-2xl transition-shadow duration-500"
      >
        <motion.h1
          className="text-6xl font-extrabold tracking-wide mb-4 flex justify-center flex-wrap"
          variants={titleAnimation}
          initial="hidden"
          animate="visible"
        >
          {title.split("").map((char, i) => (
            <motion.span 
              key={i} 
              variants={letterAnimation} 
              className="inline-block hover:text-blue-400 hover:scale-125 transition-all duration-200 cursor-default"
              whileHover={{ y: -10 }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>
        <motion.p 
          className="text-2xl font-light hover:text-blue-300 transition-colors duration-300 cursor-default"
          whileHover={{ scale: 1.05 }}
        >
          Undergraduate Software Engineer
        </motion.p>
        <motion.p 
          className="text-lg mt-2 hover:text-gray-300 transition-colors duration-300 cursor-default"
          whileHover={{ scale: 1.05 }}
        >
          BIT (Reading) | BSc in Physical Sciences (Reading)
        </motion.p>
      </motion.header>

      <main className="max-w-6xl mx-auto p-10 space-y-32">
        {/* About with hover effects */}
        <motion.section
          id="about"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          whileHover={{ scale: 1.02, boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.3)" }}
          className="bg-gray-900 shadow-xl rounded-2xl p-10 border-l-8 border-gray-700 hover:border-blue-500 min-h-[90vh] flex flex-col justify-center transition-all duration-500 cursor-pointer"
        >
          <motion.h2 
            className="text-4xl font-bold text-white mb-6 hover:text-blue-400 transition-colors duration-300"
            whileHover={{ x: 10 }}
          >
            About Me
          </motion.h2>
          <p className="text-lg leading-relaxed text-gray-300 hover:text-white transition-colors duration-300">
            Analytical and technically skilled graduate in Computer Science, Statistics and Industrial
            Mathematics. Seeking a role that leverages my analytical thinking,
            critical thinking, problem-solving, creativity and computational skills to drive innovative
            solutions in tech, research or industry.
          </p>
        </motion.section>

        {/* Education with enhanced hover effects */}
        <motion.section
          id="education"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="bg-gradient-to-r from-gray-800 to-gray-900 shadow-xl rounded-2xl p-12 min-h-[90vh] flex flex-col justify-center border border-gray-700 hover:border-green-500 transition-all duration-500"
        >
          <motion.h2 
            className="text-4xl font-bold text-white mb-12 text-center hover:text-green-400 transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
          >
            Education
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Bachelor of Information Technology", period: "2024 - Present", place: "University of Moratuwa" },
              { title: "BSc (General) in Physical Sciences", period: "2022 - Present", place: "University of Ruhuna" },
              { title: "G.C.E. A/L – Physical Science Stream", period: "2020", place: "Royal College, Colombo 07" },
            ].map((edu, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp} 
                custom={i+1} 
                className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-2xl hover:shadow-green-500/50 transition-all duration-300 cursor-pointer border border-transparent hover:border-green-500"
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                    <GraduationCap className="text-green-400 hover:text-green-300 transition-colors" size={28} />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-white hover:text-green-400 transition-colors duration-300">{edu.title}</h3>
                </div>
                <p className="text-gray-400 hover:text-gray-300 transition-colors duration-300">{edu.period}</p>
                <p className="text-gray-300 hover:text-white transition-colors duration-300">{edu.place}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Projects with hover effects */}
        <motion.section
          id="projects"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="bg-gradient-to-r from-gray-800 to-black shadow-xl rounded-2xl p-10 min-h-[90vh] flex flex-col justify-center"
        >
          <motion.h2 
            className="text-4xl font-bold text-white mb-10 hover:text-purple-400 transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
          >
            Projects
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                title: "Smart Budget Managing Web Application",
                tech: "React.js, Express.js, MongoDB, Node.js",
                desc: "Built a full-stack MERN Expense Tracker Web using OOP and DSA (sorting, hash maps) for efficient expense categorization and analytics, with REST APIs and a React dashboard.",
              },
              {
                title: "Study Time Periods Optimizing Web Application",
                tech: "Java, Spring Boot, React.js, Node.js",
                desc: "Developed a full-stack web application for optimizing and allocating study time periods across university subjects using the Simplex Method in Mathematics, enabling effective scheduling during study leave.",
              },
              {
                title: "Leisure Activity Recommending Mobile Application",
                tech: "React Native, Spring Boot, MySQL",
                desc: "Developed a full-stack mobile app that recommends personalized leisure activities based on time, budget and preferences featuring algorithms and interactive UI.",
              },
              {
                title: "Book Shop Website",
                tech: "HTML, CSS, JavaScript",
                desc: "Developed a website for a bookshop that implemented responsive design, interactive UI elements, and seamless user navigation.",
              },
            ].map((proj, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp} 
                custom={i+1}
                whileHover={{ scale: 1.05, rotate: 1 }}
              >
                <Card className="bg-gradient-to-br from-gray-800 to-gray-900 shadow-md hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 cursor-pointer border border-transparent hover:border-purple-500">
                  <CardContent className="p-8">
                    <motion.h3 
                      className="font-bold text-2xl text-white mb-4 hover:text-purple-400 transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      {proj.title}
                    </motion.h3>
                    <p className="text-sm font-semibold text-blue-400 mb-4 hover:text-blue-300 transition-colors duration-300">{proj.tech}</p>
                    <p className="text-gray-300 mt-4 hover:text-white transition-colors duration-300">{proj.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Skills with hover effects */}
        <motion.section
          id="skills"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="bg-gradient-to-r from-gray-900 to-gray-800 shadow-2xl rounded-2xl p-12 min-h-[90vh] flex flex-col justify-center border border-gray-700 hover:border-blue-500 transition-all duration-500"
        >
          <motion.h2 
            className="text-4xl font-bold text-white mb-12 text-center hover:text-blue-400 transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
          >
            Skills
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <motion.div 
              variants={fadeInUp} 
              custom={1} 
              className="bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 cursor-pointer border border-transparent hover:border-blue-500"
              whileHover={{ scale: 1.08, y: -10 }}
            >
              <motion.div whileHover={{ rotate: 360, scale: 1.2 }} transition={{ duration: 0.5 }}>
                <Code size={32} className="text-blue-400 mb-3 hover:text-blue-300 transition-colors" />
              </motion.div>
              <h3 className="text-2xl font-semibold text-white mb-2 hover:text-blue-400 transition-colors duration-300">Programming Languages</h3>
              <p className="text-gray-300 hover:text-white transition-colors duration-300">Java, JavaScript, Python, PHP, HTML, CSS, C#, R</p>
            </motion.div>

            <motion.div 
              variants={fadeInUp} 
              custom={2} 
              className="bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-2xl hover:shadow-green-500/50 transition-all duration-300 cursor-pointer border border-transparent hover:border-green-500"
              whileHover={{ scale: 1.08, y: -10 }}
            >
              <motion.div whileHover={{ rotate: 360, scale: 1.2 }} transition={{ duration: 0.5 }}>
                <Cpu size={32} className="text-green-400 mb-3 hover:text-green-300 transition-colors" />
              </motion.div>
              <h3 className="text-2xl font-semibold text-white mb-2 hover:text-green-400 transition-colors duration-300">Frameworks</h3>
              <p className="text-gray-300 hover:text-white transition-colors duration-300">React, Node.js</p>
            </motion.div>

            <motion.div 
              variants={fadeInUp} 
              custom={3} 
              className="bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 cursor-pointer border border-transparent hover:border-yellow-500"
              whileHover={{ scale: 1.08, y: -10 }}
            >
              <motion.div whileHover={{ rotate: 360, scale: 1.2 }} transition={{ duration: 0.5 }}>
                <Database size={32} className="text-yellow-400 mb-3 hover:text-yellow-300 transition-colors" />
              </motion.div>
              <h3 className="text-2xl font-semibold text-white mb-2 hover:text-yellow-400 transition-colors duration-300">Databases</h3>
              <p className="text-gray-300 hover:text-white transition-colors duration-300">MySQL, MongoDB</p>
            </motion.div>

            <motion.div 
              variants={fadeInUp} 
              custom={4} 
              className="bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 cursor-pointer border border-transparent hover:border-purple-500"
              whileHover={{ scale: 1.08, y: -10 }}
            >
              <motion.div whileHover={{ rotate: 360, scale: 1.2 }} transition={{ duration: 0.5 }}>
                <GitBranch size={32} className="text-purple-400 mb-3 hover:text-purple-300 transition-colors" />
              </motion.div>
              <h3 className="text-2xl font-semibold text-white mb-2 hover:text-purple-400 transition-colors duration-300">Tools & Platforms</h3>
              <p className="text-gray-300 hover:text-white transition-colors duration-300">Git, GitHub</p>
            </motion.div>
          </div>
        </motion.section>

        {/* Strengths with hover effects */}
        <motion.section
          id="strengths"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="bg-gradient-to-r from-gray-800 to-gray-900 shadow-2xl rounded-2xl p-12 min-h-[70vh] flex flex-col justify-center border border-gray-700 hover:border-orange-500 transition-all duration-500"
        >
          <motion.h2 
            className="text-4xl font-bold text-white mb-10 text-center hover:text-orange-400 transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
          >
            Strengths
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            {["Analytical Thinking", "Problem Solving", "Teamwork", "Adaptability", "Attention to Detail", "Time Management"].map((strength, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp} 
                custom={i+1} 
                className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 cursor-pointer border border-transparent hover:border-orange-500"
                whileHover={{ scale: 1.1, rotate: 2, y: -10 }}
              >
                <motion.div whileHover={{ rotate: 360, scale: 1.3 }} transition={{ duration: 0.5 }}>
                  <Lightbulb size={36} className="text-orange-400 mb-3 mx-auto hover:text-orange-300 transition-colors" />
                </motion.div>
                <h3 className="text-xl font-semibold text-white hover:text-orange-400 transition-colors duration-300">{strength}</h3>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Certifications with hover effects */}
        <motion.section
          id="certifications"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="bg-gray-900 shadow-xl rounded-2xl p-12 min-h-[90vh] flex flex-col justify-center border border-gray-700 hover:border-blue-500 transition-all duration-500"
        >
          <motion.h2 
            className="text-4xl font-bold text-white mb-12 text-center hover:text-blue-400 transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
          >
            Certifications
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "AI/ML Engineer", issuer: "SLIIT" },
              { title: "Front End Web Development", issuer: "University of Moratuwa" },
              { title: "Programming in Python", issuer: "University of Moratuwa" },
              { title: "Introduction to Data Science", issuer: "University of Moratuwa" },
            ].map((cert, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp} 
                custom={i+1} 
                className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 cursor-pointer border border-transparent hover:border-blue-500"
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                    <Award className="text-blue-400 hover:text-blue-300 transition-colors" size={28} />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-white hover:text-blue-400 transition-colors duration-300">{cert.title}</h3>
                </div>
                <p className="text-gray-400 hover:text-gray-300 transition-colors duration-300">{cert.issuer}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact with hover effects */}
        <motion.section
          id="contact"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="bg-gradient-to-r from-gray-800 to-gray-900 shadow-xl rounded-2xl p-10 min-h-[90vh] flex flex-col justify-center hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-500"
        >
          <motion.h2 
            className="text-4xl font-bold text-white mb-8 hover:text-blue-400 transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
          >
            Contact
          </motion.h2>
          <div className="space-y-6 text-xl text-gray-300">
            <motion.p 
              variants={fadeInUp} 
              custom={1} 
              className="flex items-center gap-3 hover:text-white hover:translate-x-2 transition-all duration-300 cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                <Phone size={24} className="text-gray-400 hover:text-blue-400 transition-colors"/>
              </motion.div>
              0767589462
            </motion.p>
            <motion.p 
              variants={fadeInUp} 
              custom={2} 
              className="flex items-center gap-3 hover:text-white hover:translate-x-2 transition-all duration-300 cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                <Mail size={24} className="text-gray-400 hover:text-blue-400 transition-colors"/>
              </motion.div>
              dasun.darshaka01@gmail.com
            </motion.p>
            <motion.p 
              variants={fadeInUp} 
              custom={3} 
              className="flex items-center gap-3 hover:text-white hover:translate-x-2 transition-all duration-300 cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                <MapPin size={24} className="text-gray-400 hover:text-blue-400 transition-colors"/>
              </motion.div>
              278, Horana Road, Pamunugama, Alubomulla
            </motion.p>
            <motion.p 
              variants={fadeInUp} 
              custom={4} 
              className="flex items-center gap-3 hover:text-white hover:translate-x-2 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                <Linkedin size={24} className="text-gray-400 hover:text-blue-400 transition-colors"/>
              </motion.div>
              <a className="text-blue-400 hover:underline hover:text-blue-300 transition-colors duration-300" href="https://www.linkedin.com/in/dasundarshaka">linkedin.com/in/dasundarshaka</a>
            </motion.p>
            <motion.p 
              variants={fadeInUp} 
              custom={5} 
              className="flex items-center gap-3 hover:text-white hover:translate-x-2 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                <Github size={24} className="text-gray-400 hover:text-blue-400 transition-colors"/>
              </motion.div>
              <a className="text-blue-400 hover:underline hover:text-blue-300 transition-colors duration-300" href="https://github.com/dasundarshaka">github.com/dasundarshaka</a>
            </motion.p>
          </div>
        </motion.section>
      </main>

      {/* Footer with hover effect */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-gradient-to-r from-black to-gray-900 text-white text-center py-10 mt-20 shadow-inner hover:bg-gradient-to-r hover:from-gray-900 hover:to-black transition-all duration-500"
      >
        <motion.p 
          className="text-lg hover:text-blue-400 transition-colors duration-300 cursor-default"
          whileHover={{ scale: 1.05 }}
        >
          © {new Date().getFullYear()} Dasun Darshaka Perera. All rights reserved.
        </motion.p>
      </motion.footer>
    </div>
  );
}