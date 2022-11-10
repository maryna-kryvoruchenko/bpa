//Picture Slideshow
var currentSlide = 0;
const slides = document.querySelectorAll(".slide")
const dots = document.querySelectorAll('.dot')

const init = (n) => {
  slides.forEach((slide) => {
    slide.style.display = "none"
    dots.forEach((dot) => {
      dot.classList.remove("active")
    })
  })
  slides[n].style.display = "block"
  dots[n].classList.add("active")
}
document.addEventListener("DOMContentLoaded", init(currentSlide))

const next = () => {
    currentSlide >= slides.length - 1 ? currentSlide = 0 : currentSlide++
    init(currentSlide)
  }
  
  const prev = () => {
    currentSlide <= 0 ? currentSlide = slides.length - 1 : currentSlide--
    init(currentSlide)
  }
  
  document.querySelector(".next").addEventListener('click', next)
  document.querySelector(".prev").addEventListener('click', prev)

setInterval(() => {
    next()
  }, 5000);

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
    init(index)
    currentSlide = i
    })
  })
//animated title
if (document.getElementById("slider--text")) {
    let slides = [
        "<h1>Welcome to Old Bob's Classic Auto</h1>",
        "<img class='home-logo' src='images/homeLogo.png' alt='logo'>"
    ];

    let i = 0;

    const slider = () => {
        document.getElementById("slider--text").innerHTML = slides[i];
        document.getElementById("slider--text").classList.add('fade-in');

        (i < slides.length - 1) ? i++ : i = 0;
    };

    slider(); // Start slider immediately
    setInterval(slider, 4000); // Slide every 4 seconds
}

//Auction countdown
// Set the date we're counting down to
var countDownDate = new Date("Mar 15, 2023 15:30:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("auctionCount").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("auctionCount").innerHTML = "EXPIRED";
  }
}, 1000);
const navbarMenu = document.querySelector('.navbar__menu');
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', () =>{
    navbarMenu.classList.toggle('open');
} )
