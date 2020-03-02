const changeToNumberValues = (isNumber) => (+isNumber ? parseInt(isNumber, 10) : isNumber);

export const sortAsc = (data, key) => data.sort((a, b) => (changeToNumberValues(a[key]) > changeToNumberValues(b[key]) ? 1 : changeToNumberValues(b[key]) > changeToNumberValues(a[key]) ? -1 : 0));

export const sortDesc = (data, key) => data.sort((a, b) => (changeToNumberValues(a[key]) < changeToNumberValues(b[key]) ? 1 : changeToNumberValues(b[key]) < changeToNumberValues(a[key]) ? -1 : 0));
