const changeForN = (isNumber) => (+isNumber ? parseInt(isNumber, 10) : isNumber);

const isTrue = (data, key) => {
  data.sort((a, b) => {
    if (changeForN(a[key]) > changeForN(b[key])) return 1;
    if (changeForN(b[key]) > changeForN(a[key])) return -1;
    return 0;
  });
  return data;
};
export function sortAsc(data, key, isUnder) {
  let results;
  if (isUnder) {
    results = isTrue(data, key);
  }
  return results;
}
const isFalse = (data, key) => {
  data.sort((a, b) => {
    if (changeForN(a[key]) < changeForN(b[key])) return 1;
    if (changeForN(b[key]) < changeForN(a[key])) return -1;
    return 0;
  });
  return data;
};
export function sortDesc(data, key, isUnder) {
  let results;
  if (isUnder) {
    results = isFalse(data, key);
  }
  return results;
}
