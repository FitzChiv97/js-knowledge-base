// Extract the domain name from a URL (2 solutions)
// https://www.codewars.com/kata/514a024011ea4fb54200004b

function domainName(url){
  let domain = url;
  
  if (domain.indexOf('//') > 0) {
    domain = domain.slice(domain.indexOf('//') + 2);
  };

  if (!domain.indexOf('www.')) {
    domain = domain.slice(domain.indexOf('www.') + 4);
  }

  return domain.slice(0, domain.indexOf('.'));
}

// function domainName(url) {
//   return url.replace('http://', '').
//              replace('https://', '').
//              replace('www.', '').
//              split('.')[0];
// }

console.log(domainName("86b-xthzi1-nv-ub0uwsa2vkzfu.pro"));