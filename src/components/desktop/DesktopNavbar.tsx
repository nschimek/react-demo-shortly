import HeaderLogo from '../HeaderLogo';

const DesktopNavbar = () => {
  return (
    <div className="container-fluid">
      <div className="d-flex flex-wrap justify-content-center">
        <HeaderLogo />
        <ul className="nav col-12 ms-sm-3 col-lg-auto me-sm-auto mb-2 justify-content-center mb-sm-0">
          <li>
            <a href="/" className="nav-link nav-link-dt text-info fw-bold px-3">
              Features
            </a>
          </li>
          <li>
            <a href="/" className="nav-link nav-link-dt text-info fw-bold px-3">
              Pricing
            </a>
          </li>
          <li>
            <a href="/" className="nav-link nav-link-dt text-info fw-bold px-3">
              Resources
            </a>
          </li>
          <li />
        </ul>
        <div className="col-lg-3 text-end">
          <button
            type="button"
            className="btn btn-outline-info border-0 fw-bold rounded-pill me-2">
            Login
          </button>
          <button
            type="button"
            className="btn btn-primary fw-bold text-white rounded-pill">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default DesktopNavbar;
