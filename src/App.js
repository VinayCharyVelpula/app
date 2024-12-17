import React from 'react';
import './styles.css';

function App() {
  return (
    <div>
      {/* Header Section */}
      <nav className="header">
        <h1>My Portfolio</h1>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Home Section */}
      <section id="home" className="section">
        <h2>Welcome to My Portfolio</h2>
        <p>
          Hello! I am a passionate AI/ML student looking to solve real-world problems using 
          Artificial Intelligence and Machine Learning.
        </p>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          I am currently a 3rd-year B.Tech student specializing in Artificial Intelligence 
          and Machine Learning. I enjoy building projects involving data science, machine 
          learning models, and full-stack development.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <h2>My Projects</h2>
        <ul>
          <li>
            <h3>AI Chatbot</h3>
            <p>Built a chatbot using NLP techniques and Python (TensorFlow and Flask).</p>
          </li>
          <li>
            <h3>ML-Based Stock Predictor</h3>
            <p>Developed a stock price predictor using LSTM neural networks.</p>
          </li>
          <li>
            <h3>Portfolio Website</h3>
            <p>This portfolio website built with React.js!</p>
          </li>
        </ul>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <h2>Contact Me</h2>
        <p>Email: yourname@example.com</p>
        <p>
          LinkedIn: <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">My LinkedIn Profile</a>
        </p>
        <p>
          GitHub: <a href="https://github.com" target="_blank" rel="noopener noreferrer">My GitHub</a>
        </p>
      </section>
    </div>
  );
}

export default App;
