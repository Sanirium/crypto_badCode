document.addEventListener("DOMContentLoaded", function(event) {

    const inputCypher = document.querySelector('#file-cypher');
inputCypher.addEventListener('change', function(e) {
	const reader = new FileReader();
	reader.onload = function(){
		document.querySelector('.cypher__text').value=reader.result;
		reader.abort();
	}
	reader.readAsText(inputCypher.files[0]);
})

const inputDecypher = document.querySelector('#file-decypher');
console.log(inputDecypher)
console.log(inputCypher)
inputDecypher.addEventListener('change', function(e) {
	const reader = new FileReader();
	reader.onload = function(){
		document.querySelector('.decypher__text').value=reader.result;
		reader.abort();
	}
	reader.readAsText(inputDecypher.files[0]);
})
});