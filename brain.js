//mobile navigation
{
  const navButton = document.querySelector(".nav-button");
  let navLink = document.querySelectorAll(".nav-link").forEach((link) =>
    link.addEventListener("click", function () {
      headerEl.classList.toggle("open");
    })
  );
  const headerEl = document.querySelector(".hero-header");
  navButton.addEventListener("click", function () {
    headerEl.classList.toggle("open");
  });
}

//faq section
{
  let faq1 = document.getElementById("faq1");
  let faq2 = document.getElementById("faq2");
  let faq3 = document.getElementById("faq3");
  let faq4 = document.getElementById("faq4");

  faq1.onclick = function () {
    faq1.classList.toggle("faq-open");
  };

  faq2.onclick = function () {
    faq2.classList.toggle("faq-open");
  };

  faq3.onclick = function () {
    faq3.classList.toggle("faq-open");
  };

  faq4.onclick = function () {
    faq4.classList.toggle("faq-open");
  };
}
//sticky navigation
{
  let heroSection = document.getElementById("heroSection");
  let obs = new IntersectionObserver(
    function (entries) {
      let ent = entries[0];
      if (ent.isIntersecting === false) {
        document.body.classList.add("sticky");
      }
      if (ent.isIntersecting) {
        document.body.classList.remove("sticky");
      }
    },
    {
      //usefull in the viewport
      root: null,
      threshold: 0,
      rootMargin: "-80px",
    }
  );
  obs.observe(heroSection);
}
//testimonials section
{
  let slideIndex = 1;
  showSlides(slideIndex);

  // Next/previous controls
  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  // Thumbnail image controls
  function currentSlide(n) {
    showSlides((slideIndex = n));
  }

  function showSlides(n) {
    var i;
    let slides = document.getElementsByClassName("testimonial");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" dot--fill", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " dot--fill";
  }
  setInterval(function () {
    plusSlides(+1);
  }, 5500);
}
{
  let formData = {};
  let today = new Date();
  today.setHours(0);
  today.setMinutes(0);
  let flagcin = 0,
    flagcout = 0;
  let submitButton = document.getElementById("submitButton");
  let checkindate = document.getElementById("checkindate");
  let checkoutdate = document.getElementById("checkoutdate");
  let checkoutErr = document.getElementById("checkoutErr");
  let checkinErr = document.getElementById("checkinErr");
  let roomBookContainer = document.getElementById("roomBookContainer");
  let p;
  function checkInValidate() {
    flagcin = 0;
    let checkindateValue = checkindate.value;
    let checkindateValueDate = new Date(checkindateValue);
    p = checkindateValueDate;
    checkinErr.textContent = "";
    if (checkindateValueDate < today) {
      checkinErr.textContent = "*Enter Valid Date";
      flagcin = 1;
    }
    if (checkindateValue == "") {
      checkinErr.textContent = "*Enter Valid Date";
      flagcin = 1;
    }
  }
  function checkOutValidate() {
    flagcout = 0;
    let checkoutdateValue = checkoutdate.value;
    let checkoutdateValueDate = new Date(checkoutdateValue);

    formData["nights"] = (checkoutdateValueDate - p) / (1000 * 3600 * 24);
    checkoutErr.textContent = "";
    if (p >= checkoutdateValueDate) {
      checkoutErr.textContent = "*Enter Valid Date";
      flagcout = 1;
    }
    if (checkoutdateValue == "") {
      checkoutErr.textContent = "*Enter Valid Date";
      flagcout = 1;
    }
  }
  function displayRooms() {
    if (flagcin === 0 && flagcout === 0)
      roomBookContainer.classList.remove("hide");
  }
  checkindate.addEventListener("change", function (event) {
    checkInValidate();
  });
  checkoutdate.addEventListener("change", function (event) {
    checkOutValidate();
  });
  submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    let adults = document.getElementById("adults");
    let child = document.getElementById("child");
    let checkindateValue = checkindate.value;
    let checkoutdateValue = checkoutdate.value;
    let adultsValue = adults.value;
    let childValue = child.value;
    formData = {
      checkindateValue,
      checkoutdateValue,
      adultsValue,
      childValue,
    };
    checkInValidate();
    checkOutValidate();
    displayRooms();
  });
}
// Initialize and add the map
function initMap() {
  // The location of Uluru 26.901359,75.751577
  const uluru = { lat: 26.901359, lng: 75.751577 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}