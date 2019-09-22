var movies = [
  {
    title: "Titanic",
    rating: 5,
    hasWatched: true
  },
  {
    title: "Avengers End Game",
    rating: 3.5,
    hasWatched: false
  },
  {
    title: "Spiderman",
    rating: 4,
    hasWatched: true
  }
]

movies.forEach(function(movie) {
  if (movie.hasWatched === true) {
    console.log("You have watched " + "\"" + movie.title + "\"" + " - " + movie.rating + " stars")
  } else {
    console.log("You have not watched " + "\"" + movie.title + "\"" + " - " + movie.rating + " stars")
  }
})