const favoriteMovies = [
    {
      movieTitle: "Catch me if you can",
      reasonWhy: "I like the thought of being rich",
      movieImageURL: "https://m.media-amazon.com/images/I/81V+b69u3xL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      movieTitle: "The little Rascals",
      reasonWhy: "It's a childhood favorite and I liked the idea of being able to run around and do whatever with no adults as a kid",
      movieImageURL: "https://upload.wikimedia.org/wikipedia/en/6/6f/Little_rascals_ver2.jpg"
    },
    {
      movieTitle: "Scream",
      reasonWhy: "It's one of the first movies I saw that incorporated humor into horror",
      movieImageURL: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p18852_p_v10_al.jpg"
    }
  ];
  
  // Function to populate dropdown menu with movie titles
  function populateDropdown() {
    const dropdown = document.getElementById('movieDropdown');
    favoriteMovies.forEach(movie => {
      const option = document.createElement('option');
      option.value = movie.movieTitle;
      option.textContent = movie.movieTitle;
      dropdown.appendChild(option);
    });
  }
  
  // Function to pick a random movie and display it
  function pickRandomMovie() {
    const randomIndex = Math.floor(Math.random() * favoriteMovies.length);
    const randomMovie = favoriteMovies[randomIndex];
    const randomMovieContainer = document.getElementById('randomMovieContainer');
    randomMovieContainer.innerHTML = `
      <h2>You should watch "${randomMovie.movieTitle}"</h2>
      <p>Reason: ${randomMovie.reasonWhy}</p>
      <img src="${randomMovie.movieImageURL}" alt="${randomMovie.movieTitle}" class="img-fluid">
    `;
  }
  
  // Event listener for the random movie button
  document.getElementById('randomMovieBtn').addEventListener('click', pickRandomMovie);
  
  // Populate dropdown menu on page load
  populateDropdown();