export default `
<style>
/* movie list */
* {
    padding : 0;
    margin : 0;
    font-family: 'Poppins', sans-serif;
    box-sizing : border-box;
    color : white ;
}

:root {
    --primary-color : #2C3333;  
    --secondary-color : #395B64;
    --third-color : #A5C9CA;
    --font-xxl : 44px;
    --font-xl : 32px;
    --font-l : 24px;
}

ul {
    list-style-type: none;
}

a {
    color : white;
}


body {
    background-color : var(--primary-color);
    overflow-x: hidden;
}

section {
    width : 80%;
}


/* Class Init */

.container {
    max-width: 1100px;
    margin : auto;
}

.flex {
    display: flex;
}

.font-medium {
    font-weight: 600;
}

.font-bold {
    font-weight: 700;
}


.movie-list {
    background-color: var(--primary-color);
    min-height: 100vh;
    padding : 20px;
    padding-bottom: 0px;
}

#trending-week {
    margin-top : 200px;
}

.movie-list .title-section {
    font-size : var(--font-l);
    position : relative;
    margin-bottom : 40px;
}

.movie-list .title-section::after {
    content : "";
    position : absolute;
    bottom :  -30px;
    left: 0;
    background-color: var(--secondary-color);
    height: 5px;
    width : 80%;
    border-radius : 2px;
}

.movie-list .movie-list-container {
    display: flex;
    justify-content: flex-start;
    padding-top : 30px;
    text-align: center;
    flex-wrap: wrap;
}

.movie-list .movie-list-container .movie-card {
    overflow: hidden;
    position: relative;
    border-radius: 10px;
    margin-right: 100px;
    margin-bottom : 30px;
    transition: .2s linear;
    cursor: pointer;
}

.movie-list .movie-list-container .movie-card:hover {
    transform : scale(1.05);
}


.movie-list .movie-list-container .movie-card .rating {
    position: absolute;
    top : 0;
    left: 0;
    padding : 15px;
    border-bottom-right-radius: 10px;
    background-color: #2c333373;
}


.movie-list .movie-list-container .movie-card .img-movie {
    width: 150px;
    box-shadow: 0 3px 7px rgba(39, 39, 39, 0.713);
    border-radius: 10px;
}

.movie-list .movie-title,
.movie-list .year {
    font-size: 20px;
}

.movie-list .movie-title {
    margin-top : 10px;
    margin-bottom : 5px;
    max-width: 150px;
}

.movie-list .img-wrapper {
    position : relative;
}


@media only screen and (max-width : 630px) {
    .movie-list .movie-list-container {
        justify-content: center;
    }

    .movie-list {
        padding-top : 120px;
    }




}

</style>
`