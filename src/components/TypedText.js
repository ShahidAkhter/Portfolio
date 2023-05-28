import React, { useRef, useEffect } from 'react';
import Typed from 'typed.js';

const TypedText = ({ strings }) => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: strings,
      typeSpeed: 35,
      backSpeed: 35,
      loop: false
    };

    typedRef.current = new Typed('.typed-text', options);

    return () => {
      // Cleanup the Typed instance
      typedRef.current.destroy();
    };
  }, [strings]);

  useEffect(() => {
    const cursorElement = document.querySelector('.typed-cursor');
    if (cursorElement) {
      cursorElement.style.opacity = '0'; // Set opacity to 0 to hide the cursor line
    }
  }, []);

  return <span className="typed-text" />;
};

export default TypedText;
