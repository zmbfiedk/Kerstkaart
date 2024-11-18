
const canvas = document.getElementById("canvasId");
const g = canvas.getContext("2d");

function drawCandyBackground() {
    const stripeWidth = 40;
    const stripeColor1 = "#FF0000";
    const stripeColor2 = "#FFFFFF";

    for (let i = 0; i < canvas.width; i += stripeWidth * 2) {
        g.fillStyle = stripeColor1;
        g.fillRect(i, 0, stripeWidth, canvas.height);
        g.fillStyle = stripeColor2;
        g.fillRect(i + stripeWidth, 0, stripeWidth, canvas.height);
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
