export const daysBetween = (date: string) => {
  const convertToDate = new Date(date);
  const currentDate = new Date();
  const time = currentDate.getTime() - convertToDate.getTime();
  const convertToDays = time / (1000 * 3600 * 24);
  return Math.floor(convertToDays);
};
