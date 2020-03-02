export const sortAsc = (data, key) => data.sort((a, b) => (a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : 0));

export const sortDesc = (data, key) => data.sort((a, b) => (a[key] < b[key] ? 1 : b[key] < a[key] ? -1 : 0));
