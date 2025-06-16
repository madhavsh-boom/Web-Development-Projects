// fetch('https://api.freeapi.app/api/v1/public/quotes/quote/random')
// .then(res=>res.json())
// .then(data => {
//     console.log(data.data.author);
//     console.log(data.data.content);
// })
// .catch(err => console.log(err))


// async function getData() {
//     try{
//         const res = await fetch('https://api.freeapi.app/api/v1/public/quotes/quote/random')
//         const data = await res.json();
//         console.log(data.data.author)
//         console.log(data.data.authorSlug);
//     }
//     catch(err) {
//         console.log(err);
//     }
// }
async function showQuote() {
    const loader = document.getElementById('loader');
    const quoteEl = document.getElementById('quote');
    const authorEl = document.getElementById('author');

    loader.style.display = 'block';
    quoteEl.innerText = '';
    authorEl.innerText = '';

    try {
        const res = await fetch('https://api.freeapi.app/api/v1/public/quotes/quote/random');
        const data = await res.json();
        quoteEl.innerText = `"${data.data.content}"`;
        authorEl.innerText = `— ${data.data.author}`;
    } catch (err) {
        quoteEl.innerText = "Failed to load quote.";
        console.log(err);
    } finally {
        loader.style.display = 'none';
    }
}
function copyQuote() {
    const quote = document.getElementById('quote').innerText;
    const author = document.getElementById('author').innerText;
    const fullText = `${quote} ${author}`;
  
    navigator.clipboard.writeText(fullText)
      .then(() => alert("Quote copied!"))
      .catch(err => console.log("Copy failed", err));
  }
  function tweetQuote() {
    const quote = document.getElementById('quote').innerText;
    const author = document.getElementById('author').innerText;
    const text = `${quote} ${author}`;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
  
    window.open(url, '_blank');
  }
  function saveFavorite() {
    const quote = document.getElementById('quote').innerText;
    const author = document.getElementById('author').innerText;
    const fullQuote = `${quote} ${author}`;
  
    let favorites = JSON.parse(localStorage.getItem('favoriteQuotes')) || [];
    favorites.push(fullQuote);
    localStorage.setItem('favoriteQuotes', JSON.stringify(favorites));
  
    alert("Saved to favorites!");
  }
  function showFavorites() {
    const list = document.getElementById('favoritesList');
    list.innerHTML = ''; // clear old
  
    const favorites = JSON.parse(localStorage.getItem('favoriteQuotes')) || [];
    favorites.forEach(q => {
      const li = document.createElement('li');
      li.textContent = q;
      list.appendChild(li);
    });
  }
        
showQuote();
