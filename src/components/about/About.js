import React from 'react';
import { Section } from 'react-scroll-section';

const About = () => {
  return (
    <Section id="about">
      <div className="lg-container">
        <div className="about">
          <h2 className="about-title">about</h2>
          <h4 className="about-subtitle">
            Let’s face it. Just streaming isn’t enough these days.
          </h4>
          <div className="about-p_container">
            <p className="about-p">
              The greatest content creators in the world have had their personal
              brand for years. They’re well known and stand out from the crowd.
              If you’re new to the scene, you’re going to need more than just
              good content to escape the noise.
            </p>
            <p className="about-p">
              At Platformpro we know your content deserves a proper home- a
              beautiful website to show sponsors, a place to own your content,
              and tools to grow your personal brand without being tied to one
              service. Our completely free website builder let’s you get the
              head start you need.
            </p>
            <p className="about-p">
              Content creators from all over the world are using Platformpro to
              stand out, it’s time to join them.
            </p>
          </div>
          <a
            href="https://platformpro.surveysparrow.com/s/beta/tt-b7a7f5"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-bg"
          >
            get started
          </a>
        </div>
      </div>
    </Section>
  );
};

export default About;
