class Storage {
    constructor(key) {
      this.key = key;
    }
    getStorage() {
      const data = window.localStorage.getItem(this.key);
      if (data) {
        return JSON.parse(data);
      }
      return data;
    }
    save(data) {
      window.localStorage.setItem(this.key, JSON.stringify(data))
    }
  }

  const getGifs =(search)=>{
    const api_key ='';
    const url ='https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${search}'
    let request = new XMLHttpRequest();
    request.open("GET", "");
    request.addEventListener('load', (response) =>{
      console.log(JSON.parse(response));
    })
    request.send(null)
  }

  const gifToHtml =(gif) =>{
    return `<div class= 'col-4><img src='${gif}` style ='width';
  }

  const storage = new Storage('app-state');

  // ---------- STATE 
  let state = {
    show: 'search',
    gifs: []
  }
  
  
  // ---------- GLOBAL HTML OBJECTS 
  const searchLink = document.querySelector('.js-navlink-search');
  const favoritesLink = document.querySelector('.js-navlink-favorites');
  const searchContainer = document.querySelector('.js-search-container');
  const favoritesContainer = document.querySelector('.js-favorites-container');
  const searchBox = document.querySelector('.js-favorites-container');
  const searchList = document.querySelector('.js-favorites-container');
  
  // ---------- EVENTS
  searchLink.addEventListener('click', (e) => {
    state.show = 'search'; 
    storage.save(state);
    render(state);
    console.log(state);
  
  });
  
  favoritesLink.addEventListener('click', (e) => {
    state.show = 'favorites';
    storage.save(state);
    render(state);
    console.log(state);
  });
  searchBox.addEventListener('keydown', (e) => {
    const {key, target} = e;

    if (key ==='Enter')
    console.log('You Pressed Enter');
  })

  };
  
  // ---------- RENDER
  const render = state => {
    if (state.show === 'search') {
      // Show Search
      searchContainer.classList.remove('hidden');
      favoritesContainer.classList.add('hidden');
      searchContainer.classList.remove('active');
      favoritesContainer.classList.add('active');

      searchLink.classList.add('active');
      favoritesLink.classList.remove('active');
    }
    else if (state.show === 'favorites') {
      // Show Favorites
      searchContainer.classList.add('hidden');
      favoritesContainer.classList.remove('hidden');

      searchLink.classList.remove('active');
      favoritesLink.classList.add('active');
    }
    
  }
  // Checking if there is anything in the loca storage
  const stored_state = storage.getStorage();
  if (stored_state) {
//If there is then apply that to my state memory
    state = stored_state;
  }
  
  
  render(state);
  //


//   class Storage {
//     constructor(key) {
//         this.key = key;
//     }
//     getStorage() {
//         const data = window.localStorage.getItem(this.key);
//         if (data) {
//             return JSON.parse(data);
//         }
//         return data;
//     }
//     save(data) {
//         window.localStorage.setItem(this.key, JSON.stringify(data))
//     }
// }

// const getGifs = (search, cb) => {
//     if (search === "" || search.trim() === "") {
//         return;
//     }

//     const api_key = 'siIyo4w5mg0REENX76Sr57QTgkt3BWvY';
//     const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${search}`;

//     let request = new XMLHttpRequest();
//     request.open("GET", url);
//     request.addEventListener('load', (response) => {
//         const data = JSON.parse(response.currentTarget.response);

//         const gifArray = [];
//         data.data.forEach(currentGif => {
//             const url = currentGif.images.original.url;
//             gifArray.push(url);
//         });

//         cb(gifArray);
//     })
//     request.send(null);
// }

// const gifToHTML = (gif) => {
//     return `<div class='col-4'><img src='${gif}' style='width: 100%; height: auto;'></div>`;
// }

// const storage = new Storage('app-state');

// // ---------- STATE 
// let state = {
//     show: 'search',
//     gifs: []
// }


// // ---------- GLOBAL HTML OBJECTS 
// const searchLink = document.querySelector('.js-navlink-search');
// const favoritesLink = document.querySelector('.js-navlink-favorites');
// const searchContainer = document.querySelector('.js-search-container');
// const favoritesContainer = document.querySelector('.js-favorites-container');
// const searchBox = document.querySelector('.js-search-box');
// const searchList = document.querySelector('.js-search-list');

// // ---------- EVENTS
// searchLink.addEventListener('click', (e) => {
//     state.show = 'search';
//     storage.save(state);
//     render(state);
//     console.log(state);

// });

// favoritesLink.addEventListener('click', (e) => {
//     state.show = 'favorites';
//     storage.save(state);
//     render(state);
//     console.log(state);
// });

// searchBox.addEventListener('keydown', (e) => {
//     const { key, target } = e;

//     if (key === 'Enter') {
//         getGifs(target.value, (gifs) => {
//             console.log(gifs);
//             state.gifs = gifs;
//             storage.save(state);
//             render(state);
//         });
//     }
// });


// // ---------- RENDER
// const render = state => {
//     if (state.show === 'search') {
//         // Show Search & Hide Favorites
//         searchContainer.classList.remove('hidden');
//         favoritesContainer.classList.add('hidden');

//         searchLink.classList.add('active');
//         favoritesLink.classList.remove('active');
//     }
//     else if (state.show === 'favorites') {
//         // Show Favorites & Hide Search
//         searchContainer.classList.add('hidden');
//         favoritesContainer.classList.remove('hidden');

//         searchLink.classList.remove('active');
//         favoritesLink.classList.add('active');
//     }

//     let allGifsHTML = '';
//     for (let i = 0; i < state.gifs.length; i++) {
//         allGifsHTML += gifToHTML(state.gifs[i]);
//     }

//     searchList.innerHTML = allGifsHTML;

// }

// // Checking if there is anything in the local storage
// const stored_state = storage.getStorage();
// if (stored_state) {
//     // If there is then apply that to my state in Memory
//     state = stored_state;
// }

// render(state);