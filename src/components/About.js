import React from 'react';
import '../App.css';
import profileImg from '../assets/2648938.jpg';

function About() {
  return (
    <section id="about" className="about-section py-5">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold text-primary">About Me</h2>

        <div className="row align-items-center">
          <div className="col-md-4 text-center mb-4 mb-md-0">
            <img
              src={profileImg}
              alt="Profile"
              className="rounded-circle shadow"
              style={{ width: '200px', height: '200px', objectFit: 'cover' }}
            />
          </div>
          <div className="col-md-8">
            <div className="card shadow p-4 border-0 bg-white bg-opacity-75">
              <h4 className="text-dark mb-3">DevOps Engineer | Cloud Engineer</h4>
              <p className="text-muted">
                I’m <strong>Ambika Chatra</strong> Aspiring DevOps Engineer  <strong>Cloud Engineer</strong> with expertise in cloud platforms, automation, 
                and CI/CD pipelines. I specialize in designing and maintaining scalable, secure, and production-ready infrastructure, 
                ensuring smooth deployments and reliable operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
