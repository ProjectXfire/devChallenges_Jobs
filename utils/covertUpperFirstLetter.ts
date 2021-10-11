export const convertUpperCaseFirstLetter = (text: string) => {
  const textSize = text.length;
  if (textSize <= 2) {
    return text.toUpperCase();
  }
  const arr = text.split(" ");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase();
  }
  const textConverted = arr.join(" ");
  return textConverted;
};
