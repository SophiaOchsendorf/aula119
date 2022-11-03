function setup (){
    canvas = createCanvas(280 , 280);
    canvas.center();
    background("white");
    canvas.mouseRealesed(classifyCanvas);
    synth = window.SpeechSynthesis;
}

function clearCanvas(){

background("white");
}

function preload (){
    classifier=ml5.imageClassifier('DoodleNet');
}

function draw() {

    // defina strokeWeight como 13
    strokeWeight(13);
    // defina a cor do stroke como preto
    stroke(0);
    // se o mouse for clicado,desenhe uma linha entre a posição antiga e atual do mouse
    if (mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX,mouseY);
    }
}

function classifyCanvas() {
    classifier.classify(canvas, gotResult);
}

function gotResult(error, results) {
    if(error){
        console.error(error);
    }
    console.log(results);
    var results = results[0].label;
    document.getElementById('label').innerHTML = 'nome: ' + results.replace('_', ' ');

    document.getElementsById('confidence').innerHTML = 'Presisão: ' + Math.round(results[0].confidence * 100) + '%';

    utterThis = new SpeechSynthesisUtterance(result.replace('_', ' '));
    synth.speak(utterThis);
    
}