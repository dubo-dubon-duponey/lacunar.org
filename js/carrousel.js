var Slideshow = function(anc){
  const anchor = anc ? anc : document.querySelector("body :first-child");
  let slideIndex = 0;

  let trigger;

  let showSlides = function(inc){
    let i;
    let slides = anchor.getElementsByClassName("slides");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex += inc ? inc : 1;
    if (slideIndex > slides.length) {slideIndex = 1}
    if (slideIndex <= 0){ slideIndex = slides.length; }
    slides[slideIndex-1].style.display = "block";
  }

  const prev = anchor.getElementsByClassName("prev")[0];
  const next = anchor.getElementsByClassName("next")[0];
  prev.addEventListener("click", function(){
    showSlides(-1)
  });
  next.addEventListener("click", function(){
    showSlides(1)
  });

  const start = this.start = function(noKick){
    if (trigger)
      return;
    if (!noKick)
      showSlides();
    trigger = setInterval(showSlides, 5000); // Change image every 2 seconds
  }

  const stop = this.stop = function(){
    if (!trigger)
      return;
    clearInterval(trigger);
    trigger = "";
  }

  let cntainer = anchor.getElementsByClassName("slideshow-container")[0];
  cntainer.addEventListener("mouseenter", stop);
  cntainer.addEventListener("mouseleave", start);
}

window.addEventListener('DOMContentLoaded', (event) => {
  let nodes = document.querySelectorAll(".livres_slide");
  for (var x = 0; x < nodes.length; x++) {
    let s = new Slideshow(nodes[x]);
    s.start();
  }
});
