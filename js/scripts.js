var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("heroSlide");
    var indicators = document.getElementsByClassName("indicator");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    for (i = 0; i < indicators.length; i++) {
        indicators[i].className = indicators[i].className.replace(" active-indicator", "");
    }
    slides[slideIndex - 1].style.display = "block";
    indicators[slideIndex - 1].className += " active-indicator";
    setTimeout(showSlides, 5000);
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function currentDiv(n) {
    showDivs(slideIndex = n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("heroSlide");
    var indicators = document.getElementsByClassName("indicator");

    if (n > x.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = x.length
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < indicators.length; i++) {
        indicators[i].className = indicators[i].className.replace(" active-indicator", "");
    }
    x[slideIndex - 1].style.display = "block";
    indicators[slideIndex - 1].className += " active-indicator";

}
