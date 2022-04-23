//https://teachablemachine.withgoogle.com/models/JCP1Jh_b5/

function startClassification (){
    navigator.mediaDevices.getUserMedia({
        audio:true
    });
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/JCP1Jh_b5/model.json", modelReady);

}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);

    }
    else{
        console.log(results);
        r=Math.floor(Math.random()*255)+1;
        g=Math.floor(Math.random()*255)+1;
        b=Math.floor(Math.random()*255)+1;

        document.getElementById("result_label").innerHTML="I can hear -"+results[0].lable;
        document.getElementById("result_confidence").innerHTML="I can hear -"+(results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color="rgb("+r+","+g+","+b+")";
        document.getElementById("result_confidence").style.color="rgb("+r+","+g+","+b+")";

        img1 =document.getElementById("dog");
        img2 =document.getElementById("cat");
        img3 =document.getElementById("lion");
        img4 =document.getElementById("cow");

     if(results);
    }
}
