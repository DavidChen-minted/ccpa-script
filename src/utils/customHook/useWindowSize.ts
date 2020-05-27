import { useEffect, useState } from 'react';

const useWindowSize = () => {
  const isBrowser = typeof window === 'object';

  function getSize() {
    return {
      width: global.window?.innerWidth,
      height: global.window?.innerHeight,
    };
  }

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    if (!isBrowser) {
      return undefined;
    }
    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
};

export default useWindowSize;
