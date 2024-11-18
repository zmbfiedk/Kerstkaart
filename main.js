
const canvas = document.getElementById("canvasId");
const g = canvas.getContext("2d");

function drawCandyBackground() {
    const stripeWidth = 20; 
    const stripeColor1 = "#FF0000"; 
    const stripeColor2 = "#FFFFFF";

    for (let i = -canvas.height; i < canvas.width; i += stripeWidth * 2) {
        g.beginPath();
        g.moveTo(i, 0);
        g.lineTo(i + stripeWidth, 0);
        g.lineTo(i + stripeWidth + canvas.height, canvas.height);
        g.lineTo(i + canvas.height, canvas.height);
        g.closePath();
        g.fillStyle = stripeColor1; 
        g.fill();

        g.beginPath();
        g.moveTo(i + stripeWidth, 0);
        g.lineTo(i + stripeWidth * 2, 0);
        g.lineTo(i + stripeWidth * 2 + canvas.height, canvas.height);
        g.lineTo(i + stripeWidth + canvas.height, canvas.height);
        g.closePath();
        g.fillStyle = stripeColor2;
        g.fill();
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
