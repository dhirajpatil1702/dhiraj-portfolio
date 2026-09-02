import "./App.css";

function App() {
  return (
    <div className="app">

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">DP</div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#certifications">Certifications</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Home */}
      <section id="home" className="hero">
        <div className="hero-content">

          <div className="profile-box">
            <img src="/profile.jpg" alt="Dhiraj Patil" />
          </div>

          <p className="hello">Hello, I'm</p>

          <h1>DHIRAJ PATIL</h1>

          <h2>Data Analyst</h2>

          <p className="hero-text">
            Passionate Data Analyst focused on transforming data into
            meaningful insights through SQL, Power BI, Excel and Python.
          </p>

          {/* Buttons */}
          <div className="hero-buttons">
            <a href="#contact" className="btn primary">
              Get In Touch
            </a>

            <a
              href="https://www.linkedin.com/in/dhirajpatil07"
              target="_blank"
              rel="noreferrer"
              className="btn secondary"
            >
              LinkedIn
            </a>
          </div>

          {/* Social Icons */}
          <div className="social-icons">

            {/* Email */}
            <a
              href="mailto:patildhiraj1702@gmail.com"
              aria-label="Email"
            >
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/dhirajpatil07"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/dhirajpatil1702"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </a>

          </div>

        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <div className="container">

          <p className="section-label">ABOUT ME</p>
          <h2 className="section-title">Get to know me</h2>

          <div className="about-grid">

            <div className="about-text">
              <p>
                I'm Dhiraj, a passionate and driven Data Analyst/Data
                Scientist enthusiast. I have recently completed my
                Bachelor's Degree in Electronics & Telecommunication
                Engineering from Pune University 🇮🇳.
              </p>

              <p>
                I started my Data Analyst internship at Cravita Technologies
                Private Limited, Pune. My passion lies in building
                interactive dashboards, writing optimized SQL queries,
                and automating reporting processes.
              </p>

              <p>
                I enjoy working with data and turning complex information
                into simple and useful insights that help in better
                decision-making.
              </p>
            </div>

            <div className="about-card">
              <h3>Education</h3>

              <h4>Bachelor of Engineering</h4>

              <p>
                Electronics & Telecommunication Engineering
              </p>

              <p>
                Savitribai Phule Pune University
              </p>

              <span>2022 – 2026 | CGPA: 7.0</span>
            </div>

          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="section dark-section">
        <div className="container">

          <p className="section-label">My Journey</p>
          <h2 className="section-title">Work Experience</h2>

          <div className="experience-card">

            <div className="experience-header">
              <div>
                <h3>(Trainee) Data Analyst Intern</h3>
                <h4>Cravita Technologies Private Limited</h4>
              </div>

              <span>July 2026 – Present</span>
            </div>

            <p className="location">
              Pune, Maharashtra, India
            </p>

            <ul>
              <li>Working with data analysis and reporting tasks.</li>
              <li>Creating dashboards using Power BI and Excel.</li>
              <li>Writing SQL queries for data extraction and analysis.</li>
              <li>Performing data cleaning and validation.</li>
              <li>Generating meaningful business insights from data.</li>
            </ul>

          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <div className="container">

          <p className="section-label">My Work</p>
          <h2 className="section-title">Featured Projects</h2>

          <div className="projects-grid">

            <div className="project-card">
              <div className="project-icon">📊</div>

              <h3>ShopKart E-Commerce Sales Dashboard</h3>

              <p>
                Interactive e-commerce sales dashboard created using
                Power BI to analyze sales, revenue, customers and
                product performance.
              </p>

              <div className="tags">
                <span>Power BI</span>
                <span>SQL</span>
                <span>DAX</span>
                <span>Power Query</span>
              </div>
            </div>

            <div className="project-card">
              <div className="project-icon">📈</div>

              <h3>Swiggy Sales Dashboard</h3>

              <p>
                Excel dashboard designed to analyze Swiggy sales,
                orders, revenue and overall business performance.
              </p>

              <div className="tags">
                <span>Excel</span>
                <span>Pivot Table</span>
                <span>Slicers</span>
                <span>Charts</span>
              </div>
            </div>

            <div className="project-card">
              <div className="project-icon">🏪</div>

              <h3>Store Sales Dashboard</h3>

              <p>
                Sales analysis dashboard created to understand
                product performance, sales trends and business KPIs.
              </p>

              <div className="tags">
                <span>Excel</span>
                <span>Dashboard</span>
                <span>KPI</span>
              </div>
            </div>

            <div className="project-card">
              <div className="project-icon">👨‍💼</div>

              <h3>Employee Payroll & Attendance Dashboard</h3>

              <p>
                Dashboard for analyzing employee attendance, salary,
                bonus, deductions, gross salary and net salary.
              </p>

              <div className="tags">
                <span>Excel</span>
                <span>Payroll</span>
                <span>Attendance</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section dark-section">
        <div className="container">

          <p className="section-label">What I Know</p>
          <h2 className="section-title">Technical Skills</h2>

          <div className="skills-grid">

            <div className="skill-card">
              <h3>Languages & Querying</h3>
              <div className="skill-tags">
                <span>Python</span>
                <span>SQL</span>
              </div>
            </div>

            <div className="skill-card">
              <h3>Python Libraries</h3>
              <div className="skill-tags">
                <span>NumPy</span>
                <span>Pandas</span>
                <span>Matplotlib</span>
                <span>Seaborn</span>
              </div>
            </div>

            <div className="skill-card">
              <h3>Data Analysis</h3>
              <div className="skill-tags">
                <span>Data Cleaning</span>
                <span>EDA</span>
                <span>Statistics</span>
                <span>KPI Analysis</span>
                <span>Data Validation</span>
              </div>
            </div>

            <div className="skill-card">
              <h3>BI & Visualization</h3>
              <div className="skill-tags">
                <span>Power BI</span>
                <span>DAX</span>
                <span>Power Query</span>
                <span>Tableau</span>
              </div>
            </div>

            <div className="skill-card">
              <h3>Database & ETL</h3>
              <div className="skill-tags">
                <span>MySQL</span>
                <span>Data Modeling</span>
                <span>ETL Pipelines</span>
              </div>
            </div>

            <div className="skill-card">
              <h3>Tools</h3>
              <div className="skill-tags">
                <span>Advanced Excel</span>
                <span>Git</span>
                <span>GitHub</span>
              </div>
            </div>

          </div>

          {/* Proficiency */}
          <div className="proficiency">

            <h3>Proficiency</h3>

            <div className="progress-item">
              <div>
                <span>Python</span>
                <span>85%</span>
              </div>

              <div className="progress">
                <div style={{ width: "85%" }}></div>
              </div>
            </div>

            <div className="progress-item">
              <div>
                <span>SQL</span>
                <span>90%</span>
              </div>

              <div className="progress">
                <div style={{ width: "90%" }}></div>
              </div>
            </div>

            <div className="progress-item">
              <div>
                <span>Power BI</span>
                <span>85%</span>
              </div>

              <div className="progress">
                <div style={{ width: "85%" }}></div>
              </div>
            </div>

            <div className="progress-item">
              <div>
                <span>Excel</span>
                <span>95%</span>
              </div>

              <div className="progress">
                <div style={{ width: "95%" }}></div>
              </div>
            </div>

            <div className="progress-item">
              <div>
                <span>Data Analysis</span>
                <span>88%</span>
              </div>

              <div className="progress">
                <div style={{ width: "88%" }}></div>
              </div>
            </div>

            <div className="progress-item">
              <div>
                <span>Tableau</span>
                <span>75%</span>
              </div>

              <div className="progress">
                <div style={{ width: "75%" }}></div>
              </div>
            </div>

          </div>

          {/* Soft Skills */}
          <div className="soft-skills">

            <h3>Soft Skills</h3>

            <div className="soft-skill-list">
              <span>Problem Solving</span>
              <span>Communication</span>
              <span>Teamwork</span>
              <span>Analytical Thinking</span>
            </div>

          </div>

        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="section">
        <div className="container">

          <p className="section-label">CERTIFICATIONS</p>
          <h2 className="section-title">Certifications</h2>

          <div className="cert-grid">

            <div className="cert-card">
              <div className="cert-icon">🏆</div>

              <h3>
                Tata - GenAI Powered Data Analytics Job Simulation
              </h3>

              <p>Data Analytics</p>
            </div>

            <div className="cert-card">
              <div className="cert-icon">🏆</div>

              <h3>
                Data Analytics Job Simulation
              </h3>

              <p>Data Analytics</p>
            </div>

            <div className="cert-card">
              <div className="cert-icon">📜</div>

              <h3>
                Introduction to MS Excel
              </h3>

              <p>Microsoft Excel</p>
            </div>

            <div className="cert-card">
              <div className="cert-icon">🐍</div>

              <h3>
                Python Programming - LinkedIn
              </h3>

              <p>Python Programming</p>
            </div>

          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section dark-section">
        <div className="container">

          <p className="section-label">CONTACT</p>
          <h2 className="section-title">Let's Connect</h2>

          <p className="contact-intro">
            Feel free to connect with me for opportunities,
            collaborations or data analytics discussions.
          </p>

          <div className="contact-grid">

            <a
              href="mailto:patildhiraj1702@gmail.com"
              className="contact-card"
            >
              <span>📧</span>

              <div>
                <h3>Email</h3>
                <p>patildhiraj1702@gmail.com</p>
              </div>
            </a>

            <a
              href="tel:9975950728"
              className="contact-card"
            >
              <span>📱</span>

              <div>
                <h3>Phone</h3>
                <p>9975950728</p>
              </div>
            </a>

            <a
              href="https://github.com/dhirajpatil1702"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <span>💻</span>

              <div>
                <h3>GitHub</h3>
                <p>github.com/dhirajpatil1702</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/dhirajpatil07"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <span>🔗</span>

              <div>
                <h3>LinkedIn</h3>
                <p>linkedin.com/in/dhirajpatil07</p>
              </div>
            </a>

          </div>

          <div className="location-text">
            📍 Pune, Maharashtra, India
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="footer">

        <div className="footer-logo">DP</div>

        <p>
          © 2026 Dhiraj Patil. All rights reserved.
        </p>

        <div className="footer-links">

          <a
            href="https://github.com/dhirajpatil1702"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/dhirajpatil07"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

        </div>

        <small>Made with ♥ using React</small>

      </footer>

    </div>
  );
}

export default App;