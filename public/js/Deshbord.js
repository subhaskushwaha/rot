// Side bar ka section implimant
document.addEventListener("DOMContentLoaded", function() {
    const sidebar = document.querySelector(".sidebar");
    const toggleButton = document.createElement("button");

     
    toggleButton.classList.add("toggle-btn");
    document.body.appendChild(toggleButton);

    toggleButton.addEventListener("click", function() {
        sidebar.classList.toggle("open");
    });
});

function toggleSidebar() {
  document.querySelector('.sidebar').classList.toggle('open');
}


// Banerr Selection

const banners = [
    "images/dashbord/baneer_3.jpg",
    "images/dashbord/baneer_2.jpg",
    "images/dashbord/baneer_3.jpg",
    "images/dashbord/baneer_4.jpg",
    "images/dashbord/baneer_5.jpg",
    "images/dashbord/baneer_1.jpg",
    // "/image_all/baneer_01.jpg",
   
];

let currentIndex = 0;
const bannerImage = document.getElementById("bannerImage");
const dots = document.querySelectorAll(".dot");
let interval;

function changeBanner(index) {
    currentIndex = index;
    bannerImage.src = banners[currentIndex];
    updateDots();
    resetInterval();
}

function updateDots() {
    dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentIndex);
    });
}

function autoChangeBanner() {
    currentIndex = (currentIndex + 1) % banners.length;
    changeBanner(currentIndex);
}

function resetInterval() {
    clearInterval(interval);
    interval = setInterval(autoChangeBanner, 2000);
}

interval = setInterval(autoChangeBanner, 2000);







//    sare new bar ke liye/

// script.js
document.addEventListener("DOMContentLoaded", function () {
    fetch("h.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar-container").innerHTML = data;
        })
        .catch(error => console.error("Error loading navbar:", error));
});




{/* <divid ="navbar-container"></div>  */}



////////////////////


function loadComponent(componentName) {
    fetch(`deshbord/components/${componentName}.html`)
      .then(res => res.text())
      .then(html => {
        document.getElementById('content-area').innerHTML = html;
      })
      .catch(err => console.error("Component load error:", err));
  }
  // Sidebar button click pe ye call hoga
loadComponent('profile');   // Will load profile.html
loadComponent('feedback');  // Will load feedback.html
