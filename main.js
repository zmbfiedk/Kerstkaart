
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
}

function drawText() {
    g.fillStyle = "rgb(0,0,0)";
    g.font = "30px Arial";
    g.textAlign = "center";
    g.fillText("Merry Christmas", canvas.width / 2, 550);
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
function drawScene() {
    g.clearRect(0, 0, canvas.width, canvas.height);
    drawCandyBackground(); 
    drawHouse();    
    drawText();   
    drawSnowman();
}


drawScene();
