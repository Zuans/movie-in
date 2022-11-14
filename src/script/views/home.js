import { IMG_URL } from "../constant"

const sectionHero = (data) => `
<section  id="hero">
    <img src="${IMG_URL}/${data.backdrop_path}" alt="" class="hero-img">
    <div class="container">
        <h2 class="popular">Most high rated</h2>
        <h1 class="movie-title">${data.title}</h1>
        <div class="movie-info">
            <div>
                <p>Rating</p>
                <p class="vote font-medium">${data.vote_average}</p>
            </div>
            <div>
                <p>Popularity</p>
                <p class="popularity font-medium">
                ${data.popularity}
            </p>
            </div>
        </div>
        <button class="btn-detail font-medium" data-router="/detail/12">Detail</button>
    </div>
</section>`

const html = () => ({
  "section-hero": sectionHero,
})

const css = () => `<style>

#hero {
    position: relative;
    width: 100%;
    height : 100vh;
    padding-top : 120px;
    margin-bottom : 120px;
}


#hero > * {
    z-index: 10;
}


#hero .hero-img {
    position: absolute;
    top : 0;
    left : 0;
    width: 100%;
    height: 100vh;
    z-index: -10;
    max-width: 9000px;
}

#hero::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
   background : linear-gradient(to top,var(--primary-color),#30303052);
    z-index : -1;
}

#hero .icon-star {
    margin-right : 5px;
    color : yellow;
}

#hero .popular,
#hero .movie-studio {
    font-size : var(--font-xl);
    color : var(--third-color);
}

#hero .movie-title {
    font-size : var(--font-xxl);
    margin-top : 15px;
    margin-bottom : 20px;
    max-width : 80%;
}

#hero .synopsis {
    max-width: 600px;
}

#hero .movie-info {
    display: flex;
    font-size: var(--font-l);
    margin-top: 20px;
}

#hero .movie-info * {
    margin-right : 40px;
    position: relative;
}


#hero .btn-detail {
    background-color : #343c3cef;
    border : none;
    padding : .7rem 3rem;
    width: 250px;
    font-size : var(--font-l);
    border-radius: 10px;
    margin-top : 40px;
    cursor : pointer;
    z-index : 10;
}

#hero .btn-detail:hover {
    background-color : #2c3333db;
}


@media only screen and (max-width: 630px) {
    .container {
        padding : 30px;
        padding-top : 60px;
    }
}

/* movie result */


height : 100%;
#popular-genre .title-section {
    color : var(--third-color);
}

#popular-genre .title-section span {
    margin-left : 20px;
}


#hero * {
    z-index: 2;
}

#hero .img-hero {
    position: absolute;
    top : 0;
    left: 0;
    height: 100vh;
    width : 100vw;
    object-fit: cover;
    z-index: -3;
}

#hero::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
   background : linear-gradient(to top,var(--primary-color),#30303052);
    z-index : -1;
}

#hero .container {
    padding-top : 40px;
}

#hero .genre-list {
    display: flex;
    font-weight : 600;
    font-size : var(--font-m);
    margin-bottom : 30px;
}

#hero .genre-list * {
    margin-right : 30px;
    padding: 5px 10px;
    border-radius : 5px;
    background-color: #2c3333c8;
}

#hero .movie-info * .vote,
#hero .movie-info * .popularity {
    margin-top : 10px;
    font-weight: 600;
}

#hero .synopsis {
    max-width: 700px;
}
 </style>`

export default {
  html,
  css,
}