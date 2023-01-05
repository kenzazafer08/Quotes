const quote = document.getElementById('quote');
const span = document.getElementById('span');
const url = 'https://api.quotable.io/random';
function getquote(){
   fetch(url)
   .then(data => data.json())
   .then(item => {quote.innerHTML = (item.content);span.innerHTML = (item.author);}
   );
}


