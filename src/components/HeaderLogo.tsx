import logoSvg from "../images/logo.svg";

const HeaderLogo = () => {
  return (
    <a
      href="/"
      className="d-flex align-items-center mb-2 mb-lg-0 text-decoration-none"
    >
      <img src={logoSvg} alt="logo" className="bi me-2" />
    </a>
  );
};

export default HeaderLogo;
