function mostFrequentItemCount(collection) {
  if (collection.length === 0) return 0;
  let obj = {};
  for (let num in collection) {
    if (obj[collection[num]]) {
      obj[collection[num]] += 1;
    } else {
      obj[collection[num]] = 1;
    }
  }
  const key = Object.keys(obj).reduce((a, b) => (obj[a] > obj[b] ? a : b));
  return obj[key];
}
