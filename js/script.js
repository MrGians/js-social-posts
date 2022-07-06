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
