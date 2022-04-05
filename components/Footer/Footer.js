import React from 'react';
import styles from './Footer.module.scss';
import { Brand, Footer as footerSettings } from '../../utils/settings';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer() {
  let toolbar = (
    <ul className={styles.toolbar}>
      {footerSettings.toolbar.map((item, i) => {
        let element = item.name;

        if (item.faIcon) {
          element = (
            <FontAwesomeIcon
              icon={[item.faType ? item.faType : 'fas', item.faIcon]}
            />
          );
        }

        if (item.link) {
          element = (
            <Link href={item.link} passHref>
              <span>{element}</span>
            </Link>
          );
        }

        return <li key={`footer-toolbar-item-${item.name}-${i}`}>{element}</li>;
      })}
    </ul>
  );

  let footer = (
    <div className={styles.footerWrapper}>
      <ul className={styles.branding}>
        <li>{footerSettings.main.brand.name}</li>
        <li>{footerSettings.main.brand.description}</li>
      </ul>
      <ul className={styles.footerMenu}>
        <li>Shop</li>
        {footerSettings.main.shop.map((item, i) => {
          let element = item.name;

          if (item.link) {
            element = (
              <Link href={item.link} passHref>
                <span>{element}</span>
              </Link>
            );
          }
          return (
            <li key={`footer-main-shop-item-${item.name}-${i}`}>{element}</li>
          );
        })}
      </ul>

      <ul className={styles.footerMenu}>
        <li>Need Help?</li>
        {footerSettings.main.help.map((item, i) => {
          let element = item.name;

          if (item.link) {
            element = (
              <Link href={item.link} passHref>
                <span>{element}</span>
              </Link>
            );
          }
          return (
            <li key={`footer-main-shop-item-${item.name}-${i}`}>{element}</li>
          );
        })}
      </ul>

      <ul className={styles.footerMenu}>
        <li>Find Us On</li>
        {footerSettings.main.social.map((item, i) => {
          let element = item.name;

          if (item.faIcon) {
            element = (
              <span>
                <FontAwesomeIcon
                  icon={[item.faType ? item.faType : 'fas', item.faIcon]}
                />{' '}
                {element}
              </span>
            );
          }

          if (item.link) {
            element = (
              <Link href={item.link} passHref>
                <span>{element}</span>
              </Link>
            );
          }
          return (
            <li key={`footer-main-social-item-${item.name}-${i}`}>{element}</li>
          );
        })}
      </ul>
    </div>
  );

  let copyright = (
    <div className={styles.copyright}>{`©${new Date().getFullYear()} ${
      Brand.fullname
    }`}</div>
  );
  return (
    <div className={styles.footer}>
      {toolbar}
      {footer}
      {copyright}
    </div>
  );
}
