// Change background images at a certain interval.
/*window.onload = function () {
    document.body.style.background = "url('assets/images/body/background.jpg')";
    var rndImages = [
        "assets/images/body/background.jpg",
        "assets/images/body/background1.jpg",
        "assets/images/body/background2.jpg",
        "assets/images/body/background3.jpg",
        "assets/images/body/background4.jpg",
        "assets/images/body/background5.jpg",
        "assets/images/body/background6.jpg",
        "assets/images/body/background7.jpg",
        "assets/images/body/background8.jpg",
        "assets/images/body/background9.jpg",
        "assets/images/body/background10.jpg",
        ];
    var i = 0;
    setInterval(function () {
        document.body.style.background = "url('" + rndImages[i] + "') no-repeat center center fixed";
        document.body.style.backgroundSize = "cover";
        document.body.style.height = "100%";
        document.body.style.transition = "background 2.5s ease-in-out";
        i++;
        if (i >= rndImages.length) {
            i = 0;
        }
    }, 3000);
}*/

// Hamburger icon thingy for mobile devices
const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".nav-menu");
function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
        // restore content on page
        document.getElementById("mainframe").style.display = "inherit";
        // add hamburger icon
        toggle.innerHTML = `<i class="fas fa-bars"></i>`;
    }
    else {
        menu.classList.add("active");
        // remove content off page
        document.getElementById("mainframe").style.display = "none";
        // add X icon
        toggle.innerHTML = `<i class="fas fa-times"></i>`;
    }
}
toggle.addEventListener("click", toggleMenu, false);

// Appearing/Disappearing of Elements
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("showElem");
        } else {
            entry.target.classList.remove("showElem");
        }
    });
});

// Observer function to refresh the DOM everytime it loads
const hiddenElem1 = document.querySelectorAll("h3");
const hiddenElem = document.querySelectorAll(".card");
hiddenElem.forEach((el) => observer.observe(el));
hiddenElem1.forEach((el) => observer.observe(el));

// Handle form submission
var form = document.getElementById("my-form");
async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("my-form-status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            status.innerHTML = "Thanks, I'll get back to ya soon!";
            form.reset()
        } else {
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    status.innerHTML = data["errors"].map(error => error["message"]).join(", ");
                } else {
                    status.innerHTML = "Oops! There was a problem submitting your form";
                }
            })
        }
    }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form";
    });
}
form.addEventListener("submit", handleSubmit, false);
