
//---------------- owl-carousel ----------------
$(document).ready(function () {
    $('#testimonials-carousel').owlCarousel({
        margin: 20,
        responsive: {
            0: { items: 1 },
            776: { items: 2 },
            1200: { items: 3 }
        }
    })
});
//---------------- AOS ----------------
AOS.init({
    duration: 700,   // مدة الأنيميشن
    offset: 150,
});
window.addEventListener("load", function () {
    AOS.refresh();
});
// dark mood button
window.onload = () => {
    localStorage.getItem("mood") == "dark" ? document.querySelector("body").classList.add("dark") : document.querySelector("body").classList.remove("dark");
    document.body.classList.contains("dark") ? document.querySelector(".mood-btn i").classList.replace("fa-moon", "fa-sun") : document.querySelector(".mood-btn i").classList.replace("fa-sun", "fa-moon");
    (window.scrollY > 95) ? document.querySelector("header").classList.add("scrolled") : document.querySelector("header").classList.remove("scrolled")
}
document.querySelector('.mood-btn').onclick = () => {
    if (localStorage.getItem("mood")) {
        if (localStorage.getItem("mood") == "dark") {
            localStorage.setItem("mood", "light");
            document.querySelector("body").classList.remove("dark");
            document.querySelector(".mood-btn i").classList.replace("fa-sun", "fa-moon")
        } else {
            localStorage.setItem("mood", "dark");
            document.querySelector("body").classList.add("dark");
            document.querySelector(".mood-btn i").classList.replace("fa-moon", "fa-sun")
        }
    }
    else {
        localStorage.setItem("mood", "light");
    }
}

// Header background in scroll

window.onscroll = () => {
    if (window.scrollY > 95) {
        document.querySelector("header").classList.add("scrolled");
        document.querySelector(".to-top-btn").classList.add("show");

    } else {
        document.querySelector("header").classList.remove("scrolled")
        document.querySelector(".to-top-btn").classList.remove("show");
    }
}

// burger button 
let burger_btn = document.querySelector(".navbar-toggler .fa-bars");

if (document.querySelector(".collapse").classList.contains("show")) {
    burger_btn.classList.replace("fa-bars", "fa-close")
} else {
    burger_btn.classList.replace("fa-close", "fa-bars")

}

document.querySelector(".navbar-toggler").onclick = () => {
    burger_btn.classList.toggle(burger_btn.classList.contains("fa-bars") ? burger_btn.classList.replace("fa-bars", "fa-close") : burger_btn.classList.replace("fa-close", "fa-bars"));
}

// nav-link class (active)

let nav_linkes = document.querySelectorAll("header .nav-link")
nav_linkes.forEach(nav_linke => {
    nav_linke.addEventListener("click", function () {
        nav_linkes.forEach(other_nav_linke => {
            other_nav_linke.classList.remove("active");
        });
        this.classList.add("active");
    })
});


// to-top-btn

document.querySelector(".to-top-btn").onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
}

// Event-schedule btns

let Event_schedule_butns = document.querySelectorAll(".Event-schedule .tabs button");
let items = document.querySelectorAll(".Event-schedule .item");

Event_schedule_butns.forEach(btn => {
    btn.onclick = function () {
        Event_schedule_butns.forEach(el => {
            el.classList.remove("active")
        });
        this.classList.add("active")
        items.forEach(item => {
            item.classList.remove("show");
        });
        let one = document.querySelectorAll(".Event-schedule .item.one");
        let two = document.querySelectorAll(".Event-schedule .item.two");
        let three = document.querySelectorAll(".Event-schedule .item.three");
        switch (this.id) {
            case "1":
                one.forEach(element => {
                    element.classList.add("show")
                });
                break;
            case "2":
                two.forEach(element => {
                    element.classList.add("show")
                });
                break;
            case "3":
                three.forEach(element => {
                    element.classList.add("show")
                });
                break;
            default:
                one.forEach(element => {
                    element.classList.add("show")
                });
                break;
        }
    }
});

// timer

let timer = setInterval(() => {
    let remaining_time = (new Date("2027-01-01").getTime()) - (new Date().getTime());
    if (remaining_time <= 0) {
        clearInterval(timer);
        return;
    }
    let days = Math.floor(remaining_time / (1000 * 60 * 60 * 24));
    let hours = Math.floor((remaining_time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((remaining_time % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((remaining_time % (1000 * 60)) / 1000);
    document.querySelector(".counter .number-d").textContent = days;
    document.querySelector(".counter .number-h").textContent = hours;
    document.querySelector(".counter .number-m").textContent = minutes;
    document.querySelector(".counter .number-s").textContent = seconds;
}, 1000); 