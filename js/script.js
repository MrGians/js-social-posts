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

// Inizializzo la variabile di appoggio postModule che conterrà i vari post da stampare sul DOM
let postModule = "";

// Creo un ciclo FOR per girare in tutti gli Oggetti dell'array
for (let i = 0; i < socialPostList.length; i++) {

  // Eseguo il Destructuring dell'array di oggetti
  const {post_id, author_name, author_pic, post_date, post_content, post_image, post_likes} = socialPostList[i];

  // Creo il post da stampare in pagina tramite il template literal
  postModule += `
    <div class="post">
      <div class="post__header">
        <div class="post-meta">
          <div class="post-meta__icon">
            <img class="profile-pic" src="${author_pic}" alt="${author_name}" />
          </div>
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
            <a class="like-button js-like-button" href="#" data-postid="${post_id}">
              <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
              <span class="like-button__label">Mi Piace</span>
            </a>
          </div>
          <div class="likes__counter">Piace a <b id="like-counter-${post_id}" class="js-likes-counter">${post_likes}</b> persone</div>
        </div>
      </div>
    </div>
  `;
}
// Inserisco nel DOM i post generati dal ciclo
postContainer.innerHTML = postModule;



