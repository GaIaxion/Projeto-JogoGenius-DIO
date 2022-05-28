//crinado uma variavel com um array vazio, para fazer as ordens do nosso jogo
let order = [];
let clickedOrder =[];
let score = 0;

// 0 = verde
// 1 = vermelho
// 2 = amarelo
// 3 = azul


//criando uma constante parara cada parte do circulo, para isso urilizou o querySelecto, para selecionar as classes do css
const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');
//cria ordem aletoria de cores, não entendi direito
let shuffleOrder = () => {
    //variável que guarda um número aleatório a cada rodada --> Oque faz o Meth.floor?
    let colorOrder = Math.floor(Math.random() * 4);
    // atribuindo o indice do arrey a cor que sair na unção de sorteio
    order[order.length] = colorOrder;
    clickedOrder = [];

    
//acendendo a caor correspondente a numero sorteado
//Para lei i in order
for(let i in order){
    //crie um elemento 'orderi --> Oque é o i, é uma posição deve ser aleatória
    let elementColor = createColorElement(order[i]);
    //nova equação que é criada depois e nela é passado o for e o number
    lightColor(elementColor, Number(i) + 1);
     //numer i + 1 tras o number e + 1 para exixtir na lista de cores 
}
}

//função que vai acender a cor
let lightColor = (element, number) => {
    number = number * 500;
   //setTimeout -> função inerente do JS para dar um dalay em algum processo
    setTimeout(()=> {
       element.classList.add('selected');
    }, number - 250);
    //remove o selected
    setTimeout(()=>{
        element.classList.remove('selected');
    });
}

//veriica se a ordem qua a gente clícou é a mesma que o jogo nos deu
let checkOrder = () =>{
    for(let i in clickedOrder){
       //se o cliquedorder'cor que eu cliquei' é diferente do order1'cor que o jogo me deu'
        if(clickedOrder[i] != order[i]){
           //função de perdeu, e da o break para acaber o jogo
            gameOver();
            break;
        }
    }
    //se os valores forem iguais pontua
    if(clickedOrder.length == order.length){
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`);
        nextLevel();
    }
}
    
 //função para o clique do usuário
 let click = (color) =>{
     clickedOrder[clickedOrder.length] = color;
        createColorElement(color).classList.add('selected');
        setTimeout(() => {
            createColorElement(color).classList.remove('selected');
            checkOrder(); 
        }, 250 );
        
 }
 
 //Criar função que retorna a cor que é a creatcolorelement co o if else
 let createColorElement = (color) =>{
     if(color == 0 ){
         return green;
     } else if (color == 1) {
         return red;
     }else if (color == 2) {
         return yellow;
     }else if (color == 3) {
        return blue;
     }
 }
//vamos aumentar o score e chamar a  função de novo aleitório 
 let nextLevel = () =>{
   //adiceionei mais 1 ao score
    score ++;
 //chamei a função que gara uma ordem aleatória de cores
    shuffleOrder();
 }
 //Função para game over 
 let gameOver = () => {
    alert(`Pontuação: ${score}!\nVocê perdeu o jogo!\nClique em OK para iniciar um novo jogo`);
     order =[];
     clickedOrder = [];

     playGame();
 }

 let playGame = () => {
   //rodar a função de próxima sequêcia
   alert('Bem vindo ao Gênesis! Iniciando novo jogo!');
   score = 0;

   nextLevel();
 }

//eventos de clique para as cores
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

//inicio do jogo
playGame();

