const preferredStepSizes = [0, 100e3, 500e3, 1e6, 5e6, 10e6];

export const getOptimalStepSize = <T extends number[] | []>(data: T) => {
  if (!data || !data.length) {
    return null; // Handle empty data case
  }

  const maxDataValue = Math.max(...data);
  const minDataValue = Math.min(...data);
  const dataRange = maxDataValue - minDataValue;

  return preferredStepSizes.reduce((closestStep, currentStep) => {
    const distanceToCurrent = Math.abs(currentStep - dataRange);
    const distanceToClosest = Math.abs(closestStep - dataRange);
    return distanceToCurrent < distanceToClosest ? currentStep : closestStep;
  }, preferredStepSizes[0]); // Initialize with first preferred step size
};

export const formatNumber = (val: number, decPlace?: number) => {
  return Number(val)
    .toFixed(decPlace ?? 2)
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
};

export const calculateTotalValue = (val: number[]): number =>
  val.reduce((cur, acc) => cur + acc, 0);
