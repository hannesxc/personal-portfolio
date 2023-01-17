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

// Project cards
var res = ""
var proj = document.getElementById("proj")
const projects = [{
    title: "Resplash (WIP)",
    subtitle: "Unsplash like website, where users can authenticate/login and post images on the homepage which all users are able to see, download, like, etc. Uses lazy loading of images and firebase as backend.",
    gitLink: "https://github.com/hannesxc/resplash",
    actualLink: "https://hannesc.me/resplash",
    techStack: "ReactJS, TailwindCSS, OAuth2, Firebase",
    cardImg: "/assets/images/projects/unknown11.webp"
},{
    title: "Aerum",
    subtitle: "Aerum uses the IQAir API to fetch accurate weather and pollution data to keep the end user informed of their air quality (AQI) and their main pollutant around them, along with normal weather data. Has google maps API integrated.",
    gitLink: "https://github.com/hannesxc/aerum",
    actualLink: "https://hannesc.me/aerum",
    techStack: "ReactJS, Material-UI, MapsAPI",
    cardImg: "/assets/images/projects/unknown10.webp"
},{
    title: "Rest-Up",
    subtitle: "Rest-Up is a web application where people can find nightclubs, restaurants, bars, etc in the UK. Uses google maps API for map integration, and wyre (rapidapi) for fetching the data for UK cities.",
    gitLink: "https://github.com/hannesxc/rest-up",
    actualLink: "https://hannesc.me/rest-up",
    techStack: "ReactJS, Material-UI, MapsAPI",
    cardImg: "/assets/images/projects/unknown9.webp"
},{
    title: "DownpourChat",
    subtitle: "Private E2EE chatting application (rooms) with downloadable transcripts of your conversation in JSON format. All data is flushed on session termination from our backend.",
    gitLink: "https://github.com/hannesxc/downpour-chat",
    actualLink: "https://downpour-chat.onrender.com/",
    techStack: "ReactJS, SocketIO, NodeJS, ExpressJS, MongoDB",
    cardImg: "/assets/images/projects/unknown8.webp"
},{
    title: "Artificial-Me",
    subtitle: "My first AI curated chatbot (Anna) made with IBM Watson AI, integrated with a shell-ish look website which serves as a partial portfolio cum chatbot showcase.",
    gitLink: "https://github.com/hannesxc/artificial-me-chatbot",
    actualLink: "https://hannesc.me/artificial-me-chatbot/",
    techStack: "ReactJS, CSS, IBM Watson AI",
    cardImg: "/assets/images/projects/unknown7.webp"
},{
    title: "To-Do V2",
    subtitle: "Normal to-do app, except it doesn’t really delete completed entries, but archives them for a future note. Along with authentication and backend integration, for data retention, and a seamless experience!",
    gitLink: "https://github.com/hannesxc/to-do-list",
    actualLink: "https://hannesc.me/to-do-list/",
    techStack: "ReactJS, CSS, OAuth2, Firebase",
    cardImg: "/assets/images/projects/unknown6.webp"
},{
    title: "Weatherify",
    subtitle: "Check for current, max/min temps, wind, conditions, etc wherever you live. Integrated with openweathermap's API to always fetch the latest and most accurate info available. Only works for US/EU cities.",
    gitLink: "https://github.com/hannesxc/weatherify",
    actualLink: "https://hannesc.me/weatherify",
    techStack: "ReactJS, CSS, OpenWeatherMap API",
    cardImg: "/assets/images/projects/unknown5.webp"
},{
    title: "Hannes & Co.",
    subtitle: "Fictitious e-commerce clothing store named Hannes & Co. made to showcase my frontend skills. No backend integration had been done, would probably do it at a later point.",
    gitLink: "https://github.com/hannesxc/ecommerce-store",
    actualLink: "https://hannesc.me/ecommerce-store/",
    techStack: "HTML, CSS, Javascript",
    cardImg: "/assets/images/projects/unknown4.webp"
},{
    title: "Personal-Portfolio",
    subtitle: "Made a minimalistic, responsive and lightweight portfolio site for my own site content, to showcase my certifications, courses, education, projects, etc",
    gitLink: "https://github.com/hannesxc/personal-portfolio",
    actualLink: "https://adityach.xyz/",
    techStack: "HTML, CSS, Javascript",
    cardImg: "/assets/images/projects/unknown3.webp"
},{
    title: "Flipcrackt",
    subtitle: "Flipkart Demo. NOT mobile responsive, unpolished and doesn't have placeholder images - was on its very early stages when I stopped working on it.",
    gitLink: "https://github.com/hannesxc/flipkart-demo-site",
    actualLink: "https://hannesc.me/flipkart-demo-site/",
    techStack: "HTML, CSS, Javascript",
    cardImg: "/assets/images/projects/unknown2.webp"
},{
    title: "Calculator(w/ SI & CI)",
    subtitle: "One of my very first projects, basic calculator along with simple interest and compound interest calculators.",
    gitLink: "https://github.com/hannesxc/calculator",
    actualLink: "https://hannesc.me/calculator/",
    techStack: "HTML, CSS, Javascript",
    cardImg: "/assets/images/projects/unknown1.webp"
}];

projects.forEach( (project, idx) => {
    res += `<div class="card" id="card${idx}"><div class="inner"><h2 class="title">${project.title}</h2><p class="subtitle">${project.subtitle}</p><div class="group"><a href=${project.actualLink} target="_blank"><img src="./assets/images/socials/link.svg" alt="external" /></a><a href=${project.gitLink} target="_blank"><img src="./assets/images/socials/github.svg" alt="github" /></a></div><p class="outer">${project.techStack}</p></div></div>`
});

// Render project background images
if (proj) {
    proj.innerHTML = res;
    for(let i = 0; i < projects.length; i++) {
        document.getElementById(`card${i}`).style.backgroundImage = `url(${projects[i].cardImg})`;
    }
}

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
if (form) {
    form.addEventListener("submit", handleSubmit, false);
}




