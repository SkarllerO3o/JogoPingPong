// Variaveis da Bolinha **

let xbolinha = 300;
let ybolinha = 200;
let diametro = 27;
let raio = diametro / 2; 

// Velocidade da Bolinha **

let velocidadeXBolinha = 5;
let velocidadeYBolinha = 5;

//Variavel da Raquete do jogardor**

let xRaquete = 5;
let yRaquete = 150
let comprimentoRaquete = 10
let alturaRaquete = 90

//Variavel da Raquete Oponente**

let xRaquete2 = 585
let yRaquete2 = 150
let velocidadeYOponente;


//placar do jogo

let meusPontos = 0;
let pontosOponente = 0;

//Sons do jogo

let raquetada;
let ponto;
let trilha; 

//function preload(){
 //trilha = loadSound("trilha.mp3");
  //ponto = loadSound("ponto.mp3");
  //raquetada = loadSound("raquetada.mp3");
//}

function setup() {
  createCanvas(600, 400);
  //trilha.play();
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaBorda();
  mostraRaquete(xRaquete , yRaquete);
  movimentaRaquete();
  verificaBateRaquete();
  mostraRaquete(xRaquete2 , yRaquete2);
  movimentaRaquete2();
  verificaColisaoRaqueteOponente();
  incluiPlacar();
  marcaPonto();
}

function mostraBolinha (){
  circle(xbolinha,ybolinha,diametro)
}

function movimentaBolinha(){
  
  xbolinha += velocidadeXBolinha
  ybolinha += velocidadeYBolinha
  
}

function verificaBorda(){
  
   if (xbolinha + raio > width || xbolinha - raio < 0){
    velocidadeXBolinha *= -1;
  }
  
  if (ybolinha + raio > height || ybolinha - raio < 0){
    velocidadeYBolinha *= -1;
  }
  
}

function mostraRaquete(x , y ){
  fill(color(147 , 10 , 10))
  
  rect(x , y, comprimentoRaquete , alturaRaquete)
   
}



function movimentaRaquete(){
  
  if (keyIsDown(87)){
    yRaquete -= 10;
  }
  
 if (keyIsDown(83)){
    yRaquete += 10;
 }  
}

function verificaBateRaquete(){
  
  if (xbolinha - raio < xRaquete + comprimentoRaquete 
      && ybolinha - raio < yRaquete + alturaRaquete 
      && ybolinha + raio > yRaquete ){
    velocidadeXBolinha *= -1; 
  }
}

function movimentaRaquete2(){
  
  velocidadeYOponente = ybolinha - yRaquete2 - comprimentoRaquete / 2 - 30; 
  yRaquete2 += velocidadeYOponente
  
  
}

 function verificaColisaoRaqueteOponente() {
        if (xbolinha + raio > xRaquete2 + comprimentoRaquete &&
            ybolinha + raio < yRaquete2 + alturaRaquete  &&
            ybolinha + raio > yRaquete2) {
            velocidadeXBolinha *= -1;
        }
    }

function incluiPlacar(){
  stroke(255);
  fill(color(37, 255 , 30));
  rect(130, 10 , 40 , 20);
  rect(430 , 10 , 40 , 20);
  textSize(20);
  textAlign(CENTER);
  fill(255)
  text(meusPontos, 150, 26);
  text(pontosOponente, 450, 26);
  fill(255)
  
  
  
  
}
function marcaPonto(){
  
  if (xbolinha > 590 ){
    meusPontos += 1; 
  }
  if (xbolinha < 15){
    pontosOponente += 1;
  }
}