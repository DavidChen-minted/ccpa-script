import useWindowSize from './useWindowSize';
import useMeasure from './useMeasure';

const useScreenHeight = () => {
  const windowSize = useWindowSize();
  const { size: elementSize, measureRef } = useMeasure();

  const height =
    windowSize.height && elementSize?.top
      ? windowSize.height - elementSize?.top
      : 0;

  return { height, measureRef };
};

export default useScreenHeight;
