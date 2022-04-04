import React from 'react';
import styles from './Header.module.scss';
import { Brand, Header as HeaderSettings } from '../../utils/settings';
import Link from 'next/link';

export default function Header() {
  let menu = (
    <ul className={styles.menu}>
      {HeaderSettings.menu.map((item, i) => {
        let element = item.name;

        if (item.link) {
          element = <Link href={item.link}>{element}</Link>;
        }
        return <li key={`header-menu-item-${item.name}-${i}`}>{element}</li>;
      })}
    </ul>
  );

  let action = (
    <ul className={styles.action}>
      <li>Home</li>
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
