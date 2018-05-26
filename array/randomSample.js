let randomSample = function(data, k) {
  let result = []
  let count = 0

  while (data.has_next()) {
    let value = data.next()
    if (count < k) result.push(value)
    else { 
      let position = Math.random(0, count)
      if (position <= k) result.push(value);
    }
    count++
  }
  return result
};