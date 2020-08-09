import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router-dom';
import {
  faColumns,
  faCommentDollar,
  faChild,
  faBox,
  faBarcode
} from '@fortawesome/free-solid-svg-icons';
import './SideMenu.scss';

let pages = [
  {
    id: 1,
    name: 'Dashboard',
    icon: faColumns,
    route: '/dashboard'
  },
  {
    id: 2,
    name: 'Sales',
    icon: faCommentDollar,
    route: '/sales'
  },
  {
    id: 3,
    name: 'Clients',
    icon: faChild,
    route: '/clients'
  },
  {
    id: 4,
    name: 'Providers',
    icon: faBox,
    route: '/providers'
  },
  {
    id: 5,
    name: 'Products',
    icon: faBarcode,
    route: 'products'
  }
];

export default function SideMenu() {
  const [activePage, setActivePage] = useState(1);
  const history = useHistory();

  return (
    <>
      <div className="side-menu">
        <div className="side-menu_menu">
          {pages.map((page) => (
            <span
              onClick={() => {
                setActivePage(page.id);
                history.push(page.route);
              }}
              className={`side-menu_item ${page.id === activePage ? 'active' : ''}`}
            >
              <FontAwesomeIcon className="side-menu_item-icon" icon={page.icon} />
              {page.name}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
