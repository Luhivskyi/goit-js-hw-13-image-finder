const apiKey = '20947974-3b2c032bfd4c7c95682b8c671';


export default {
  searchQuery: '',
  page: 1,

  fetchImages(){
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=12&key=${apiKey}`;
    const options = {
      headers: {},
    };
    return fetch(url, options)
      .then(res => res.json()).then(({ hits }) => {
        this.incrementPage();
        return hits;
      });
  },
  
  resetPage() {
    this.page = 1;
  },
  incrementPage() {
    this.page += 1;
  },
  get query() {
    return this.searchQuery;
  },
  set query(value) {
    this.searchQuery = value;
  }
}