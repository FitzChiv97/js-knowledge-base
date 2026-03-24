//My Language Skills
function myLanguages(results) {
  return Object.entries(results)
    .filter(lang => lang[1] >= 60)
    .sort((a,b) => b[1] - a[1])
    .map(el => el[0]);
}

let result = myLanguages({"Java" : 10, "Ruby" : 80, "Python" : 65, "Huskel": 67});
console.log(result);