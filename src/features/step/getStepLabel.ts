const getStepLabel = ({ id, order }: { id: string; order: number }) =>
  `step ${order}: ${id}`;

export default getStepLabel;
