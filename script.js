/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("overlay").classList.add("overlay");
    document.getElementById("header").classList.add("blur");
    document.body.classList.add("no-scroll");
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("overlay").classList.remove("overlay");
    document.getElementById("header").classList.remove("blur");
    document.body.classList.remove("no-scroll");
}

function disclaimer() {
    document.getElementById("disclaimer").classList.add("d-block");
}

function loader() {
    load = setTimeout(page, 2000);
}

function page() {
    document.getElementById("loader").remove();
    document.getElementById("website").classList.remove("d-none");
    document.getElementById("website").classList.add("d-block");
}

function showWhatsapp() {
    document.getElementById("whatsapp").classList.remove("d-none");
    document.getElementById("whatsapp").classList.add("d-block");
}

function hideWhatsapp() {
    if (document.getElementById("whatsapp").classList.contains("d-block")) {
        document.getElementById("whatsapp").classList.add("d-none");
        document.getElementById("whatsapp").classList.remove("d-block");
    }
}

function validate() {
    if (document.getElementById("submit").classList.contains("submit")) {
        document.getElementById("submit").classList.remove("submit");
    } else {
        document.getElementById("submit").classList.add("submit");
    }
}