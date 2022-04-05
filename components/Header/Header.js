import React from 'react';
import styles from './Header.module.scss';
import { Brand, Header as HeaderSettings, Pages } from '../../utils/settings';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import * as Icons from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  /********************* Brand *********************/
  let brand = (
    <div className={styles.brand}>
      <Link href={Pages.landing.link} passHref>
        {Brand.name}
      </Link>
    </div>
  );

  let search = (
    <div className={styles.search}>
      <FontAwesomeIcon icon={['fas', 'fa-magnifying-glass']} />
    </div>
  );
  /********************* Main Menu *********************/
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

  /********************* Action Menu *********************/

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
            <Link href={item.link}>
              <span>{element}</span>
            </Link>
          );
        }
        return <li key={`header-action-item-${item.name}-${i}`}>{element}</li>;
      })}
    </ul>
  );

  /********************* User Menu *********************/
  let user = (
    <ul className={styles.user}>
      {HeaderSettings.user.map((item, i) => {
        let element = item.name;

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
        return <li key={`header-menu-item-${item.name}-${i}`}>{element}</li>;
      })}
    </ul>
  );

  return (
    <nav className={styles.header}>
      <div className={styles.fullMenu}>
        {brand}
        {menu}
        {action}
        {user}
      </div>
      <div className={styles.appbar}>
        {brand}
        {search}
      </div>
    </nav>
  );
}
