fetch("./public/assets/data/movies.json")
  .then((response) => response.json())
  .then((data) => {
    data.results.map((movie) => {
      
      // déclarer la structure de la carte
      const card = `<div class="card m-2" id ="${movie.id}" >
                    <img src="${movie.poster_path}" class="card-img-top m-auto" alt="..." >
                    <div class="card-body">
                      <h5 class="card-title">${movie.original_title}</h5>
                      <div class="scroll">
                        <p class="card-text">${movie.overview}</p>
                      </div>
                      <div class="mt-4 d-flex justify-content-between">
                        <p>Note: ${movie.vote_average}</p>
                        <div class="rating">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        </div>
                      </div>
                    </div>
                  </div>`;

      // cibler l'endroit où on veut le mettre
      const movieElement = document.getElementById("cardMovie");
      movieElement.innerHTML += card;
    });
  });
