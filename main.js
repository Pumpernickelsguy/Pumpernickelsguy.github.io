var imgNum = 1;

//update the number if you have more images to add. Vice versa if reducing the number of images.
var max = 5;

function showImage(num) {
    imgNum = num;

    if (imgNum == 0) {
        imgNum = Math.floor(Math.random() * max + 1);
    }
    console.log("Displaying image no." + imgNum);

    var arr = Array.from(document.getElementsByClassName("galleryPic"));
    arr.forEach(element => {
        if (element.id == imgNum) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    });
}

function showNext() {
    imgNum += 1;
    if (imgNum == max+1) {
        imgNum = 1;
    }
    showImage(imgNum);
}

function showBack() {
    imgNum -= 1;
    if (imgNum == 0) {
        imgNum = max;
    }
    showImage(imgNum);
}

function updatePicType() {
    
}

function updateLine(num) {
    if (num == 0) {
        document.getElementById("sketch").style.display = "block";
        document.getElementById("lineart").style.display = "none";
    } else if (num == 1) {
        document.getElementById("sketch").style.display = "none";
        document.getElementById("lineart").style.display = "block";
    }
}

function updateShade(num) {
    if (num == 0) {
        document.getElementById("colourFlat").style.display = "block";
        document.getElementById("colourShade").style.display = "none";
    } else if (num == 1) {
        document.getElementById("colourFlat").style.display = "none";
        document.getElementById("colourShade").style.display = "block";
    }
}

function updateBG(num) {
    if (num == 0) {
        document.getElementById("simpleBG").style.display = "block";
        document.getElementById("complexBG").style.display = "none";
    } else if (num == 1) {
        document.getElementById("simpleBG").style.display = "none";
        document.getElementById("complexBG").style.display = "block";
    }
}

function updateSafe(num) {

}
