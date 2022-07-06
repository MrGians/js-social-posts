// # TRACCIA
// Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:

// # Milestone 1
// Creiamo il nostro array di oggetti che rappresentano ciascun post.
// Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
// - id del post, numero progressivo da 1 a n
// - nome autore,
// - foto autore,
// - data in formato americano (mm-gg-yyyy),
// - testo del post,
// - immagine (non tutti i post devono avere una immagine),
// - numero di likes.

// #Milestone 2
// Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.

// #Milestone 3
// Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.

// # ****BONUS**
//  1. Formattare le date in formato italiano (gg/mm/aaaa)
//  2. Gestire l'assenza dell'immagine profilo con un elemento di fallback che contiene le iniziali dell'utente (es. Luca Formicola  => LF).
//  3. Al click su un pulsante "Mi Piace" di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone.



// Definisco l'array di oggetti con i relativi Post
const socialPostList = [
  {
    post_id: 1,
    author_name: "Phil Mangione",
    author_pic: "https://unsplash.it/300/300?image=15",
    post_date: "12-17-2021",
    post_content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias",
    post_image: "https://unsplash.it/600/300?image=100",
    post_likes: 80,
  },
  {
    post_id: 2,
    author_name: "Sofia Perlari",
    author_pic: "https://unsplash.it/300/300?image=19",
    post_date: "02-23-2022",
    post_content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias",
    post_image: "https://unsplash.it/600/300?image=101",
    post_likes: 120,
  },
  {
    post_id: 3,
    author_name: "Gianluca Mura",
    author_pic: "",
    post_date: "04-15-2022",
    post_content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias",
    post_image: "https://unsplash.it/600/300?image=102",
    post_likes: 29,
  },
];

// Dichiaro variabili DOM
const postContainer = document.getElementById("container");

// ------------------------------ FUNZIONI ------------------------------ //

// Creo una funzione che modifichi la visualizzazione della data in pagina in (gg-mm-aaaa)
const editDate = (stringDate) => {
  // Recupero la data in formato americano
  const currentDate = stringDate;
  console.log(stringDate)
  // Inserisco i giorni in una variabile
  const currentDay = currentDate.substr(3, 2);
  console.log(currentDay);
  // Inserisco i mesi in una variabile
  const currentMonth = currentDate.substr(0, 2);
  console.log(currentMonth);
  // Inserisco gli anni in una variabile
  const currentYear = currentDate.substr(6, 4);
  console.log(currentYear);
  // Ricostruisco la data in formato Italiano
  const newDateIT = `${currentDay}-${currentMonth}-${currentYear}`
  console.log(newDateIT);
  // Restituisco newDateIT
  return newDateIT;
}

// ------------------------------ SOCIAL POST ------------------------------ //

// Inizializzo la variabile di appoggio postModule che conterrà i vari post da stampare sul DOM
let postModule = "";

// Creo un ciclo FOR per girare in tutti gli Oggetti dell'array
for (let i = 0; i < socialPostList.length; i++) {

  // Eseguo il Destructuring dell'array di oggetti
  let {post_id, author_name, author_pic, post_date, post_content, post_image, post_likes} = socialPostList[i];

  // Modifico la data in formato italiano
  post_date = editDate(post_date);

  // Creo l'inizio del post tramite il template literal
  postModule += `
    <div class="post">
      <div class="post__header">
        <div class="post-meta">
  `;
  // Verifico che l'utente abbia un'immagine di profilo o meno
  if (author_pic === "") {
    postModule += `
            <div class="post-meta__icon">
              <span class="profile-pic-default">G M</span>
            </div>
    `;        // ! TO DO: INSERIRE INIZIALI DINAMICAMENTE 
  } else {
    postModule += `
            <div class="post-meta__icon">
              <img class="profile-pic" src="${author_pic}" alt="${author_name}" />
            </div>
    `;
  }
  // Concateno la fine del post 
  postModule += `
          <div class="post-meta__data">
            <div class="post-meta__author">${author_name}</div>
            <div class="post-meta__time">${post_date}</div>
          </div>
        </div>
      </div>
      <div class="post__text">${post_content}</div>
      <div class="post__image">
        <img src="${post_image}" alt="landscape ${post_id}" />
      </div>
      <div class="post__footer">
        <div class="likes js-likes">
          <div class="likes__cta">
            <button class="like-button js-like-button" data-postid="${post_id}">
              <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
              <span class="like-button__label">Mi Piace</span>
            </button>
          </div>
          <div class="likes__counter">Piace a <b id="like-counter-${post_id}" class="js-likes-counter">${post_likes}</b> persone</div>
        </div>
      </div>
    </div>
  `;
  
}

// Inserisco nel DOM i post generati dal ciclo
postContainer.innerHTML = postModule;



// Recupero i bottoni "Mi piace" dal DOM
const likeButtons = document.querySelectorAll(".js-like-button");
let elementLikes = document.querySelectorAll(`.js-likes-counter`);


// Creo un ciclo FOR per girare nell'array "likeButtons"
for (let i = 0; i < likeButtons.length; i++) {

  // Al click del bottone "Mi piace" cambio il colore del testo ed incremento il numero dei mi piace +1
  likeButtons[i].addEventListener("click", (event) => {

    // Al click del bottone, viene aggiunta/rimossa la classe "like-button--liked"
    event.currentTarget.classList.toggle("like-button--liked");

    // Creo una variabile d'appoggio per l'indice di ElementLikes
    const likeTarget = elementLikes[i];
   
    // SE il bottone contiene la classe "like-button--liked" allora incremento di 1 i Likes
    if (event.currentTarget.classList.contains("like-button--liked")) likeTarget.innerText = ++socialPostList[i]["post_likes"];
    // Altrimenti (se viene rimossa) decremento di 1 i Likes
    else likeTarget.innerText = --socialPostList[i]["post_likes"];

  })
}