var btc=document.getElementById("bitcoin");
var ltc=document.getElementById("Litecoin");
var eth=document.getElementById("Ethereum");
var doge=document.getElementById("dogecoin");


var liveprice = {
    "async":true,
    "scroosDomain" : true,
    "url" : "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Clitecoin%2Cethereum%2Cdogecoin&vs_currencies=usd",

    "method": "GET",
    "headers":{}

}
$.ajax(liveprice).done(function(response){

    btc.innerHTML=response.bitcoin.usd;
    ltc.innerHTML=response.litecoin.usd;
    eth.innerHTML=response.ethereum.usd;
    doge.innerHTML=response.dogecoin.usd;
});