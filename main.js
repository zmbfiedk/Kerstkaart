
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

function drawHouse() {
    g.fillStyle = "#D2691E";
    g.fillRect(300, 300, 200, 150);

    g.beginPath();
    g.moveTo(300, 300);
    g.lineTo(400, 200);
    g.lineTo(500, 300);
    g.closePath();
    g.fillStyle = "#8B0000";
    g.fill();

    g.fillStyle = "#654321";
    g.fillRect(370, 370, 60, 80);

    g.fillStyle = "#ADD8E6";
    g.fillRect(320, 320, 50, 50);
    g.fillRect(430, 320, 50, 50);
}

function drawTree() {
    g.fillStyle = "#8B4513";
    g.fillRect(150, 400, 30, 70);

    g.fillStyle = "#228B22";
    g.beginPath();
    g.moveTo(165, 400);
    g.lineTo(100, 450);
    g.lineTo(230, 450);
    g.closePath();
    g.fill();

    g.beginPath();
    g.moveTo(165, 370);
    g.lineTo(110, 420);
    g.lineTo(220, 420);
    g.closePath();
    g.fill();

    g.beginPath();
    g.moveTo(165, 340);
    g.lineTo(120, 390);
    g.lineTo(210, 390);
    g.closePath();
    g.fill();

    g.fillStyle = "#FF0000";
    g.beginPath();
    g.arc(165, 380, 5, 0, Math.PI * 2);
    g.fill();
    g.beginPath();
    g.arc(140, 420, 5, 0, Math.PI * 2);
    g.fill();
    g.beginPath();
    g.arc(190, 420, 5, 0, Math.PI * 2);
    g.fill();
}

function drawSnowman() {
    g.fillStyle = "#FFFFFF";
    g.strokeStyle = "#000000"; 
    g.lineWidth = 2; 

    g.beginPath();
    g.arc(620, 450, 40, 0, Math.PI * 2);
    g.fill();
    g.stroke();

    g.beginPath();
    g.arc(620, 380, 30, 0, Math.PI * 2);
    g.fill();
    g.stroke();

    g.beginPath();
    g.arc(620, 330, 20, 0, Math.PI * 2);
    g.fill();
    g.stroke();

    g.fillStyle = "#000000"; 
    g.beginPath();
    g.arc(612, 325, 3, 0, Math.PI * 2);
    g.fill();
    g.beginPath();
    g.arc(628, 325, 3, 0, Math.PI * 2);
    g.fill();

    g.fillStyle = "#FFA500"; 
    g.beginPath();
    g.moveTo(620, 330);
    g.lineTo(640, 335);
    g.lineTo(620, 340);
    g.closePath();
    g.fill();
    g.stroke();

    g.fillStyle = "#000000"; 
    g.beginPath();
    g.arc(620, 350, 3, 0, Math.PI * 2);
    g.fill();
    g.beginPath();
    g.arc(620, 370, 3, 0, Math.PI * 2);
    g.fill();
    g.beginPath();
    g.arc(620, 390, 3, 0, Math.PI * 2);
    g.fill();
}

function drawText() {
    g.fillStyle = "#FF0000";
    g.font = "30px Arial";
    g.textAlign = "center";
    g.fillText("Merry Christmas", canvas.width / 2, 550);
}

function drawScene() {
    g.clearRect(0, 0, canvas.width, canvas.height);
    drawCandyBackground();
    drawHouse();
    drawTree();
    drawSnowman();
    drawText();
}

drawScene();