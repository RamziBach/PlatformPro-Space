import React from 'react';
import { useScrollSection } from 'react-scroll-section';

import LandingInterstellar from './interstellar/LandingInterstellar';

import logo from '../../images/light-logo_sm.svg';

const Footer = () => {
  const aboutSection = useScrollSection('about');
  const builderSection = useScrollSection('builder');
  const featuresSection = useScrollSection('features');

  return (
    <footer className="footer">
      <LandingInterstellar />
      <img className="footer-logo" src={logo} alt="logo" />
      <div className="sm-container">
        <div className="footer-ul_container">
          <ul className="footer-ul_menu">
            <li>
              <button
                className="footer-a_menu"
                onClick={aboutSection.onClick}
                selected={aboutSection.selected}
              >
                ABOUT
              </button>
            </li>
            <li>
              <button
                className="footer-a_menu"
                onClick={builderSection.onClick}
                selected={builderSection.selected}
              >
                BUILDER
              </button>
            </li>
            <li>
              <button
                className="footer-a_menu"
                onClick={featuresSection.onClick}
                selected={featuresSection.selected}
              >
                FEATURES
              </button>
            </li>
            <li>
              <button className="footer-a_menu">BLOG</button>
            </li>
            <li>
              <button className="footer-a_menu">BRAND</button>
            </li>
          </ul>
        </div>
        <div className="footer-legal_container">
          <button className="footer-legal_links">Legal</button>
          <button className="footer-legal_links">Privacy</button>
          <button className="footer-legal_links">Terms of Service</button>
        </div>
        <div className="footer-socials_container">
          <button className="footer-socials_btn">
            <span>
              <i className="footer-icons fab fa-facebook-f"></i>
            </span>
          </button>
          <button className="footer-socials_btn">
            <span>
              <i className="footer-icons fab fa-twitter"></i>
            </span>
          </button>
          <button className="footer-socials_btn">
            <span>
              <i className="footer-icons fab fa-instagram"></i>
            </span>
          </button>
          <button className="footer-socials_btn">
            <span>
              <i className="footer-icons fab fa-twitch"></i>
            </span>
          </button>
        </div>
        <div className="legal-container">
          <p className="footer-platformpro">~ PLATFORMPRO ~</p>
          <p className="copyright">
            <span className="copyright-text_container">
              Copyright &copy; {new Date().getFullYear()}.
            </span>
          </p>
          <p className="copyright">
            <span className="copyright-text_container">
              All rights reserved. Developed by{' '}
            </span>
            <span className="ramzi-container">
              <a
                className="ramzi"
                href="https://ramzibach.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                Ramzi Bach.
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
