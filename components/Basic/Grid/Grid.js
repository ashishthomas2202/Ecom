import React, { useState, useEffect } from 'react';
import variables from '../../../styles/variables.module.scss';
import Loading from '../Loading/Loading';

export default function Grid({ col, gap, children }) {
  let columns = {
    phone: 2,
    tabletPortrait: 2,
    tabletLandscape: 3,
    laptop: 4,
    desktop: 4,
    bigDesktop: 5,
    ...col,
  };

  let gaps = {
    phone: '0.5rem',
    tabletPortrait: '0.6rem',
    tabletLandscape: '0.6rem',
    laptop: '0.7rem',
    desktop: '0.7rem',
    bigDesktop: '0.8rem',
    ...gap,
  };

  // let fontSize = {
  //   phone: '0.3rem',
  //   tabletPortrait: '0.4rem',
  //   tabletLandscape: '0.5rem',
  //   laptop: '0.5rem',
  //   desktop: '0.6rem',
  //   bigDesktop: '0.7rem',
  // };
  const [loading, setLoading] = useState(true);

  const [style, setStyle] = useState({
    // fontSize: '1rem',
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gap: '1rem',
  });

  useEffect(() => {
    function resizeGrid() {
      if (
        window.innerWidth > 0 &&
        window.innerWidth <= parseInt(variables.phone)
      ) {
        setStyle({
          ...style,
          // fontSize: `${columns.phone}rem`,
          gridTemplateColumns: `repeat(${columns.phone},1fr)`,
          gap: gaps.phone,
        });
      } else if (
        window.innerWidth > parseInt(variables.phone) &&
        window.innerWidth <= parseInt(variables.tabletPortrait)
      ) {
        setStyle({
          ...style,
          // fontSize: `${columns.tabletPortrait}rem`,
          gridTemplateColumns: `repeat(${columns.tabletPortrait},1fr)`,
          gap: gaps.tabletPortrait,
        });
      } else if (
        window.innerWidth > parseInt(variables.tabletPortrait) &&
        window.innerWidth <= parseInt(variables.tabletLandscape)
      ) {
        setStyle({
          ...style,
          // fontSize: `${columns.tabletLandscape}rem`,
          gridTemplateColumns: `repeat(${columns.tabletLandscape},1fr)`,
          gap: gaps.tabletLandscape,
        });
      } else if (
        window.innerWidth > parseInt(variables.tabletLandscape) &&
        window.innerWidth <= parseInt(variables.laptop)
      ) {
        setStyle({
          ...style,
          // fontSize: `${columns.laptop}rem`,
          gridTemplateColumns: `repeat(${columns.laptop},1fr)`,
          gap: gaps.laptop,
        });
      } else if (
        window.innerWidth > parseInt(variables.laptop) &&
        window.innerWidth <= parseInt(variables.desktop)
      ) {
        setStyle({
          ...style,
          // fontSize: `${columns.desktop}rem`,
          gridTemplateColumns: `repeat(${columns.desktop},1fr)`,
          gap: gaps.desktop,
        });
      } else if (window.innerWidth > parseInt(variables.desktop)) {
        setStyle({
          ...style,
          // fontSize: `${columns.bigDesktop}rem`,
          gridTemplateColumns: `repeat(${columns.bigDesktop},1fr)`,
          gap: gaps.bigDesktop,
        });
      }
    }

    if (window) {
      resizeGrid();
      window.addEventListener('resize', resizeGrid);
      setLoading(false);
    }
  }, []);

  return loading ? <Loading /> : <div style={style}>{children}</div>;
}
