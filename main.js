img = "";
status = "";

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
    console.log("Model Loaded!")
    status = true;
    objectDetector.detect(img, gotResult);
}


function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
}

function preload() {
    img = loadImage('dog_cat.jpg');
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill("#48c3c7");
    text("dog", 169, 69);
    noFill();
    stroke("#48c3c7");
    rect(100, 50, 300, 369);

    fill("#548be3");
    text("cat", 320, 120);
    noFill();
    stroke("#548be3")
    rect(300, 90, 270, 320);
}