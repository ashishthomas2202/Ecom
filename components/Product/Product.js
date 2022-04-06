import React, { useState, useEffect } from 'react';
import styles from './Product.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
export default function Product({
  data,
  aspectRatio,
  handleAddToCart = () => {},
}) {
  data = {
    _id: 'jvhtfrkvytbiu',
    sku: 'DM5671-100',
    name: 'Nike Dri-FIT',
    brand: 'Nike',
    ribbon: 'New Arrival',
    collections: ['622783ba8b7f094ee4bb65d1', '622783ba8b7f094ee4bb65d5'],
    images: [
      {
        name: 'Nike-Dri-FIT-1',
        extension: 'png',
        path: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/959df6de-7c99-4df4-81c7-6d31fc999f02/dri-fit-mens-graphic-training-t-shirt-DHS3DS.png',
      },
      {
        name: 'Nike-Dri-FIT-2',
        extension: 'png',
        path: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/ad917fcf-68b7-4d0f-90b3-c4acbeda5af8/dri-fit-mens-graphic-training-t-shirt-DHS3DS.png',
      },
      {
        name: 'Nike-Dri-FIT-3',
        extension: 'png',
        path: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/6bcbe757-19d0-4e35-9838-36d242ad4584/dri-fit-mens-graphic-training-t-shirt-DHS3DS.png',
      },
      {
        name: 'Nike-Dri-FIT-4',
        extension: 'png',
        path: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/f506560b-a3f4-4d96-b042-6fa39e727a51/dri-fit-mens-graphic-training-t-shirt-DHS3DS.png',
      },
      {
        name: 'Nike-Dri-FIT-5',
        extension: 'png',
        path: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/959df6de-7c99-4df4-81c7-6d31fc999f02/dri-fit-mens-graphic-training-t-shirt-DHS3DS.png',
      },
      {
        name: 'Nike-Dri-FIT-6',
        extension: 'png',
        path: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/ad917fcf-68b7-4d0f-90b3-c4acbeda5af8/dri-fit-mens-graphic-training-t-shirt-DHS3DS.png',
      },
      {
        name: 'Nike-Dri-FIT-7',
        extension: 'png',
        path: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/6bcbe757-19d0-4e35-9838-36d242ad4584/dri-fit-mens-graphic-training-t-shirt-DHS3DS.png',
      },
      {
        name: 'Nike-Dri-FIT-8',
        extension: 'png',
        path: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/f506560b-a3f4-4d96-b042-6fa39e727a51/dri-fit-mens-graphic-training-t-shirt-DHS3DS.png',
      },
    ],
    sold: 15,
    onePrice: true,
    costPrice: 20.99,
    discountedPrice: 22.99,
    price: 25.99,
    description:
      "The Nike Dri-FIT T-Shirt is made with soft, lightweight fabric for a smooth and comfortable feel. It's powered by our sweat-wicking technology to help keep you dry when you're pushing the intensity of your workout.",
    stock: 11,

    color: ['white', 'blue', 'green'],
    sizes: [
      { size: 'small', stock: 5 },
      { size: 'medium', stock: 4 },
      { size: 'large', stock: 7 },
    ],
  };
  //     aspect ratio  | padding-bottom value
  // --------------|----------------------
  //    9:16       |       177.78%
  //    16:9       |       56.25%
  //     4:3       |       75%
  //     3:2       |       66.66%
  //     8:5       |       62.5%

  const [favorite, setFavorite] = useState(false);
  function handleFavoriteClick() {
    console.log('Favorite', data._id);
    setFavorite(!favorite);
  }

  const [ratio, setRatio] = useState(177.78);

  const [style, setStyle] = useState({
    width: '100%',
    paddingBottom: `${ratio}%`,
    // background: 'gold',
  });

  function calculateAspectRatio() {
    let firstNumber = parseInt(
      aspectRatio.substring(0, aspectRatio.indexOf(':'))
    );
    let secondNumber = parseInt(
      aspectRatio.substring(aspectRatio.indexOf(':') + 1)
    );

    if (!(isNaN(firstNumber) || isNaN(secondNumber))) {
      let newRatio = (secondNumber / firstNumber) * 100;
      setRatio(newRatio);
      setStyle({ ...style, paddingBottom: `${newRatio}%` });
    }
  }

  useEffect(() => {
    if (aspectRatio) {
      calculateAspectRatio();
    }
  }, []);

  useEffect(() => {
    setStyle({ ...style, paddingBottom: `${ratio}%` });
  }, [ratio]);

  return (
    <div style={style} className={styles.product}>
      <div className={styles.container}>
        <div
          className={styles.image}
          style={{ backgroundImage: `url(${data.images[0].path})` }}
        >
          <Link href={`/shop/${data._id}`} passHref>
            <div className={styles.linkOverlay}></div>
          </Link>
          <div className={styles.favorite} onClick={handleFavoriteClick}>
            <span className={favorite ? styles.selected : styles.normal}>
              <FontAwesomeIcon icon={['fas', 'fa-heart']} />
            </span>
          </div>
          <div
            className={styles.addToCart}
            onClick={() => {
              handleAddToCart(data._id);
            }}
          >
            <FontAwesomeIcon icon={['fas', 'fa-plus']} />
          </div>
        </div>
        <Link href={`/shop/${data._id}`} passHref>
          <div className={styles.details}>
            <div className={styles.name}>{data.name ? data.name : ''}</div>
            <div className={styles.prices}>
              {data.discountedPrice && (
                <div className={styles.discountedPrice}>
                  ${data.discountedPrice}
                </div>
              )}
              <div className={data.discountedPrice ? styles.strikePrice : ''}>
                ${data.price ? data.price : ''}
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
