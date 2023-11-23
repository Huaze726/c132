prediction_1 = ""

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');


function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
    });
}

console.log('ml5 version:', ml5.version);

//create your model and store it in var classifier 
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/f_nWkM2yn/model.json", modelLoaded);
function modelLoaded() {
    console.log("model loaded");
}

function check() {
    img = document.getElementById("capture_image");
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("status").innerHTML = results[0].label;
        prediction_1 = results[0].label;
        if (result[0].label == "Safe") {
            document.getElementById("update_emoji").innerHTML = "&#x1F637;";
        }
        if (results[0].label == "Not Safe") {
            document.getElementById("update_emoji").innerHTML = "&#x26d4;";
        }
    }
}
//define function modelLoaded

//define function check() 


//define function gotResult(error, results)
