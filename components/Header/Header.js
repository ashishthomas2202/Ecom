import React from 'react';
import styles from './Header.module.scss';
import { Brand, Header as HeaderSettings } from '../../utils/settings';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import * as Icons from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  let menu = (
    <ul className={styles.menu}>
      {HeaderSettings.menu.map((item, i) => {
        let element = item.name;

        if (item.link) {
          element = (
            <Link href={item.link} passHref>
              {element}
            </Link>
          );
        }
        return <li key={`header-menu-item-${item.name}-${i}`}>{element}</li>;
      })}
    </ul>
  );

  let action = (
    <ul className={styles.action}>
      {HeaderSettings.action.map((item, i) => {
        let element = item.name;

        if (item.faIcon) {
          element = <FontAwesomeIcon icon={['fas', item.faIcon]} />;
        }

        if (item.container) {
          let shape = item.container.shape;
          let backgroundColor = item.container.backgroundColor;
          let color = item.container.color;
          element = (
            <div className={styles[shape]} style={{ backgroundColor, color }}>
              {element}
            </div>
          );
        }

        if (item.link) {
          element = (
            <Link href={item.link} passHref>
              {element}
            </Link>
          );
        }
        return <li key={`header-action-item-${item.name}-${i}`}>{element}</li>;
      })}
    </ul>
  );

  let user = (
    <ul className={styles.user}>
      <li>Home</li>
    </ul>
  );
  return (
    <nav className={styles.header}>
      <div className={styles.brand}>{Brand.name}</div>
      <div className={styles.fullMenu}>
        {menu}
        {action}
        {user}
      </div>
    </nav>
  );
}
