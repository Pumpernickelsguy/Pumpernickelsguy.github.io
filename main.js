//initial image to be displayed in gallery
var imgNum = 1;

//update the number if you have more images to add. Vice versa if reducing the number of images.
var max = 6;

//price numbers
var portraitPrice = 0;
var fullBodyPrice = 0;

//function to show image
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
            console.log(document.getElementById(imgNum));
        } else {
            element.style.display = "none";
        }
    });
}

//function to go to next gallery image
function showNext() {
    imgNum += 1;
    if (imgNum == max+1) {
        imgNum = 1;
    }
    showImage(imgNum);
}

//function to go to previous gallery image
function showBack() {
    imgNum -= 1;
    if (imgNum == 0) {
        imgNum = max;
    }
    showImage(imgNum);
}

//update lineart in preview
function updateLine(num) {
    if (num == 0) {
        document.getElementById("sketch").style.display = "block";
        document.getElementById("lineart").style.display = "none";

        document.getElementById("sketchFull").style.display = "block";
        document.getElementById("lineartFull").style.display = "none";
    } else if (num == 1) {
        document.getElementById("sketch").style.display = "none";
        document.getElementById("lineart").style.display = "block";

        document.getElementById("sketchFull").style.display = "none";
        document.getElementById("lineartFull").style.display = "block";
    }
}

//update shading in preview
function updateShade(num) {
    if (num == 0) {
        document.getElementById("colourFlat").style.display = "block";
        document.getElementById("colourShade").style.display = "none";

        document.getElementById("colourFlatFull").style.display = "block";
        document.getElementById("colourShadeFull").style.display = "none";
    } else if (num == 1) {
        document.getElementById("colourFlat").style.display = "none";
        document.getElementById("colourShade").style.display = "block";

        document.getElementById("colourFlatFull").style.display = "none";
        document.getElementById("colourShadeFull").style.display = "block";
    }
}

//update background in preview
function updateBG(num) {
    if (num == 0) {
        document.getElementById("simpleBG").style.display = "block";
        document.getElementById("complexBG").style.display = "none";

        document.getElementById("simpleBGFull").style.display = "block";
        document.getElementById("complexBGFull").style.display = "none";
    } else if (num == 1) {
        document.getElementById("simpleBG").style.display = "none";
        document.getElementById("complexBG").style.display = "block";

        document.getElementById("simpleBGFull").style.display = "none";
        document.getElementById("complexBGFull").style.display = "block";
    }
}

//Function for changing preview section
function changePreview(num) {
    if (num == 0) {
        //Change to portrait
        document.getElementById("portraitDiv").style.display = "block";
        document.getElementById("fullBodyDiv").style.display = "none";

        document.getElementById("showHead").style.display = "none";
        document.getElementById("showBody").style.display = "block";
    } else if (num == 1) {
        //Change to full body
        document.getElementById("portraitDiv").style.display = "none";
        document.getElementById("fullBodyDiv").style.display = "block";

        document.getElementById("showHead").style.display = "block";
        document.getElementById("showBody").style.display = "none";
    }
}

//function for jumping to a section
function scrollToSection(idName) {
    document.getElementById(idName).scrollIntoView();
}

//function for calculating prices
function calculatePrice() {
    var total = 0;
    total += parseInt(document.getElementById("basePrice").value);
    total += parseInt(document.getElementById("lineStyle").value);
    total += parseInt(document.getElementById("colourStyle").value);
    total += parseInt(document.getElementById("bgStyle").value);
    total += parseInt(document.getElementById("safeOption").value);

    console.log("total price is: " + total);
    document.getElementById("estimatedPrice").style.display = "block";
    document.getElementById("priceSpan").innerHTML = total;
}