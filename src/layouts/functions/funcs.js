export const Uppercase = (str) => {
  return String(str).toUpperCase();
};
export const Lowercase = (str) => {
  return String(str).toLowerCase();
};
export const RemoveNumbers = (str) => {
  return String(str).replace(/[0-9]/g, "");
};
export const AddUnderScore = (str) => {
  return String(str).replace(/ /g, "_");
};
export const Clear = (str) => {
  return "";
};
export const ExtraSpaceFree = (str) => {
  return String(str).replace(/\s+/g, " ").trim();
};
export const Reverse = (str) => {
  return String(str).split("").reverse().join("");
};
export const CountLetters = (str) => {
  return String(str).length;
};
export const CountWords = (str) => {
  return ExtraSpaceFree(str)
    .split(" ")
    .filter((char) => {
      return char !== "";
    }).length;
};
export const RemovePunctuation = (str) => {
  return String(str).replace(/[^\w\s]/g, "");
};
