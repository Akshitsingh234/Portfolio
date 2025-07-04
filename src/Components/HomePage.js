// Make sure the path and filename are correct
import React, { useEffect, useRef } from 'react';
import Navbar from './Navbar';
import myphoto from './assets/myphoto.jpg';
import java from './assets/java.jpg';
export default function HomePage() {
  const techGridRef = useRef(null);

  useEffect(() => {
    // Add animated class after mount for initial reveal
    if (techGridRef.current) {
      setTimeout(() => {
        techGridRef.current.classList.add('animated');
      }, 900); // match the heading animation delay
    }
  }, []);

  return (
    <div className="homepage-bg">
      <Navbar />

      {/* Hero Section or Intro */}
      <section className="hero-section container-fluid d-flex align-items-center justify-content-center">
        <div className="row w-100 align-items-center">
          {/* Left: Text */}
          <div className="col-md-7 col-12 hero-text">
            <h1 className="display-2 fw-bold mb-3">Akshit Singh</h1>
            <h2 className="mb-4">
              <span className="gradient-text">Full Stack Developer</span>
            </h2>
            <p className="lead hero-desc">
              Love to Code in Java,<br />
              Akshit, Computer Science student specializing in AI and Machine Learning,<br />
              with expertise in full-stack development using Java, Spring Boot, ReactJS, and MySQL.<br />
              Skilled in building scalable web Application like MediPlan and Employee Management System with AI integrations.<br />
              With a strong foundation in data structures, algorithms, and competitive programming (LeetCode, CodeChef, HackerRank).
            </p>
          </div>
          {/* Right: Image */}
          <div className="col-md-5 col-12 d-flex justify-content-center align-items-center hero-img-col">
            <img
              src={myphoto}
              alt="Akshit Singh"
              className="hero-img"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section container-fluid d-flex align-items-center justify-content-center">
        <div className="about-box row w-100 align-items-center mx-auto">
          {/* Left: About Image */}
          <div className="col-md-6 col-12 d-flex justify-content-center align-items-center about-img-col position-relative">
         <img
  src={java}
  alt="Akshit About"
  className="about-img"
/>
          </div>
          {/* Right: About Text */}
          <div className="col-md-6 col-12 about-text d-flex flex-column justify-content-center align-items-start position-relative" style={{zIndex: 2}}>
            <h1 className="about-title">
              About <span className="about-gradient">Me</span>
            </h1>
            <div className="about-underline"></div>
            <p className="about-desc">
              A Dedicated Computer Science student at KIET Group of Institutions, I specialize in AI, ML, and full-stack development,
              with proficiency in Java, Spring Boot, ReactJS, MySQL, MongoDB, AWS cloud.<br />
              My passion for problem-solving has led me to develop robust applications like MediPlan, a healthcare platform, and excel in
              competitive programming on LeetCode (top 15% globally), CodeChef, and HackerRank.<br />
              With hands-on experience in RESTful APIs, cloud integration (AWS), and responsive UI design with Tailwind CSS, I thrive in dynamic environments.<br />
              I actively contribute to open-source projects and stay updated with emerging technologies like microservices and DevOps to deliver high-quality, scalable solutions.
            </p>
            <div className="about-stats row text-center mt-4 w-100">
              <div className="col-4">
                <span className="about-stat-num">1+</span>
                <div className="about-stat-label">Years Project Experience</div>
              </div>
              <div className="col-4">
                <span className="about-stat-num">10+</span>
                <div className="about-stat-label">Projects</div>
              </div>
              <div className="col-4">
                <span className="about-stat-num">8+</span>
                <div className="about-stat-label">Technologies</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="tech-section container-fluid d-flex flex-column align-items-center justify-content-center">
        <h2 className="tech-title">
          <span className="tech-gradient">Technologies</span>
          <div className="tech-underline"></div>
        </h2>
        <div className="tech-icons-grid" ref={techGridRef}>
          <div className="tech-icon-card"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React.js"/><span>React.js</span></div>
          <div className="tech-icon-card"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" alt="Redux"/><span>Redux</span></div>
          <div className="tech-icon-card"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript"/><span>JavaScript</span></div>
          <div className="tech-icon-card"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5"/><span>HTML5</span></div>
          <div className="tech-icon-card"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3"/><span>CSS3</span></div>
          <div className="tech-icon-card"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" alt="TailwindCSS"/><span>TailwindCSS</span></div>
          <div className="tech-icon-card"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB"/><span>MongoDB</span></div>
          <div className="tech-icon-card"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL"/><span>MySQL</span></div>
          <div className="tech-icon-card"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL"/><span>PostgreSQL</span></div>
          <div className="tech-icon-card"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" alt="Spring Boot"/><span>Spring Boot</span></div>
          <div className="tech-icon-card"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java"/><span>Java</span></div>
          <div className="tech-icon-card"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python"/><span>Python</span></div>
          <div className="tech-icon-card"><img src="https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png" alt="Vercel"/><span>Vercel</span></div>
          <div className="tech-icon-card"><img src="https://seeklogo.com/images/N/netlify-logo-758722CDF4-seeklogo.com.png" alt="Netlify"/><span>Netlify</span></div>
          <div className="tech-icon-card"><img src="https://avatars.githubusercontent.com/u/41790540?s=200&v=4" alt="Render"/><span>Render</span></div>
          <div className="tech-icon-card"><img src="https://railway.app/brand/logo-dark.png" alt="Railway"/><span>Railway</span></div>
          <div className="tech-icon-card"><img src="https://seeklogo.com/images/O/openai-logo-8B9BFEDC26-seeklogo.com.png" alt="OpenAI API"/><span>OpenAI API</span></div>
          <div className="tech-icon-card"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub"/><span>GitHub</span></div>
          <div className="tech-icon-card"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git"/><span>Git</span></div>
          <div className="tech-icon-card"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker"/><span>Docker</span></div>
          <div className="tech-icon-card"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" alt="Linux"/><span>Linux</span></div>
          <div className="tech-icon-card"><img src="https://avatars.githubusercontent.com/u/139895814?s=200&v=4" alt="shadcn/ui"/><span>shadcn/ui</span></div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section container-fluid d-flex flex-column align-items-center justify-content-center">
        <h2 className="contact-title">
          <span className="contact-gradient">Get in <span className="contact-gradient2">Touch</span></span>
        </h2>
        <div className="contact-cards-row row justify-content-center mt-4">
          {/* Address */}
          <div className="contact-card col-md-4 col-12 mb-4 mb-md-0">
            <div className="contact-icon"><span role="img" aria-label="location" style={{fontSize: "2rem"}}>📍</span></div>
            <div className="contact-label">Address</div>
            <div className="contact-value">
              KIET Group of Institutions,<br />
              Ghaziabad, Uttar Pradesh, India
            </div>
            <a href="https://maps.google.com/?q=KIET+Group+of+Institutions,+Ghaziabad" target="_blank" rel="noopener noreferrer" className="contact-link">View on Google Maps</a>
          </div>
          {/* Phone */}
          <div className="contact-card col-md-4 col-12 mb-4 mb-md-0 contact-card-highlight">
            <div className="contact-icon"><span role="img" aria-label="phone" style={{fontSize: "2rem", color: "#d726ff"}}>📞</span></div>
            <div className="contact-label">Phone</div>
            <div className="contact-value">
              <a href="tel:+919027856170" className="contact-link">+91-9027856170</a>
            </div>
            <a href="sms:+919027856170" className="contact-link">Send SMS</a>
          </div>
          {/* Email */}
          <div className="contact-card col-md-4 col-12">
            <div className="contact-icon"><span role="img" aria-label="email" style={{fontSize: "2rem", color: "#d726ff"}}>✉️</span></div>
            <div className="contact-label">Email</div>
            <div className="contact-value">
              <a href="mailto:akshitsingh885@gmail.com" className="contact-link">akshitsingh885@gmail.com</a>
            </div>
            <a href="mailto:akshitsingh885@gmail.com" className="contact-link">Send Email</a>
          </div>
        </div>
        <style>{`
          .contact-section {
            margin: 100px auto 0 auto;
            width: 100%;
            max-width: 1700px;
            padding-bottom: 60px;
          }
          .contact-title {
            font-size: 2.6rem;
            font-weight: 700;
            text-align: center;
            margin-bottom: 2.5rem;
            margin-top: 0;
          }
          .contact-gradient {
            background: linear-gradient(90deg, #ff5f6d 0%, #d726ff 60%, #2ec4e6 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          .contact-gradient2 {
            background: linear-gradient(90deg, #d726ff 0%, #2ec4e6 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          .contact-cards-row {
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            flex-wrap: wrap;
            gap: 24px;
          }
          .contact-card {
  background: #141414;
  border-radius: 22px;
  box-shadow: 0 4px 32px 0 rgba(0,0,0,0.10);
  padding: 32px 32px 24px 32px;
  min-width: 270px;
  max-width: 370px;
  flex: 1 1 300px;
  margin: 0 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 2px solid transparent;
  transition: border 0.3s, box-shadow 0.35s cubic-bezier(.77,0,.18,1), transform 0.25s cubic-bezier(.77,0,.18,1);
}
          .contact-card:hover {
  box-shadow: 0 2px 16px 0 #845ec2, 0 1px 8px 0 #2ec4e6, 0 0 8px 0 #ff5f6d;
  border: 2px solid #d726ff;
  transform: translateY(-4px) scale(1.015);
  z-index: 2;
}
          .contact-icon {
            margin-bottom: 12px;
          }
          .contact-label {
            font-size: 1.5rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
            color: #fff;
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }
          .contact-value {
            font-size: 1.1rem;
            color: #e0e0e0;
            margin-bottom: 0.7rem;
            word-break: break-all;
          }
          .contact-link {
            color: #d726ff;
            text-decoration: underline;
            font-size: 1rem;
            margin-top: 0.2rem;
            display: inline-block;
            transition: color 0.2s;
          }
          .contact-link:hover {
            color: #2ec4e6;
          }
          @media (max-width: 991px) {
            .contact-cards-row {
              flex-direction: column;
              align-items: center;
              gap: 24px;
            }
            .contact-card {
              max-width: 95vw;
              min-width: 0;
              width: 100%;
              margin: 0 0 24px 0;
            }
          }
          @media (max-width: 767px) {
            .contact-title {
              font-size: 2rem;
            }
            .contact-card {
              padding: 18px 10px 14px 10px;
              border-radius: 12px;
            }
            .contact-label {
              font-size: 1.1rem;
            }
            .contact-value {
              font-size: 0.95rem;
            }
          }
        `}</style>
      </section>

      <footer className="footer-section" style={{marginBottom: "40px"}}>
  <div className="footer-diffbox container-fluid">
    <div className="row justify-content-between align-items-start flex-wrap">
      {/* Contact Me */}
      <div className="col-lg-4 col-md-5 col-12 mb-4 mb-lg-0 d-flex flex-column align-items-lg-start align-items-center">
        <h3 className="footer-title mb-3">
          Contact <span className="footer-gradient">Me</span>
        </h3>
        <div className="footer-contact-list">
          <div className="footer-contact-item">
            <span className="footer-contact-icon" role="img" aria-label="location">📍</span>
            KIET Group of Institutions, Ghaziabad, Uttar Pradesh, India
          </div>
          <div className="footer-contact-item">
            <span className="footer-contact-icon" role="img" aria-label="phone">📞</span>
            <a href="tel:+918542029975" className="footer-link">+91-9027856170</a>
          </div>
          <div className="footer-contact-item">
            <span className="footer-contact-icon" role="img" aria-label="email">✉️</span>
            <a href="mailto:shaanyworkspace@gmail.com" className="footer-link">akshitsingh885@gmail.com</a>
          </div>
        </div>
      </div>
      {/* Quick Links */}
      <div className="col-lg-4 col-md-4 col-12 mb-4 mb-lg-0 d-flex flex-column align-items-lg-center align-items-center">
        <h3 className="footer-title mb-3">
          Quick <span className="footer-gradient">Links</span>
        </h3>
        <ul className="footer-links-list">
          <li><a href="#home" className="footer-link">→ Home</a></li>
          <li><a href="#about" className="footer-link">→ About</a></li>
          <li><a href="#projects" className="footer-link">→ Projects</a></li>
          <li><a href="#experience" className="footer-link">→ Experience</a></li>
        </ul>
      </div>
      {/* Connect */}
      <div className="col-lg-4 col-md-3 col-12 d-flex flex-column align-items-lg-end align-items-center">
        <h3 className="footer-title mb-3">
          Connect
        </h3>
        <div className="footer-socials mb-2">
          <a href="https://github.com/shaanyadav" target="_blank" rel="noopener noreferrer" className="footer-social-icon"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" width="40" /></a>
          <a href="https://www.linkedin.com/in/akshit-soni-8899a32a5/" target="_blank" rel="noopener noreferrer" className="footer-social-icon"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" width="40" /></a>
          <a href="https://medium.com/@shaanyworkspace" target="_blank" rel="noopener noreferrer" className="footer-social-icon"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/medium/medium-original.svg" alt="Medium" width="40" /></a>
        </div>
        <div className="footer-connect-text text-lg-end text-center">
          Let's connect & build something <span className="footer-gradient">amazing</span>!
        </div>
      </div>
    </div>
    <hr className="footer-divider" />
    <div className="footer-bottom text-center">
      © 2025 <span className="footer-gradient" style={{fontWeight: 700}}>Akshit singh</span>. All rights reserved.<br />
      Built with <span className="footer-gradient" style={{fontWeight: 700}}>ReactJS & Tailwind CSS</span>
    </div>
  </div>
  <style>{`
    .footer-diffbox {
      background: #0a0a0a;
      border-radius: 18px;
      box-shadow: 0 8px 40px 0 #18182844;
      padding: 48px 32px 24px 32px;
      margin: 0 auto 40px auto;
      max-width: 1600px;
    }
    .footer-title {
      font-size: 2.2rem;
      font-weight: 700;
      letter-spacing: 1px;
      text-align: left;
    }
    .footer-gradient {
      background: linear-gradient(90deg, #ff5f6d 0%, #d726ff 60%, #2ec4e6 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .footer-contact-list {
      margin-top: 1.2rem;
    }
    .footer-contact-item {
      display: flex;
      align-items: center;
      font-size: 1.18rem;
      margin-bottom: 1.1rem;
      color: #e0e0e0;
      gap: 0.7rem;
    }
    .footer-contact-icon {
      font-size: 1.7rem;
      color: #d726ff;
      min-width: 2rem;
      display: inline-block;
    }
    .footer-link {
      color: #d726ff;
      text-decoration: underline;
      transition: color 0.2s;
      margin-left: 0.2rem;
      word-break: break-all;
    }
    .footer-link:hover {
      color: #2ec4e6;
    }
    .footer-links-list {
      list-style: none;
      padding: 0;
      margin: 0;
      text-align: left;
    }
    .footer-links-list li {
      margin-bottom: 0.8rem;
      font-size: 1.13rem;
    }
    .footer-socials {
      display: flex;
      gap: 24px;
      margin-bottom: 1.2rem;
      margin-top: 0.5rem;
      justify-content: flex-end;
    }
    .footer-social-icon img {
      background: #181828;
      border-radius: 50%;
      padding: 7px;
      border: 2px solid #23232b;
      transition: border 0.2s, box-shadow 0.2s;
      width: 48px;
      height: 48px;
    }
    .footer-social-icon img:hover {
      border: 2px solid #d726ff;
      box-shadow: 0 0 12px #d726ff44;
    }
    .footer-connect-text {
      color: #e0e0e0;
      font-size: 1.13rem;
      margin-top: 0.5rem;
    }
    .footer-divider {
      border: none;
      border-top: 1px solid #23232b;
      margin: 36px 0 18px 0;
    }
    .footer-bottom {
      font-size: 1.08rem;
      color: #bdbdbd;
      margin-bottom: 0;
    }
    @media (max-width: 991px) {
      .footer-diffbox {
        padding: 32px 8px 18px 8px;
      }
      .footer-title {
        font-size: 1.5rem;
        text-align: center;
      }
      .footer-socials {
        justify-content: center;
      }
      .footer-bottom {
        font-size: 0.98rem;
      }
    }
    @media (max-width: 767px) {
      .footer-diffbox {
        padding: 18px 2vw 10px 2vw;
        border-radius: 10px;
      }
      .footer-title {
        font-size: 1.2rem;
      }
      .footer-contact-item {
        font-size: 1rem;
      }
      .footer-bottom {
        font-size: 0.93rem;
      }
      .footer-social-icon img {
        width: 36px;
        height: 36px;
        padding: 4px;
      }
    }
  `}</style>
</footer>

      <style>{`
        .homepage-bg {
  min-height: 100vh;
  background: radial-gradient(ellipse at 80% 40%, #3a1c71 0%, #181818 70%) fixed,
              linear-gradient(120deg, rgba(44,62,80,0.18) 0%, rgba(18,18,18,0.98) 100%) fixed;
  color: #fff;
  /* Add a subtle blue glow around the edges */
  box-shadow: 0 0 120px 40px rgba(44, 156, 255, 0.10) inset;
}
.hero-section {
  max-width: 1400px;
  margin: 60px auto 0 auto;
  background: linear-gradient(180deg, #111 0%, #0a0a0a 100%);
  border-radius: 16px;
  box-shadow: 0 0 0 1px #181818, 0 8px 40px 0 rgba(0,0,0,0.18);
  padding: 60px 60px 40px 60px;
}
        .hero-text h1 {
          font-size: 4rem;
          font-weight: 700;
          letter-spacing: 2px;
        }
        .hero-text h1 {
  font-size: 4rem;
  font-weight: 500;
  color: #e0e0e0;
  letter-spacing: 2px;
}
.gradient-text {
  background: linear-gradient(90deg, #ff5f6d 0%, #845ec2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.hero-desc {
  font-size: 1.15rem;
  color: #f5f5f5;
  margin-top: 1.5rem;
  line-height: 1.7;
}
.hero-img {
  width: 420px;
  height: 420px;
  object-fit: cover;
  border-radius: 24px;
  box-shadow: 0 0 32px 0 #845ec2, 0 2px 16px 0 rgba(0,0,0,0.18);
  border: 4px solid #232526;
  background: #181818;
  transition: box-shadow 0.3s, transform 0.3s;
}

.hero-img:hover {
  transform: scale(1.06);
  box-shadow: 0 0 48px 0 #2ec4e6, 0 2px 32px 0 #ff5f6d;
  z-index: 2;
}
.hero-img-col {
  display: flex;
  justify-content: center;
  align-items: center;
}
        /* About Section */
        .about-section {
          margin-top: 40px;
          padding: 40px 0 0 0;
        }
        .about-box {
          background: linear-gradient(180deg, rgba(18,18,18,0.98) 0%, rgba(10,10,10,0.98) 100%);
          border-radius: 24px;
          box-shadow: 0 4px 32px 0 rgba(0,0,0,0.10);
          padding: 40px 40px 32px 40px;
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
          margin-bottom: 60px;
          border: none;
        }
       .about-img {
  width: 480px;
  height: 320px;
  object-fit: cover;
  border-radius: 40px;
  border: 4px solid #232526;
  box-shadow: 0 0 64px 0 #845ec2, 0 2px 24px 0 rgba(0,0,0,0.18);
  background: #181818;
  transition: box-shadow 0.3s, transform 0.3s;
  margin-bottom: 24px;
}
.about-img:hover {
  transform: scale(1.08);
  box-shadow: 0 0 80px 0 #2ec4e6, 0 0 120px 0 #ff5f6d, 0 2px 48px 0 #d726ff;
  z-index: 2;
}
        @media (max-width: 991px) {
          .about-img {
            width: 320px;
            height: 200px;
          }
        }
        @media (max-width: 767px) {
          .about-img {
            width: 95vw;
            height: 160px;
            border-radius: 18px;
          }
        }
        .about-title {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }
        .about-gradient {
          background: linear-gradient(90deg, #ff5f6d 0%, #845ec2 60%, #2ec4e6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .about-underline {
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #ff5f6d 0%, #2ec4e6 100%);
          border-radius: 2px;
          margin-bottom: 1.5rem;
        }
        .about-desc {
          font-size: 1.15rem;
          color: #f5f5f5;
          line-height: 1.7;
        }
        .about-stats {
          margin-top: 2rem;
        }
        .about-stat-num {
          font-size: 2.2rem;
          font-weight: 700;
          background: linear-gradient(90deg, #ff5f6d 0%, #d72660 40%, #845ec2 80%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          display: block;
        }
        .about-stat-label {
          font-size: 1rem;
          color: #e0e0e0;
          margin-top: 0.3rem;
        }
        .tech-section {
  margin: 60px auto 0 auto;
  max-width: 1700px;
  width: 100%;
  padding-bottom: 60px;
}
.tech-title {
  font-size: 2.6rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 0.5rem;
  margin-top: 0;
  opacity: 0;
  transform: translateY(40px);
  animation: techTitleUp 0.8s cubic-bezier(.77,0,.18,1) 0.1s forwards;
  cursor: pointer;
  position: relative;
}
@keyframes techTitleUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.tech-underline {
  width: 120px;
  height: 5px;
  background: linear-gradient(90deg, #ff5f6d 0%, #2ec4e6 100%);
  border-radius: 2px;
  margin: 0.5rem auto 2.5rem auto;
  transition: width 0.4s cubic-bezier(.77,0,.18,1);
}

.tech-title:hover .tech-underline,
.tech-title:focus .tech-underline {
  width: 200px;
}

.tech-icons-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 32px 32px;
  justify-content: center;
  align-items: flex-start;
  margin: 0 auto;
  max-width: 1700px;
  opacity: 0;
  transform: translateY(40px);
  pointer-events: none;
  transition: opacity 0.7s cubic-bezier(.77,0,.18,1), transform 0.7s cubic-bezier(.77,0,.18,1);
}

.tech-title:hover + .tech-icons-grid,
.tech-title:focus + .tech-icons-grid {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}

/* Show grid by default after animation (for accessibility and initial load) */
.tech-icons-grid.animated {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}

/* Add this JS in your component to add the .animated class after mount */
        @media (max-width: 767px) {
          .tech-title {
            font-size: 2rem;
          }
          .tech-underline {
            width: 60px;
            height: 3px;
            margin-bottom: 1.2rem;
          }
          .tech-title:hover .tech-underline,
          .tech-title:focus .tech-underline {
            width: 100px;
          }
        }
.tech-icons-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 32px 32px;
  justify-content: center;
  align-items: flex-start;
  margin: 0 auto;
  max-width: 1700px;
}
.tech-icon-card {
  background: linear-gradient(180deg, #19191a 60%, #111 100%);
  border: 4px solid #23232b;
  border-radius: 18px;
  box-shadow: 0 0 32px 0 #181828, 0 2px 8px 0 rgba(0,0,0,0.18);
  width: 150px;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: box-shadow 0.3s, border 0.3s, transform 0.2s;
  margin-bottom: 0;
  position: relative;
}
.tech-icon-card img {
  width: 60px;
  height: 60px;
  object-fit: contain;
  margin-bottom: 12px;
  filter: drop-shadow(0 0 8px #23232b);
}
.tech-icon-card span {
  color: #fff;
  font-size: 1.1rem;
  font-weight: 500;
  text-align: center;
  margin-top: 2px;
  letter-spacing: 0.5px;
}
.tech-icon-card:hover {
  box-shadow: 0 0 32px 0 #845ec2, 0 2px 16px 0 rgba(0,0,0,0.18);
  border: 4px solid #845ec2;
  transform: translateY(-8px) scale(1.06);
  z-index: 2;
}
.tech-icon-card:nth-child(13):hover {
  box-shadow: 0 0 48px 0 #a259ff, 0 2px 16px 0 rgba(0,0,0,0.18);
  border: 4px solid #a259ff;
}
@media (max-width: 991px) {
          .hero-section {
            padding: 40px 0 20px 0;
          }
          .hero-text h1 {
            font-size: 2.5rem;
          }
          .hero-img {
            width: 180px;
            height: 180px;
          }
          .about-title {
            font-size: 2rem;
          }
          .about-img {
            width: 140px;
            height: 140px;
          }
          .about-box {
            padding: 24px 12px 18px 12px;
            border-radius: 16px;
          }
        }
        @media (max-width: 767px) {
          .hero-section {
            flex-direction: column;
            padding: 24px 0 10px 0;
          }
          .hero-img-col {
            margin-top: 2rem;
          }
          .about-section {
            flex-direction: column;
            padding: 24px 0 0 0;
          }
          .about-img-col {
            margin-bottom: 1.5rem;
          }
          .about-box {
            padding: 12px 2vw 12px 2vw;
            border-radius: 10px;
          }
          .tech-section {
    padding-bottom: 24px;
  }
  .tech-title {
    font-size: 2rem;
  }
  .tech-icon-card {
    width: 90px;
    height: 90px;
    border-radius: 12px;
  }
  .tech-icon-card img {
    width: 36px;
    height: 36px;
    margin-bottom: 6px;
  }
  .tech-icon-card span {
    font-size: 0.8rem;
  }
  .tech-underline {
    width: 60px;
    height: 3px;
    margin-bottom: 1.2rem;
  }
}
      `}</style>
    </div>
  );
}
