import logoWhiteSvg from '../images/logo-white.svg';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPinterest } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <footer className="py-5 bg-dark text-white">
      <div className="container-fluid">
        <div className="row row-cols-1 row-cols-sm-6 max-shorten mx-auto">
          <div className="col text-sm-start text-center mb-4">
            <img src={logoWhiteSvg} alt="Logo" />
          </div>
          <div className="col"> </div>
          <div className="col text-sm-start text-center mb-4">
            <h5 className="mb-4">Features</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-1">
                <a href="/" className="text-info footer-nav-link">
                  Link Shortening
                </a>
              </li>
              <li className="nav-item mb-1">
                <a href="/" className="text-info footer-nav-link">
                  Branded Links
                </a>
              </li>
              <li className="nav-item mb-1">
                <a href="/" className="text-info footer-nav-link">
                  Analytics
                </a>
              </li>
            </ul>
          </div>
          <div className="col text-sm-start text-center mb-4">
            <h5 className="mb-4">Resources</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-1">
                <a href="/" className="text-info footer-nav-link">
                  Blog
                </a>
              </li>
              <li className="nav-item mb-1">
                <a href="/" className="text-info footer-nav-link">
                  Developers
                </a>
              </li>
              <li className="nav-item mb-1">
                <a href="/" className="text-info footer-nav-link">
                  Support
                </a>
              </li>
            </ul>
          </div>
          <div className="col text-sm-start text-center mb-4">
            <h5 className="mb-4">Company</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-1">
                <a href="/" className="text-info footer-nav-link">
                  About
                </a>
              </li>
              <li className="nav-item mb-1">
                <a href="/" className="text-info footer-nav-link">
                  Our Team
                </a>
              </li>
              <li className="nav-item mb-1">
                <a href="/" className="text-info footer-nav-link">
                  Careers
                </a>
              </li>
              <li className="nav-item mb-1">
                <a href="/" className="text-info footer-nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <ul className="nav col justify-content-sm-start justify-content-center list-unstyled d-flex px-0">
            <li className="me-3">
              <a
                href="https://www.facebook.com"
                className="text-white footer-nav-link"
                target="_blank"
                rel="noreferrer">
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </a>
            </li>
            <li className="me-3">
              <a
                href="https://www.twitter.com"
                className="text-white footer-nav-link"
                target="_blank"
                rel="noreferrer">
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
            </li>
            <li className="me-3">
              <a
                href="https://www.pinterest.com"
                className="text-white footer-nav-link"
                target="_blank"
                rel="noreferrer">
                <FontAwesomeIcon icon={faPinterest} size="lg" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com"
                className="text-white footer-nav-link"
                target="_blank"
                rel="noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
