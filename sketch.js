let filme;
let campoIdade;
let campoAcao;
let campoRomance;
let campoComedia;
let campoMacho;
let campoEspecial;

function setup() {
  createCanvas(600, 400);
  createElement('h3',  'Recomendador de Filmes');
  createSpan("Idade: ")
  campoIdade = createInput();
  campoAcao = createCheckbox('Ação');
  campoRomance = createCheckbox('Romance');
  campoComedia = createCheckbox('Comédia');
  campoMacho = createCheckbox('Macho');
  campoEspecial = createCheckbox('Especial')
}

function draw() {
  background(400);
  textSize(40);
  textAlign( CENTER, CENTER);
  
  let idade = campoIdade.value();
  let acao = campoAcao.checked();
  let romance = campoRomance.checked();
  let comedia = campoComedia.checked();
  let macho = campoMacho.checked();
  let especial = campoEspecial.checked();
  
  filme = geraRecomendacao(idade, acao, romance, comedia, macho, especial);
  
  text(filme, width/2, height/2);
}

function geraRecomendacao(idade, acao, romance, comedia, macho, especial){
  if(idade >= 25){
    if(acao){
      return 'Onça Pintuda Vs Trigre Bengudo';
    }else if(romance){
      return 'Gustavo Galhardo no olhar do horizonte';
    }else if(comedia){
      return 'Jakson e o anel perdido';
    }else if(macho){
      return 'Clannad'
    }else if(especial){
      return 'Sempre ao seu lado'
    }
  }else if(idade >= 18){
    if(acao){
      return 'Berserk';
    }else if(romance){
      return 'OverFlow';
    }else if(comedia){
      return 'Akame ga kill'
    }else if(macho){
      return 'Plastic Memories'
    }else if(especial){
      return 'Made in abyss'
    }
  }else if(idade >= 14){
    if(acao){
      return 'Maze Runner';
    }else if(romance){
      return 'Depois do Universo';
    }else if(comedia){
      return 'Vovozona'
    }else if(macho){
      return 'Hotarubi no mori e'
    }else if(especial){
      return 'A voz do silêncio'
    }
  }else{
      
if(acao){
      return 'KarateKid';
    }else if(romance){
      return 'Carros 2';
    }else if(comedia){
      return 'Alvin e os esquilos'
    }else if(macho){
      return 'Ano hana a flor que vimos'
    }else if(especial){
      return 'Up'
    }
  }
}
