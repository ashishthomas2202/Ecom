import React from 'react';
import styles from './Layout.module.scss';
import Head from 'next/head';
import { Brand } from '../../utils/settings';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default function Layout({ title, children }) {
  return (
    <div className={styles.layout}>
      <Head>
        <title>{`${Brand.name}${title ? ' | ' + title : ''}`}</title>
      </Head>
      <Header />
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  );
}
