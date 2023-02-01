function compareArrays(arr1, arr2) {
  
    if (arr1.length === arr2.length && arr1.every((element, i) => element === arr2[i])) {
      return true;
    } else {
      return false;
    }
  
  }
  
  function advancedFilter(arr) {
  
    return arr
    .filter((numbers) => numbers > 0)
    .filter((numbers) => numbers % 3 === 0)
    .map((numbers) => numbers * 10);
  }