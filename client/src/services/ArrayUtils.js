function getFlatten(array, field) {
  for (let i = 0; i < array.length; i++) {
    array = [...array, ...array[i][field]];
  }
  return array;
}

const service = {
  getFlatten,
}

export default service;