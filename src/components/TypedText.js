import React, { useRef, useEffect } from 'react';
import Typed from 'typed.js';

const TypedText = ({ strings }) => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: strings,
      typeSpeed: 35,
      backSpeed: 35,
      loop: true
    };

    typedRef.current = new Typed('.typed-text', options);

    return () => {
      // Cleanup the Typed instance
      typedRef.current.destroy();
    };
  }, [strings]);

  return <span className="typed-text" />;
};

export default TypedText;
