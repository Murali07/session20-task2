document.body.innerHTML = `
        <div class = "game-form">  
          <h1> Games </h1>
          <section class ="games-list">    
          </section>`;

async function getAllGames() {
  const data = await fetch(
    "https://free-to-play-games-database.p.rapidapi.com/api/games",

    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
        "x-rapidapi-key": "ac4da691a0msh717af6dc95e5e2dp10b7f8jsn938071a1852f",
      },
    }
  ); 

  const games = await data.json();

  const gameContainer = document.querySelector(".games-list");
  gameContainer.innerHTML = ""; 

  games.forEach((game) => {
    gameContainer.innerHTML += `
            <div class ="game-container">
                <div>
                    <img class ="thumbnail" src = "${game.thumbnail}" alt = "${game.id}" />  
                </div>                   
                <div class ="specs">                   
                    <ul>
                      <li class ="game-name">${game.title} </li> <br>
                      <li class ="game-desc"><span>Description:</span> ${game.short_description} </li><br>
                      <li class ="game-genre"><span>Genre:</span> ${game.genre} </li><br>
                      <li class ="game-dev"><span>Developer:</span> ${game.developer} </li><br>
                      <li class ="game-date"><span>Release Date:</span> ${game.release_date} </li>
                    </ul>
                </div>               
            </div>    
        `;
  });

  console.log(games);
}
getAllGames();

