const MobileMenu = () => {
  return (
    <ul className="nav flex-column text-center bg-secondary rounded p-4 mx-2">
      <li className="nav-item">
        <a href="/" className="nav-link fw-bold text-white p-3">
          Features
        </a>
      </li>
      <li className="nav-item">
        <a href="/" className="nav-link fw-bold text-white p-3">
          Pricing
        </a>
      </li>
      <li className="nav-item menu-divider">
        <a href="/" className="nav-link fw-bold text-white p-3 pb-4">
          Resources
        </a>
      </li>
      <li className="nav-item p-3">
        <button
          type="button"
          className="btn btn-outline-info text-white border-0 fw-bold rounded-pill">
          Login
        </button>
      </li>
      <li className="nav-item d-grid">
        <button
          type="button"
          className="btn btn-primary text-white fw-bold rounded-pill">
          Sign Up
        </button>
      </li>
    </ul>
  );
};

export default MobileMenu;
