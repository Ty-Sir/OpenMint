Moralis.initialize("UBebrowDeRSW9eZezT6ayvLb6s8pyG6uvsDEOxlF"); // Application id from moralis.io
Moralis.serverURL = 'https://bmplxqspenpu.usemoralis.com:2053/server'; //Server url from moralis.io

let user = Moralis.User.current();

$('#singleButton').click(() =>{
  window.location.href='erc-721.html';
});

$('#multipleButton').click(() =>{
  // window.location.href='erc-1155.html';
});
