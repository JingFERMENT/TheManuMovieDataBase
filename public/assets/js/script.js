// aller chercher la source en question
fetch("./public/assets/data/movies.json")
  // une fois téléchargé, transformer une chaine de caractère en format JSON
  .then((response) => response.json())
  // contenu du fichier JSON
  .then((data) => {
    data.results.map((movie) => {
      // déclarer la structure de la carte
      //     let card = `<div class="card border-primary m-3" style="max-width: 540px;">
      //     <div class="row g-0">
      //       <div class="col-md-4">
      //         <img src="${movie.poster_path}" class="img-fluid rounded-start" alt="...">
      //       </div>
      //       <div class="col-md-8">
      //         <div class="card-body">
      //           <h5 class="card-title"></h5>
      //           <p class="card-text">${movie.overview}</p>
      //           <p class="card-text text-primary">La note: ${movie.vote_average}</p>
      //         </div>
      //       </div>
      //     </div>
      //   </div>`;

      let card = `<div class="card mx-2" id = "${movie.id}" >
  <img src="${movie.poster_path}" class="card-img-top" alt="..." >
  <div class="card-body">
    <h5 class="card-title">${movie.original_title}</h5>
    <p class="card-text">${movie.overview}</p>
    <a href="#" class="btn btn-primary">La note: ${movie.vote_average}</a>
    <i class="fa-solid fa-star" style="color: #ffa41c;"></i>
    <i class="fa-solid fa-star" style="color: #ffa41c;"></i>
    <i class="fa-solid fa-star" style="color: #ffa41c;"></i>
    <i class="fa-solid fa-star" style="color: #ffa41c;"></i>
    <i class="fa-regular fa-star" style="color: #ffa41c;"></i>
    </div>
</div>`;

      // cibler l'endroit où on veut le mettre
      const movieElement = document.getElementById("cardMovie");
      movieElement.innerHTML += card;
    });
  });
