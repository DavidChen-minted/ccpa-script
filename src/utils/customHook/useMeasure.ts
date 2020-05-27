import { useState, useCallback, RefCallback } from 'react';

const useMeasure = () => {
  const [size, setSize] = useState<ClientRect | undefined>();

  const measureRef = useCallback<RefCallback<Element>>((node) => {
    if (node !== null) {
      setSize(node.getBoundingClientRect());
    }
  }, []);

  return { size, measureRef };
};

export default useMeasure;
