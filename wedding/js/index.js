/*
 * VARIABLES
 */

let currentPage = "prep";
let images = prepImages;

let pigOptions = {
    figureTagName: "a",
    urlForSize: function (filename, size) {
        return "./img/" + currentPage + "/" + size + "/" + filename;
    },
    getMinAspectRatio: function (lastWindowWidth) {
        if (lastWindowWidth <= 1280) {
            return 2;
        }
        else if (lastWindowWidth <= 1440) {
            return 3;
        }
        else if (lastWindowWidth <= 1920) {
            return 4;
        }
        else if (lastWindowWidth <= 2560) {
            return 5;
        }
        return 6;
    },
    getImageSize: function (lastWindowWidth) {
        return 500;
    }
};

let pig;


const lightbox = GLightbox({
    touchNavigation: true
});



/*
 * METHODS
 */

function navigate(page) {
    let prep = document.getElementById("prep");
    let ceremony = document.getElementById("ceremony");
    let post = document.getElementById("post");
    let dinner = document.getElementById("dinner");
    let afterparty = document.getElementById("afterparty");

    let navigationPills = [prep, ceremony, post, dinner, afterparty];

    navigationPills.forEach(element => {
        element.removeAttribute("data-active");
    });

    switch (page) {
        case "prep":
            prep.setAttribute("data-active", "");
            images = prepImages;
            break;
        case "ceremony":
            ceremony.setAttribute("data-active", "");
            images = ceremonyImages;
            break;
        case "post":
            post.setAttribute("data-active", "");
            images = postImages;
            break;
        case "dinner":
            dinner.setAttribute("data-active", "");
            images = dinnerImages;
            break;
        case "afterparty":
            afterparty.setAttribute("data-active", "");
            images = afterpartyImages;
            break;
    }

    window.history.pushState(null, "", "#" + page);

    // reset pig
    pig.disable();
    currentPage = page;
    document.getElementById("pig").textContent = "";
    pig = new Pig(images, pigOptions);
    pig.enable();

    lightbox.reload();
}



/*
 * EVENT HANDLERS
 */

window.onload = function () {
    pig = new Pig(images, pigOptions);
    pig.enable();

    lightbox.reload();
};

window.onresize = function () {
    lightbox.reload();
};

window.onscroll = function () {
    lightbox.reload();
};