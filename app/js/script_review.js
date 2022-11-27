reviews =[
    {
        id: 0, 
        image: "/images/client1.jpg",
        author: "Michal Kowalski", 
        review: "Najlepszy serwis sprzatajacy w miescie, a mialem okazje korzystac juz z wielu.",
    },
    {
        id: 1, 
        image: "/images/client2.jpg",
        author: "Anna Nowak", 
        review: "Bardzo dokladny serwis, polecam!",
    },
    {
        id: 2,
        image: "/images/client3.jpg", 
        author: "Joanna Gorniak", 
        review: "Z uslug Cleanest korzystam przynajmniej dwa razy w miesiacu i jestem bardzo zadowolona.",

    }
]

const image = document.getElementById('image'); 
const author = document.getElementById('author'); 
const review = document.getElementById('review'); 

const nextButton = document.querySelector('.about_next'); 
const prevButton = document.querySelector('.about_prev'); 

let currentItem = 0; 

window.addEventListener('DOMContentLoaded', function(){
showReview(); 
})

function showReview (){
    const item = reviews[currentItem]; 
    image.src = item.image
    author.textContent = item.author; 
    review.textContent = item.review; 
}

nextButton.addEventListener('click', function(){
currentItem++; 
if(currentItem>reviews.length-1){
    currentItem = 0; 
}
showReview(); 
})

prevButton.addEventListener('click', function(){
    currentItem--; 
    if(currentItem<0){
        currentItem = 2; 
    }
    showReview(); 
    })