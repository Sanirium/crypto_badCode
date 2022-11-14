document.addEventListener("DOMContentLoaded", function(event) {
const btnCypher = document.querySelector("body > main > div > div > div:nth-child(1) > button");
const resultCypher = document.querySelector("body > main > div > div > div:nth-child(2) > textarea");
const btnDecypher = document.querySelector("body > main > div > div > div:nth-child(2) > button");
const resultDecypher = document.querySelector("body > main > div > div > div:nth-child(1) > textarea");
let key;
let text;
let keyD;
let textD;

btnDecypher.addEventListener('click', function(){
	textD = document.querySelector('.decypher__text').value;
	keyD = document.querySelector('.decypher__key').value;
	if (keyD == '')
		keyD=0;
	resultDecypher.value=decypher(textD,keyD);
    resultCypher.value="";

});

btnCypher.addEventListener('click', function(){
	text = document.querySelector('.cypher__text').value;
	key = document.querySelector('.key').value;
	if (key == ''){
		key=0;
		document.querySelector('.key').value=0;
	}
	if (isNaN(key)){
		alert('Для ключа использутей только целые числа.')
		document.querySelector('.key').value='';
	}

	else
		resultCypher.value=cypher(text,key);
        resultDecypher.value="";
	//file

});
function cypher(text,key){
	let newText='';
	let charCode;
	for (let i=0; i<text.length;i++){

		if (text.charCodeAt(i)>=1040 && text.charCodeAt(i) <=1071){ //russian uppercase
			charCode = ((text.charCodeAt(i)-1040 + +key) % 32) + 1040;
		}
		else if (text.charCodeAt(i)>=1072 && text.charCodeAt(i) <=1103){ //russian lowercase
			charCode = ((text.charCodeAt(i)-1072 + +key) % 32) + 1072;
		}
		else if (text.charCodeAt(i)>=65 && text.charCodeAt(i) <=90){ // english uppercase
			charCode = ((text.charCodeAt(i)-65 + +key) % 26) + 65;
			//console.log(text.charCodeAt(i))
		}
		else if (text.charCodeAt(i)>=97 && text.charCodeAt(i) <=122){ // english lowercase
			charCode = ((text.charCodeAt(i)-97 + +key) % 26) + 97;
		}
		else{ //other symbols remain the same
			charCode=text.charCodeAt(i);
		}

		if (text.charCodeAt(i) == 1105){
			charCode = ((text.charCodeAt(i)-1072 +4 + +key) % 32) + 1072;
		}
		else if (text.charCodeAt(i) == 1025)
		{
			charCode = ((text.charCodeAt(i)-1040 +20 + +key) % 32) + 1040;
		}
		newText+=String.fromCharCode(charCode);
		//console.log(text.charCodeAt(i))
	}
	return newText;
}

function decypher(text,key){
	let newText='';
	let charCode;
	for (let i=0; i<text.length;i++){
		//text.charCodeAt(i);
		if (text.charCodeAt(i)>=1040 && text.charCodeAt(i) <=1071){ //russian uppercase
			charCode = ((text.charCodeAt(i)-1071 - +key) % 32) + 1071;
		}
		else if (text.charCodeAt(i)>=1072 && text.charCodeAt(i) <=1103){ //russian lowercase
			charCode = ((text.charCodeAt(i)-1103 - +key) % 32) + 1103;
		}
		else if (text.charCodeAt(i)>=65 && text.charCodeAt(i) <=90){ // english uppercase
			charCode = ((text.charCodeAt(i)-90 - +key) % 26) + 90;
		}
		else if (text.charCodeAt(i)>=97 && text.charCodeAt(i) <=122){ // english lowercase
			charCode = ((text.charCodeAt(i)-122 - +key) % 26) + 122;
		}
		else{ //other symbols remain the same
			charCode=text.charCodeAt(i);
		}

		
		newText+=String.fromCharCode(charCode);
	}
	return newText;
}
});