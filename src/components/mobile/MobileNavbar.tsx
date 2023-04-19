import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import HeaderLogo from '../HeaderLogo';
import MobileMenu from './MobileMenu';

const MobileNavbar = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  const onMenuClick = () => setShowMenu(!showMenu);

  /* 
    I elected to duplicate the container-fluid element in this component and DesktopNavbar.
    generally I try to avoid duplication whnever possible.  but, if we leave container-fluid in the base Header component,
    then we would need to setup child->parent->child communication, as the MobileMenu component would need to be
    on the Header component, and this component would need to communicate back to Header that the menu should be opened.  
    I want to be clear that I could do this, but sometimes the best code is the code you do not write.  
    so I went with this approach instead, because it is a lot simpler. 
  */
  return (
    <div className="container-fluid">
      <div className="d-flex flex-wrap justify-content-start">
        <HeaderLogo />
        <div className="me-auto"></div>
        <div className="text-end">
          <button
            className="btn btn-default mb-3"
            type="button"
            onClick={onMenuClick}
            data-testid="menu-button">
            <FontAwesomeIcon icon={faBars} size="lg" />
          </button>
        </div>
      </div>
      {showMenu && <MobileMenu />}
    </div>
  );
};

export default MobileNavbar;
