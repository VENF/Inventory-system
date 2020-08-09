import React, { useState } from 'react';
import { FontAwesomeIcon as FAI } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useHistory, useLocation } from 'react-router-dom';
import { pages } from './pagesList';
import useWindowsDimensions from '../../hooks/useWindowsDimensions';

import './SideMenu.scss';
export default function SideMenu(props) {
  const [showMenu, setShowMenu] = useState(false);
  const history = useHistory();
  const { isSmall } = useWindowsDimensions(599);
  const location = useLocation();

  if (isSmall) {
    return (
      <>
        <span className="show-menu-icon" onClick={() => setShowMenu(!showMenu)}>
          <FAI icon={showMenu ? faTimes : faBars} />
        </span>
        {showMenu && (
          <div className={`side-menu ${props.hidden && 'menu-hidden'}`}>
            <div className="side-menu_menu">
              {pages.map((page) => (
                <span
                  key={page.id}
                  onClick={() => {
                    setShowMenu(false);
                    history.push(page.route);
                  }}
                  className={`side-menu_item ${
                    page.route === location.pathname ? 'active' : ''
                  }`}
                >
                  <FAI className="side-menu_item-icon" icon={page.icon} />
                  {!props.hidden && page.name}
                </span>
              ))}
            </div>
          </div>
        )}
      </>
    );
  } else {
    return (
      <>
        <div className={`side-menu ${props.hidden && 'menu-hidden'}`}>
          <span className="toggle-menu-icon" onClick={props.setHidden}>
            <FAI icon={faBars} />
          </span>
          <div className="side-menu_menu">
            {pages.map((page) => (
              <span
                onClick={() => {
                  history.push(page.route);
                }}
                className={`side-menu_item ${
                  page.route === location.pathname ? 'active' : ''
                }`}
              >
                <FAI className="side-menu_item-icon" icon={page.icon} />
                {!props.hidden && page.name}
              </span>
            ))}
          </div>
        </div>
      </>
    );
  }
}
