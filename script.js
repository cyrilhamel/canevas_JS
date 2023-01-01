let canvas=document.getElementById("c1");
let ctx=canvas.getContext("2d");

canvas.width = 600;
canvas. height = 600;

ctx.fillStyle = "#A6A490";
ctx.fillRect(200,200,600,600);

ctx.beginPath();
ctx.lineWidth="5";
ctx.fillStyle="#FFF"
ctx.strokeStyle="#000500"
ctx.arc(400,400,150,1*Math.PI,2*Math.PI,true);
ctx.closePath();
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.lineWidth="5";
ctx.fillStyle="#FF0500"
ctx.strokeStyle="#000500"
ctx.arc(400,400,150,1*Math.PI,2*Math.PI,false);
ctx.closePath();
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.lineWidth="5";
ctx.strokeStyle="#000500"
ctx.fillStyle="#FFF100"
//moitié haut gauche
ctx.moveTo(325,400);
ctx.lineTo(325,375);
ctx.lineTo(335,350);
ctx.lineTo(280,320);
ctx.lineTo(240,280);
ctx.lineTo(200,230);
ctx.lineTo(200,210);
ctx.lineTo(250,230);
ctx.lineTo(300,260);
ctx.lineTo(350,320);
ctx.lineTo(370,310);
ctx.lineTo(400,310);
//moitié haut droite
ctx.lineTo(430,310);
ctx.lineTo(450,320);
ctx.lineTo(500,260);
ctx.lineTo(550,230);
ctx.lineTo(600,210);
ctx.lineTo(600,230);
ctx.lineTo(560,280);
ctx.lineTo(520,320);
ctx.lineTo(465,350);
ctx.lineTo(475,375);
ctx.lineTo(475,400);
ctx.lineTo(490,420);
//moitié bas droite
ctx.lineTo(490,445);
ctx.lineTo(475,460);
ctx.lineTo(440,480);
ctx.lineTo(400,480);
//moitié bas gauche
ctx.lineTo(360,480);
ctx.lineTo(325,460);
ctx.lineTo(310,445);
ctx.lineTo(310,420);
ctx.lineTo(325,400);
ctx.closePath();

ctx.fill();
ctx.stroke();

//oeil gauche
ctx.beginPath();
ctx.lineWidth="5";
ctx.fillStyle="#000000"
ctx.strokeStyle="#000500"
ctx.arc(355,405,15,0,2*Math.PI,);
ctx.closePath();
ctx.stroke();
ctx.fill();
//oeil droit
ctx.beginPath();
ctx.lineWidth="5";
ctx.fillStyle="#000000"
ctx.strokeStyle="#000500"
ctx.arc(445,405,15,0,2*Math.PI,);
ctx.closePath();
ctx.stroke();
ctx.fill();
//blanc d'oeil gauche
ctx.beginPath();
ctx.lineWidth="5";
ctx.fillStyle="#FFF"
ctx.strokeStyle="#000500"
ctx.arc(365,405,5,0,2*Math.PI,);
ctx.closePath();
ctx.stroke();
ctx.fill();
//blanc d'oeil droit
ctx.beginPath();
ctx.lineWidth="5";
ctx.fillStyle="#FFF"
ctx.strokeStyle="#000500"
ctx.arc(435,405,5,0,2*Math.PI,);
ctx.closePath();
ctx.stroke();
ctx.fill();
//pomette gauche
ctx.beginPath();
ctx.lineWidth="5";
ctx.fillStyle="#FF0500"
ctx.strokeStyle="#000500"
ctx.arc(340,450,15,0,2*Math.PI,);
ctx.closePath();
ctx.stroke();
ctx.fill();
//pomette droite
ctx.beginPath();
ctx.lineWidth="5";
ctx.fillStyle="#FF0500"
ctx.strokeStyle="#000500"
ctx.arc(460,450,15,0,2*Math.PI,);
ctx.closePath();
ctx.stroke();
ctx.fill();
//museau
ctx.beginPath();
ctx.lineWidth="3";
ctx.strokeStyle="#000000"
ctx.fillStyle="#000000"
ctx.moveTo(400,420);
ctx.lineTo(410,420);
ctx.lineTo(400,430);
ctx.lineTo(390,420);
ctx.closePath();
ctx.fill();
ctx.stroke();

//bouche
ctx.beginPath();
ctx.lineWidth="3";
ctx.fillStyle="#000000"
ctx.strokeStyle="#000000"
ctx.moveTo(380,440);
ctx.lineTo(400,460);
ctx.lineTo(420,440);
ctx.closePath();
ctx.stroke();
ctx.fill();

//langue
ctx.beginPath();
ctx.lineWidth="3";
ctx.fillStyle="#FF0000"
ctx.strokeStyle="#000000"
ctx.moveTo(400,465);
ctx.lineTo(410,450);
ctx.lineTo(390,450);
ctx.closePath();
ctx.stroke();
ctx.fill();

//bout des oreilles gauche
ctx.beginPath();
ctx.lineWidth="3";
ctx.fillStyle="#000000"
ctx.strokeStyle="#000000"
ctx.moveTo(240,280);
ctx.lineTo(200,230);
ctx.lineTo(200,210);
ctx.lineTo(250,230);
ctx.closePath();
ctx.stroke();
ctx.fill();

//bout d'oreille droite
ctx.beginPath();
ctx.lineWidth="3";
ctx.fillStyle="#000000"
ctx.strokeStyle="#000000"
ctx.moveTo(550,230);
ctx.lineTo(600,210);
ctx.lineTo(600,230);
ctx.lineTo(560,280);
ctx.closePath();
ctx.stroke();
ctx.fill();

ctx.font="bold 30px verdana,arial,serif";
ctx.strokeStyle="#FFFB00"
ctx.strokeText("PIKACHU",325,580);
