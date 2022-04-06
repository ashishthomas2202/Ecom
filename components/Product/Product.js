import React, { useState, useEffect } from 'react';

export default function Product({ data, aspectRatio }) {
  //     aspect ratio  | padding-bottom value
  // --------------|----------------------
  //    9:16       |       177.78%
  //    16:9       |       56.25%
  //     4:3       |       75%
  //     3:2       |       66.66%
  //     8:5       |       62.5%

  const [ratio, setRatio] = useState(177.78);

  const [style, setStyle] = useState({
    width: '100%',
    paddingBottom: `${ratio}%`,
    background: 'gold',
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

  return <div style={style}></div>;
}
