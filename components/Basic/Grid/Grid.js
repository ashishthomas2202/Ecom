import React, { useState, useEffect } from 'react';
import variables from '../../../styles/variables.module.scss';
import Loading from '../Loading/Loading';

export default function Grid({
  columns = {
    phone: 2,
    tabletPortrait: 2,
    tabletLandscape: 3,
    laptop: 4,
    desktop: 4,
    bigDesktop: 5,
  },
  gap = {
    phone: '0.3rem',
    tabletPortrait: '0.4rem',
    tabletLandscape: '0.5rem',
    laptop: '0.5rem',
    desktop: '0.6rem',
    bigDesktop: '0.7rem',
  },
  children,
}) {
  const [loading, setLoading] = useState(true);

  const [style, setStyle] = useState({
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
          gridTemplateColumns: `repeat(${columns.phone},1fr)`,
          gap: gap.phone,
        });
      } else if (
        window.innerWidth > parseInt(variables.phone) &&
        window.innerWidth <= parseInt(variables.tabletPortrait)
      ) {
        setStyle({
          ...style,
          gridTemplateColumns: `repeat(${columns.tabletPortrait},1fr)`,
          gap: gap.tabletPortrait,
        });
      } else if (
        window.innerWidth > parseInt(variables.tabletPortrait) &&
        window.innerWidth <= parseInt(variables.tabletLandscape)
      ) {
        setStyle({
          ...style,
          gridTemplateColumns: `repeat(${columns.tabletLandscape},1fr)`,
          gap: gap.tabletLandscape,
        });
      } else if (
        window.innerWidth > parseInt(variables.tabletLandscape) &&
        window.innerWidth <= parseInt(variables.laptop)
      ) {
        setStyle({
          ...style,
          gridTemplateColumns: `repeat(${columns.laptop},1fr)`,
          gap: gap.laptop,
        });
      } else if (
        window.innerWidth > parseInt(variables.laptop) &&
        window.innerWidth <= parseInt(variables.desktop)
      ) {
        setStyle({
          ...style,
          gridTemplateColumns: `repeat(${columns.desktop},1fr)`,
          gap: gap.desktop,
        });
      } else if (window.innerWidth > parseInt(variables.desktop)) {
        setStyle({
          ...style,
          gridTemplateColumns: `repeat(${columns.bigDesktop},1fr)`,
          gap: gap.bigDesktop,
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
