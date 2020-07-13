function fibMemo(index, cache){
  cache = cache || [];

  if (index < 3) return 1;

  if (cache[index]) return cache[index];

  return cache[index] = fibMemo(index - 1, cache) + fibMemo(index - 2, cache);
}


fibMemo(12);  // Returns 144