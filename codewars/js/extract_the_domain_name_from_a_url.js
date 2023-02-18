console.clear();

const domainName = (url) =>
	url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/)[1];
// const domainName = (url) => url.match(/(https?:\/\/)?(www\.)?([\da-z-]+)([a-z\.]{2,6})([\/\w \.-]*)*\/?/)[3];

console.log(domainName("http://google.com"));
console.log(domainName("http://google.co.jp"));
console.log(domainName("www.xakep.ru"));
