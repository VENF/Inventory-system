import { useState, useEffect } from 'react';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export default function useWindowDimensions(
  maxWidthSm = null,
  maxWidthMd = null
) {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    ...windowDimensions,
    isVertical: windowDimensions.height > windowDimensions.width,
    isSmall: maxWidthSm ? windowDimensions.width < maxWidthSm : null,
    isMedium: maxWidthMd ? windowDimensions.width < maxWidthMd : null,
  };
}
