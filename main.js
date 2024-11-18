
const canvas = document.getElementById("canvasId");
const g = canvas.getContext("2d");

function drawCandyBackground() {
    const stripeHeight = 40; 
    const stripeColor1 = "#FF0000"; 
    const stripeColor2 = "#FFFFFF"; 

    for (let i = 0; i < canvas.height; i += stripeHeight * 2) {
        g.fillStyle = stripeColor1;
        g.fillRect(0, i, canvas.width, stripeHeight);
        g.fillStyle = stripeColor2;
        g.fillRect(0, i + stripeHeight, canvas.width, stripeHeight);
    }
}

function drawText() {
    g.fillStyle = "rgb(0,0,0)";
    g.font = "30px Arial";
    g.textAlign = "center";
    g.fillText("Merry Christmas", canvas.width / 2, 550);
}

function drawScene() {
    g.clearRect(0, 0, canvas.width, canvas.height);
    drawCandyBackground();    
    drawText();   
}

drawScene();
