const quotes = [
    { "id": 1, "quote": "The best way to predict the future is to create it.", "author": "Peter Drucker" },
    { "id": 2, "quote": "In the middle of difficulty lies opportunity.", "author": "Albert Einstein" },
    { "id": 3, "quote": "Do what you can, with what you have, where you are.", "author": "Theodore Roosevelt" },
    { "id": 4, "quote": "Happiness depends upon ourselves.", "author": "Aristotle" },
    { "id": 5, "quote": "Turn your wounds into wisdom.", "author": "Oprah Winfrey" },

    { "id": 6, "quote": "The purpose of our lives is to be happy.", "author": "Dalai Lama" },
    { "id": 7, "quote": "Life is what happens when you're busy making other plans.", "author": "John Lennon" },
    { "id": 8, "quote": "Get busy living or get busy dying.", "author": "Stephen King" },
    { "id": 9, "quote": "You only live once, but if you do it right, once is enough.", "author": "Mae West" },
    { "id": 10, "quote": "Be yourself; everyone else is already taken.", "author": "Oscar Wilde" },

    { "id": 11, "quote": "We accept the love we think we deserve.", "author": "Stephen Chbosky" },
    { "id": 12, "quote": "It is better to be hated for what you are than to be loved for what you are not.", "author": "André Gide" },
    { "id": 13, "quote": "The only impossible journey is the one you never begin.", "author": "Tony Robbins" },
    { "id": 14, "quote": "That which does not kill us makes us stronger.", "author": "Friedrich Nietzsche" },
    { "id": 15, "quote": "Everything you can imagine is real.", "author": "Pablo Picasso" },

    { "id": 16, "quote": "Simplicity is the ultimate sophistication.", "author": "Leonardo da Vinci" },
    { "id": 17, "quote": "Whatever you are, be a good one.", "author": "Abraham Lincoln" },
    { "id": 18, "quote": "If you tell the truth, you don't have to remember anything.", "author": "Mark Twain" },
    { "id": 19, "quote": "To live is the rarest thing in the world. Most people exist, that is all.", "author": "Oscar Wilde" },
    { "id": 20, "quote": "Without music, life would be a mistake.", "author": "Friedrich Nietzsche" },

    { "id": 21, "quote": "Be the change that you wish to see in the world.", "author": "Mahatma Gandhi" },
    { "id": 22, "quote": "If opportunity doesn't knock, build a door.", "author": "Milton Berle" },
    { "id": 23, "quote": "Dream big and dare to fail.", "author": "Norman Vaughan" },
    { "id": 24, "quote": "Act as if what you do makes a difference. It does.", "author": "William James" },
    { "id": 25, "quote": "Success is not final, failure is not fatal.", "author": "Winston Churchill" },

    { "id": 26, "quote": "Love all, trust a few, do wrong to none.", "author": "William Shakespeare" },
    { "id": 27, "quote": "Where there is love there is life.", "author": "Mahatma Gandhi" },
    { "id": 28, "quote": "You miss 100% of the shots you don't take.", "author": "Wayne Gretzky" },
    { "id": 29, "quote": "Stay hungry, stay foolish.", "author": "Steve Jobs" },
    { "id": 30, "quote": "Do one thing every day that scares you.", "author": "Eleanor Roosevelt" }
  ];



  const quoteName = document.getElementById("quote-name")
  const authorName = document.getElementById("author-name")
const Carts = document.getElementById("cards")

  const btn_pre = document.getElementById("btn-pre")
   const btn_like = document.getElementById("btn-like")
    const btn_next = document.getElementById("btn-next")
    const Liked = document.getElementById("Liked")

  let index = 0;
  quoteName.textContent = quotes[index].quote;
  authorName.textContent = quotes[index].author;

  btn_next.addEventListener("click", () =>{
  index ++;
  btn_pre.classList = "btn btn-outline-secondary";
  quoteName.textContent = quotes[index].quote;
  authorName.textContent =quotes[index].author;

});
btn_pre.addEventListener("click", () => {
  if(index == 0){
    btn_pre.classList = "btn btn-outline-secondary disabled";
  }

  index -- ;
  quoteName.textContent = quotes[index].quote;
  authorName.textContent = quotes[index].author
})

btn_like.addEventListener("click", () => {
  let likedQuotes = JSON.parse(localStorage.getItem("like-cart")) || [];


  let current = quotes[index];


  let exists = likedQuotes.find(q => q.id === current.id);

  if (!exists) {
    likedQuotes.push(current);
    localStorage.setItem("like-cart", JSON.stringify(likedQuotes));
    alert("Liked ");
  } else {
    alert("Already liked 👍");
  }
});


btn_like.addEventListener("click", () => {
  let likedQuotes = JSON.parse(localStorage.getItem("like-cart")) || [];

  let current = quotes[index];

  let exists = likedQuotes.find(q => q.id === current.id);

  if (!exists) {
    likedQuotes.push(current);
    localStorage.setItem("like-cart", JSON.stringify(likedQuotes));
    alert("Liked ❤️");
  }
});