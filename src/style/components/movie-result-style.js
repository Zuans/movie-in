export default `
<style>
* {
    margin :0;
}
.movie-list-side::-webkit-scrollbar {
    width: .7em;
  }

  .movie-list-side::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  .movie-list-side::-webkit-scrollbar-thumb {
    background-color: #505050;
    outline: 1px solid #white;
    border-radius: 15px;
  }

ul {
    list-style-type: none;
}

#movie-result {
    position: fixed;
    top : 73%;
    right : 0;
    transform: translateY(-50%);
    z-index: 3;
    display: flex;
    justify-content : flex-end;
    align-items: center;
    width : auto;
    transition: .5s ease;
    border-radius: 20px;
}

#movie-result.active {
    background : linear-gradient(to left,rgba(48, 48, 48, 1),#2f2f2f49);
    opacity: 1;
    z-index : 1100;
}



#movie-result .icon {
    transition : .3s;
    font-size : 32px;
    z-index : 200;
    color : white;
}

#movie-result .movie-list-side {
    opacity: .7;
    height : 90vh;
    overflow-y : auto;
    overflow-x : hidden;
    padding : 20px 0;
    margin-left : 20px;
    margin-right : 10px;
    margin-bottom : 120px;
}
#movie-result.active .movie-list-side {
    opacity: 1;
}

#movie-result .movie-list-side .movie-list-item {
    margin-bottom: 15px;
    cursor : pointer;
    transition : .1s linear;
}

#movie-result .movie-list-side .movie-list-item:hover {
    transform : translateX(20px);
}



#movie-result .movie-list-side .movie-list-item .movie-img {
    height : 130px;
}

#movie-result .movie-list-side .movie-list-item * {
    opacity: .7;
}

#movie-result.active .movie-list-side .movie-list-item * {
    opacity: 1;
}

#movie-result .movie-list-side .movie-list-item .movie-popular {
    font-size : 16px;
    font-weight : 600;
}

#movie-result .movie-list-side .movie-list-item .movie-title {
    font-size: 20px;
    margin-top : 5px;
    margin-bottom: 10px;
    font-weight : 600;
}

#movie-result .movie-list-side .movie-list-item .rating-and-duration *,
#movie-result .movie-list-side .movie-list-item .genre-list * {
    margin-right : 20px;
    display : flex;
    flex-wrap : wrap;
}

#movie-result .movie-list-side .movie-list-item .icon-star {
    margin : 0;
    margin-right : 5px;
    color : yellow;
    font-size : 20px;
}

#movie-result .movie-list-side .movie-list-item .icon-user {
    margin : 0;
    margin-right : 5px;
    color : var(--third-color);
    font-size : 20px;
}


#movie-result  .icon {
    transition: .2s linear;
    cursor: pointer;
}


#movie-result.active .icon-left {
    transform: rotate(180deg);
}

#movie-result .movie-list-side .movie-list-item {
    display: flex;
}

#movie-result .movie-list-side .movie-list-item .movie-info {
    margin-left: 20px;
    width: 0;
    height: 150px;
    opacity: 0;
    transition: .3s ease;
}

#movie-result.active .movie-list-side .movie-list-item .movie-info {
    width: 250px;
    opacity: 1;
    height: 150px;
}

.rating-and-duration,
.genre-list {
    display : flex;
    margin-bottom : 5px;
}


@media only screen and (max-width : 630px) {
   #movie-result {
        top : 70%;
        right : 20px;
   }

    #movie-result.active {
        width: 100%;
    }

    .movie-list .movie-list-container {
        justify-content: center;
    }
}

</style>

`