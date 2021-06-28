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