const changeForN = (isNumber) => (+isNumber ? parseInt(isNumber, 10) : isNumber);

// export const sortAsc = (data, key) => data.sort((a, b) =>
//   (changeForN(a[key]) > changeForN(b[key]) ? 1 :
//    changeForN(b[key]) > changeForN(a[key]) ? -1 : 0));

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
  return results
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
  return results
}

// function funcSortDesc(a, b,) {
//     if (a.nome < b.nome)
//        return -1;
//     if (a.nome > b.nome)
//       return 1;
//     return 0;
//   }

// export const sortDesc = (data, key) => data.sort((a, b) =>
// (changeForN(a[key]) < changeForN(b[key])
//   ? 1
//   : changeForN(b[key]) < changeForN(a[key])
//     ? -1
//     : 0));
