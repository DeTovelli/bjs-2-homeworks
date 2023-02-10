//Задача № 1
function cachingDecoratorNew(func) {
    // Ваш код
    let cache = {};
    return function (...args) {
        const hash = args.join(',');
        let result = cache[hash];
        const cacheLength = Object.keys(cache).length;
        if (result === undefined) {
            if (cacheLength >= 5) {
                const cacheArr = Object.entries(cache);
                cacheArr.shift();
                cache = Object.fromEntries(cacheArr);
            }
            cache[hash] = result = func.call(this, ...args);
            console.log(`Вычисляем: ${result}`);
            return (`Вычисляем: ${result}`);
        } else {
            console.log(`Из кэша: ${result}`);
            return (`Из кэша: ${result}`);
        }
    }
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
    let timeoutId = null;
 
  function wrapper(...args) {

    if (timeoutId === null) {
      func(...args);
      wrapper.count++;
    }
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      wrapper.count++;
      func(...args);
    }, delay);

    wrapper.allCount++;
  }

  wrapper.allCount = 0;
  wrapper.count = 0;
  return wrapper;
}

