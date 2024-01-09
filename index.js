let anime = ()=>{
    fetch('https://animechan.xyz/api/random')
    .then(response => response.json())
    .then((quote) => {
        // console.log(quote);
        ihtml = `<div class="card-header">Quote</div>
        <div class="card-body">
            <blockquote class="blockquote mb-0">
                <p><b>Anime : ${quote.anime}</b></p>
                <p>${quote.quote}</p>
                <footer class="blockquote-footer">
                    <p>Said by <cite title="Source Title">${quote.character}</cite></p>
                </footer>
            </blockquote>
        </div>`;
    cardContainer.innerHTML = ihtml;
});
}

anime()

let btn = document.getElementById("btns")
btn.addEventListener('click',()=>{
    anime()
})
