const form = document.querySelector('#searchForm');
form.style.margin = '8px 5px';

form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const config = { params: { q: searchTerm } }
    const res = await axios.get(`http://api.tvmaze.com/search/shows`, config)
    makeImages(res.data)
    form.elements.query.value = '';
})

const makeImages = (shows) => {
    for(let result of shows){
        if (result.show.image) {
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            img.style.margin = '5px';
            document.body.append(img);
        }
    }
}