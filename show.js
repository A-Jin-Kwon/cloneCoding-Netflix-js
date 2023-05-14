/* movie api */
const popularURL = "https://api.themoviedb.org/3/movie/popular?api_key=229b2b78a75b1d8e2de40d7ae81a1534&language=ko-KR";
const popularTVURL = "https://api.themoviedb.org/3/tv/popular?api_key=229b2b78a75b1d8e2de40d7ae81a1534&language=ko-KR";
const topRatedURL = "https://api.themoviedb.org/3/movie/top_rated?api_key=229b2b78a75b1d8e2de40d7ae81a1534&language=ko-KR";
const nowPlayingURL = "https://api.themoviedb.org/3/movie/now_playing?api_key=229b2b78a75b1d8e2de40d7ae81a1534&language=ko-KR";

const getPopularMovie = async()=>{
    const response = await axios.get(popularURL);
    const movies = response.data.results;
    // console.log(movies);
    
    for(let movie of movies){
        const addMovie = document.querySelector('.movies-popular');
        let imgPath;
        if(!movie.backdrop_path){
            continue;
        }
        else{
            imgPath = `https://image.tmdb.org/t/p/w300${movie.backdrop_path}`;
        }
        const image = document.createElement('img');
        image.src = imgPath;
        image.classList.add('slide-item');

        addMovie.appendChild(image);
    }
}
const getPopularTV = async()=>{
    const response = await axios.get(popularTVURL);
    const tvs = response.data.results;
    // console.log(response);
    
    for(let tv of tvs){
        const addTV = document.querySelector('.tvs-popular');
        let imgPath;
        if(!tv.backdrop_path){
            continue;
        }
        else{
            imgPath = `https://image.tmdb.org/t/p/w300${tv.backdrop_path}`;
        }
        const image = document.createElement('img');
        image.src = imgPath;
        image.classList.add('slide-item');

        addTV.appendChild(image);
    }
}

const getTopRatedMovie = async()=>{
    const response = await axios.get(topRatedURL);
    const movies = response.data.results;
    // console.log(response);
    
    for(let movie of movies){
        const addMovie = document.querySelector('.movies-top-rated');
        let imgPath;
        if(!movie.backdrop_path){
            continue;
        }
        else{
            imgPath = `https://image.tmdb.org/t/p/w300${movie.backdrop_path}`;
        }
        const image = document.createElement('img');
        image.src = imgPath;
        image.classList.add('slide-item');

        addMovie.appendChild(image);
    }
}

const getNowPlayingMovie = async()=>{
    const response = await axios.get(nowPlayingURL);
    const movies = response.data.results;
    console.log(response);
    
    for(let movie of movies){
        const addMovie = document.querySelector('.movies-now-playing');
        let imgPath;
        if(!movie.backdrop_path){
            continue;
        }
        else{
            imgPath = `https://image.tmdb.org/t/p/w300${movie.backdrop_path}`;
        }
        const image = document.createElement('img');
        image.src = imgPath;
        image.classList.add('slide-item');

        addMovie.appendChild(image);
    }
}



getPopularMovie();
getPopularTV();
getTopRatedMovie();
getNowPlayingMovie();





/* 가로 스크롤 */
document.addEventListener("click", e=>{
    let handle;

    if(e.target.matches(".handle")){
        handle = e.target;
        onHandleClick(handle);
    }
})

function onHandleClick(handle){
    const slide = handle.closest(".container").querySelector(".slide");
    const slideIndex = parseInt(getComputedStyle(slide).getPropertyValue("--slider-index"));

    if(handle.classList.contains("handle-left")){
        slide.style.setProperty("--slider-index", slideIndex - 1);
    }
    if(handle.classList.contains("handle-right")){
        slide.style.setProperty("--slider-index", slideIndex + 1);
    }
}


















// /* ejs 연결 */
// const express = require('express');
// const app = express();
// const path = require('path');

// app.listen(3000, ()=>{
//     console.log("LISTENING ON PORT 3000!");
// })

// /* css js 적용 안되는 문제로 추가*/
// app.use(express.static("public"));
// //
// app.use(express.json());
// app.use(express.urlencoded({extended: true}));

// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

// app.get('/showMovies', (req, res)=>{
//     res.render('show', {popularMovies});
// })