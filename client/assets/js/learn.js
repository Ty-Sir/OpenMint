const appId = "UBebrowDeRSW9eZezT6ayvLb6s8pyG6uvsDEOxlF"; // Application id from moralis.io
const serverUrl = 'https://bmplxqspenpu.usemoralis.com:2053/server'; //Server url from moralis.io
Moralis.start({ serverUrl, appId });


const user = Moralis.User.current();
