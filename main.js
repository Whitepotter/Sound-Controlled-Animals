function Classify_animals(){
    navigator.mediaDevices.getUserMedia({audio : true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/yqVF_uxqV/model.json", modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){

    if (error) {
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = "I can hear - " + results[0].label;
        document.getElementById("result_confidence").innerHTML = "Confidence - " + (results[0].confidence * 100).toFixed(2) + " %";
        document.getElementById("result_label").style.color = 'rgb("+random_number_r+", "+random_number_g+", "+random_number_b+")';
        document.getElementById("result_confidence").style.color = 'rgb("+random_number_r+", "+random_number_g+", "+random_number_b+")';

        img = document.getElementById("animals_img");

        if (results[0].label == "Lion") {
            img.src = "21677-lion.gif";
        }
        else if (results[0].label == "Penguin") {
            img.src = "76486-penguin-waving-hello.gif";
        }
        else if (results[0].label == "Dog") {
            img.src = "25293-corgi-running.gif";
        }
        else if (results[0].label == "Cat") {
            img.src = "46864-lovely-cats.gif";
        }
        else{
            img.src = "1601094416_7720.gif"
        }
    }
}