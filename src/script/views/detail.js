import { IMG_URL } from '../constant'

const sectionHero = (data) => `<section id='hero'>
<div class='container'>
    <img src='${IMG_URL}/${data.backdrop_path}' alt='hero-img' class='img-hero'>
<h2 class='movie-studio'>${data.production_companies[0].name}</h2>
<h1 class='movie-title'>${data.title}</h1>
<ul class='genre-list'>
    ${data.genre.map((genre) => `<li class='genre'>${genre}</li>`).join('\n')}
</ul>
<p class='synopsis'>${data.overview}</p>
<div class='movie-info'>
    <div class='movie-info-item'>
        <p class='label'>Rating</p>
        <p class='value'>${data.vote_average.toFixed(1)}
    </div>
    <div class='movie-info-item'>
        <p class='label'>Popularity</p>
        <p class='value'>${data.popularity}</p>
    </div>
    <div class='movie-info-item'>
        <p class='label'>Year</p>
        <p class='value'>${data.release_date.split('-')[0]}</p>
    </div>
</div>
</div>
</section>`

const html = () => ({
  'section-hero': sectionHero,
})

const css = () => `<style>

    #hero {
        position: relative;
        width: 100%;
        height : 100vh;
        padding-top : 120px;
        margin-bottom : 30px;
    }


    #hero > * {
        z-index: 10;
    }


    #hero .hero-img {
        position: absolute;
        top : 0;
        left : 0;
        width: 100%;
        height: 100%;
        z-index: -10;
        max-width: 9000px;
    }

    #hero::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
       background : linear-gradient(to top,var(--primary-color),#30303052);
        z-index : -1;
    }

    #hero .popular,
    #hero .movie-studio {
        font-size : var(--font-xl);
        color : var(--third-color);
    }

    #hero .movie-title {
        font-size : var(--font-xxl);
        margin-top : 30px;
        margin-bottom : 20px;
        max-width : 80%;
    }

    #hero .synopsis {
        max-width: 600px;
        max-height : 120px;
        overflow-y : auto;
    }

    #hero .synopsis::-webkit-scrollbar {
        width: .7em;
      }

      #hero .synopsis::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      }

      #hero .synopsis::-webkit-scrollbar-thumb {
        background-color: #505050;
        outline: 1px solid #white;
        border-radius: 15px;
      }


    #hero .movie-info {
        display: flex;
        font-size: var(--font-l);
        margin-top: 40px;
    }

    #hero .movie-info * {
        margin-right : 40px;
        position: relative;
    }

    #hero .movie-info .rating::after {
        position: absolute;
        content: '';
        top : 50%;
        transform : translateY(-50%);
        right: -20px;
        width : 3px;
        height : 25px;
        background-color: white;
    }


    #hero .btn-detail {
        background-color : #343c3cef;
        border : none;
        padding : .7rem 3rem;
        width: 250px;
        font-size : var(--font-l);
        border-radius: 10px;
        margin-top : 60px;
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

        #hero {
            margin-bottom :0;
            height : auto;
        }


.synopsis::-webkit-scrollbar {
    width: .4em;
    padding-left : 10px;
  }

  .synopsis::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  .synopsis::-webkit-scrollbar-thumb {
    background-color: #505050;
    outline: 1px solid #white;
    border-radius: 15px;
  }

    }

    /* movie result */



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
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
       background : linear-gradient(to top,var(--primary-color),#30303052);
        z-index : -1;
    }

    #hero .container {
        padding-top : 60px;
    }

    #hero .genre-list {
        display: flex;
        max-width : 90%;
        flex-wrap : wrap;
        font-weight : 600;
        font-size : var(--font-m);
        margin-bottom : 30px;
    }

    #hero .genre-list * {
        margin-right : 30px;
        margin-bottom : 5px;
        padding: 5px 10px;
        border-radius : 5px;
        background-color: #2c3333c8;
    }

    #hero .movie-info * .value {
        margin-top : 15px;
        font-weight: 600;
    }

    #hero .synopsis {
        max-width: 700px;
    }
    @media only screen and (max-width: 630px) {
        #hero .synopsis {
            max-width : 400px;
            max-height : 200px;
            overflow-y : auto;
        }

        #hero .img-hero {
            height : 100%;
        }

    }
     </style>`

export default {
  html,
  css,
}