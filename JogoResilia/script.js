function excluiConteudoDiv(){
    document.getElementById("primeiraDiv").innerText = "";
}

function criarTexto(texto){
    let p = document.createElement("p");
    p.setAttribute("id", "paragrafoApresentacao");
    p.textContent = texto;
    document.getElementById("primeiraDiv").appendChild(p);
    document.getElementById("paragrafoApresentacao").style.textAlign = "center";
    document.getElementById("paragrafoApresentacao").style.fontWeight = "bold";
    document.getElementById("paragrafoApresentacao").style.fontSize = "27px";
    document.getElementById("paragrafoApresentacao").style.backgroundColor = "gray";
}   

function criaBotaoUm(){
    let botao = document.createElement("button");
    botao.setAttribute("id", "botaoUm");
    botao.textContent = "Será? Vamos!";
}

function criaBotaoDois(){
    let botao = document.createElement("button");
    botao.setAttribute("id", "botaoDois");
    botao.textContent = "Acho melhor essa!";
}

function recebeNome(){
    let input = document.getElementById("recebeNomeJogador");
    let nomeJogador = input.value;

    iniciaJogo(nomeJogador);
}

function aumentaDiv(){
    document.getElementById("primeiraDiv").style.display = "flex";
    document.getElementById("primeiraDiv").style.flexDirection = "column";
    document.getElementById("primeiraDiv").style.justifyContent = "space-between";
    document.getElementById("primeiraDiv").style.alignItems = "center";
    document.getElementById("bodyJogo").removeAttribute("id");
}


function preInicializacao(){
    excluiConteudoDiv();
    document.getElementsByTagName("body")[0].setAttribute("id", "bodyJogo");

    let pUm = document.createElement("div");
    pUm.setAttribute("id", "paragrafoInicio");
    pUm.textContent = "Vamos receber seu nome primeiro para termos um contato mais direto? Conta pra mim aí!";
    document.getElementById("primeiraDiv").appendChild(pUm);

    let inputUm = document.createElement("input");
    inputUm.setAttribute("type", "text");
    inputUm.setAttribute("id", "recebeNomeJogador");
    document.getElementById("primeiraDiv").appendChild(inputUm);

    let botaoUm = document.createElement("button");
    botaoUm.setAttribute("id", "botao");
    botaoUm.addEventListener("click", function(){
        recebeNome();
    });
    botaoUm.textContent = "Vamos lá!";

    document.getElementById("primeiraDiv").appendChild(botaoUm);
}


function primeiraDecisaoDoisDois(arrPersonagens){
    excluiConteudoDiv();
    document.getElementsByClassName("jogoBody")[0].style.backgroundColor = "GoldenRod";
    let divUm = document.createElement("div");
    divUm.setAttribute("id", "divUm");
    divUm.style.display = "flex";
    divUm.style.flexDirection = "column";
    divUm.style.justifyContent = "space-between";
    divUm.style.alignItems = "center";
    divUm.style.backgroundColor = "DarkSlateGrey";
    divUm.style.border = "3px solid";
    divUm.style.borderColor = "black";
    document.getElementById("primeiraDiv").appendChild(divUm);

    let p = document.createElement("p");
    p.textContent = arrPersonagens[0] + " achou bonitinho e continuou a caminhar com seus pais, bastante feliz por ter visto aquela fofura.";
    p.style.fontWeight = "bold";
    divUm.appendChild(p);

    let pDois = document.createElement("p");
    pDois.textContent = "Fim da história :) Tente escolher outras opções para viver uma aventura!";
    p.style.fontWeight = "bold";
    divUm.appendChild(pDois);

    let botao = document.createElement("button");
    botao.addEventListener("click", function(){
        preInicializacao();
    });
    botao.textContent = "Deseja reiniciar? Clique aqui!";
    botao.style.padding = "10px";
    botao.style.border = "10px";
    botao.style.borderRadius = "20px 10px";
    botao.style.backgroundColor = "brown";
    document.getElementById("primeiraDiv").appendChild(botao);
}

function primeiraDecisaoDois(arrPersonagens){
    excluiConteudoDiv();
    document.getElementsByClassName("jogoBody")[0].style.backgroundColor = "GoldenRod";
    let divUm = document.createElement("div");
    divUm.setAttribute("id", "divUm");
    divUm.style.display = "flex";
    divUm.style.flexDirection = "column";
    divUm.style.justifyContent = "space-between";
    divUm.style.alignItems = "center";
    divUm.style.backgroundColor = "DarkSlateGrey";
    divUm.style.border = "3px solid";
    divUm.style.borderColor = "black";
    document.getElementById("primeiraDiv").appendChild(divUm);

    let p = document.createElement("p");
    p.textContent = "O gatinho que foi avistado nem ligou muito para " + arrPersonagens[0] + " e logo subiu em uma árvore."
    p.style.fontWeight = "bold";
    divUm.appendChild(p);

    let botaoUm = document.createElement("button");
    botaoUm.addEventListener("click", function(){
        primeiraDecisaoDoisDois(arrPersonagens);
    });
    botaoUm.textContent = "Vamos prosseguir!";
    document.getElementById("divUm").appendChild(botaoUm);

}

function versaoUm(arrPersonagens){
    excluiConteudoDiv();
    document.getElementsByClassName("jogoBody")[0].style.backgroundColor = "MediumVioletRed";

    let divUm = document.createElement("div");
    divUm.setAttribute("id", "divUm");
    divUm.style.display = "flex";
    divUm.style.flexDirection = "column";
    divUm.style.justifyContent = "space-between";
    divUm.style.alignItems = "center";
    divUm.style.backgroundColor = "LightSkyBlue";
    divUm.style.border = "3px solid";
    divUm.style.borderColor = "black";
    document.getElementById("primeiraDiv").appendChild(divUm);

    let p = document.createElement("p");
    p.textContent = "O que " + arrPersonagens[1] + " escreveu foi bem amigável: Prazer em conhecê-los gatinhos!"
    p.style.fontWeight = "bold";
    divUm.appendChild(p);

    let divDois = document.createElement("div");
    divDois.style.border = "3px solid";
    divDois.style.borderColor = "black";
    let pUm = document.createElement("p");
    pUm.textContent = "O trio todo riu e foram embora na esperança de encontrar toda a comunidade de gatos novamente.";
    pUm.style.fontWeight = "bold";
    divDois.appendChild(pUm);
    divDois.style.backgroundColor = "MediumSpringGreen";

    document.getElementById("primeiraDiv").appendChild(divDois);



    let divTres = document.createElement("div");
    divTres.style.border = "3px solid";
    divTres.style.borderColor = "black";
    let pDois = document.createElement("p");
    pDois.textContent = "Fim da história :) Tente escolher opções melhores para viver uma aventura!";
    pDois.style.fontWeight = "bold";
    divTres.appendChild(pDois);
    divTres.style.backgroundColor = "MistyRose";

    document.getElementById("primeiraDiv").appendChild(divTres);

    let botao = document.createElement("button");
    botao.addEventListener("click", function(){
        preInicializacao();
    });
    botao.textContent = "Reiniciar jogo";
    botao.style.backgroundColor = "NavajoWhite";

    document.getElementById("primeiraDiv").appendChild(botao);

}

function versaoDois(arrPersonagens){
    excluiConteudoDiv();
    document.getElementsByClassName("jogoBody")[0].style.backgroundColor = "MediumVioletRed";

    let divUm = document.createElement("div");
    divUm.setAttribute("id", "divUm");
    divUm.style.display = "flex";
    divUm.style.flexDirection = "column";
    divUm.style.justifyContent = "space-between";
    divUm.style.alignItems = "center";
    divUm.style.backgroundColor = "LightSkyBlue";
    divUm.style.border = "3px solid";
    divUm.style.borderColor = "black";
    document.getElementById("primeiraDiv").appendChild(divUm);

    let p = document.createElement("p");
    p.textContent = "O que " + arrPersonagens[1] + " escreveu teve um tom desafiador: Vou voltar e descobrir o que vocês andam aprontando, seus gatinhos custosos!"
    p.style.fontWeight = "bold";
    divUm.appendChild(p);

    let divDois = document.createElement("div");
    divDois.style.border = "3px solid";
    divDois.style.borderColor = "black";
    let pUm = document.createElement("p");
    pUm.textContent = "O trio todo riu e foram embora na esperança de encontrar toda a comunidade de gatos novamente.";
    pUm.style.fontWeight = "bold";
    divDois.appendChild(pUm);
    divDois.style.backgroundColor = "MediumSpringGreen";

    document.getElementById("primeiraDiv").appendChild(divDois);



    let divTres = document.createElement("div");
    divTres.style.border = "3px solid";
    divTres.style.borderColor = "black";
    let pDois = document.createElement("p");
    pDois.textContent = "Fim da história :) Tente escolher opções melhores para viver uma aventura!";
    pDois.style.fontWeight = "bold";
    divTres.appendChild(pDois);
    divTres.style.backgroundColor = "MistyRose";

    document.getElementById("primeiraDiv").appendChild(divTres);

    let botao = document.createElement("button");
    botao.addEventListener("click", function(){
        preInicializacao();
    });
    botao.textContent = "Reiniciar jogo";
    botao.style.backgroundColor = "NavajoWhite";

    document.getElementById("primeiraDiv").appendChild(botao);
}

function segundaDecisaoDoisUm(arrPersonagens){
    excluiConteudoDiv();
    document.getElementsByClassName("jogoBody")[0].style.backgroundColor = "MediumAquaMarine";

    let divUm = document.createElement("div");
    divUm.setAttribute("id", "divUm");
    divUm.style.display = "flex";
    divUm.style.flexDirection = "column";
    divUm.style.justifyContent = "space-between";
    divUm.style.alignItems = "center";
    divUm.style.backgroundColor = "LightSeaGreen";
    divUm.style.border = "3px solid";
    divUm.style.borderColor = "black";
    document.getElementById("primeiraDiv").appendChild(divUm);

    let p = document.createElement("p");
    p.textContent = "Mas " + arrPersonagens[1] + " ficou pensativo e decidiu deixar uma nota de despedida dos gatos...";
    p.style.fontWeight = "bold";
    divUm.appendChild(p);
    

    let divDois = document.createElement("div");
    divDois.setAttribute("id", "divDois");
    divDois.style.display = "flex";
    divDois.style.flexDirection = "column";
    divDois.style.justifyContent = "space-between";
    divDois.style.alignItems = "center";
    divDois.style.backgroundColor = "LightYellow";
    divDois.style.border = "3px solid";
    divDois.style.borderColor = "black";
    document.getElementById("divUm").appendChild(divDois);

    let pDois = document.createElement("p");
    pDois.textContent = "Como a carta deveria ser escrita? O mistério será revelado após clicar em uma das versões abaixo!"
    pDois.style.fontWeight = "bold";
    divDois.appendChild(pDois);

    let botaoUm = document.createElement("button");
    botaoUm.textContent = "Versão 1";
    botaoUm.addEventListener("click", function(){
        versaoUm(arrPersonagens);
    });

    divDois.appendChild(botaoUm);

    let botaoDois = document.createElement("button");
    botaoDois.textContent = "Versão 2";
    botaoDois.addEventListener("click", function(){
        versaoDois(arrPersonagens);
    });

    divDois.appendChild(botaoDois);



}

function segundaDecisaoDois(arrPersonagens){
    excluiConteudoDiv();
    document.getElementsByClassName("jogoBody")[0].style.backgroundColor = "Maroon";

    let divUm = document.createElement("div");
    divUm.setAttribute("id", "divUm");
    divUm.style.display = "flex";
    divUm.style.flexDirection = "column";
    divUm.style.justifyContent = "space-between";
    divUm.style.alignItems = "center";
    divUm.style.backgroundColor = "LightSeaGreen";
    divUm.style.border = "3px solid";
    divUm.style.borderColor = "black";
    document.getElementById("primeiraDiv").appendChild(divUm);

    let p = document.createElement("p");
    p.textContent = "Como os gatos pularam o muro e foram direto para a rua, " + arrPersonagens[2] + " alertou para que o trio não fosse atrás deles pois seria perigoso atravessar a rua caçando gatos.";
    p.style.fontWeight = "bold";
    divUm.appendChild(p);

    let botao = document.createElement("button");
    botao.textContent = "Me conta mais!";
    botao.style.backgroundColor = "Cyan";
    botao.addEventListener("click", function(){
        segundaDecisaoDoisUm(arrPersonagens);
    });
    divUm.appendChild(botao);

    
}


function terceiraDecisaoDois(arrPersonagens){
    excluiConteudoDiv();
    document.getElementsByClassName("jogoBody")[0].style.backgroundColor = "Peru";

    let divUm = document.createElement("div");
    divUm.setAttribute("id", "divUm");
    divUm.style.display = "flex";
    divUm.style.flexDirection = "column";
    divUm.style.justifyContent = "space-between";
    divUm.style.alignItems = "center";
    divUm.style.backgroundColor = "RosyBrown";
    divUm.style.border = "3px solid";
    divUm.style.borderColor = "black";
    document.getElementById("primeiraDiv").appendChild(divUm);

    let p = document.createElement("p");
    p.textContent = arrPersonagens[0] + ", " + arrPersonagens[1] + ", " + arrPersonagens[2] + " se assustaram com os gatos nervosos e revoltados com a interrupção e sairam correndo para a casa de " + arrPersonagens[0] + ".";
    p.style.fontWeight = "bold";
    divUm.appendChild(p);

    let divZero = document.createElement("div");
    divZero.setAttribute("id", "divZero");
    divZero.style.display = "flex";
    divZero.style.flexDirection = "column";
    divZero.style.justifyContent = "space-between";
    divZero.style.alignItems = "center";
    divZero.style.backgroundColor = "PaleGreen";
    divZero.style.border = "3px solid";
    divZero.style.borderColor = "black";
    document.getElementById("primeiraDiv").appendChild(divZero);

    let pZero = document.createElement("div");
    pZero.textContent = "Ufa, fim da aventura! Quase lá, não é? Tente escolher opções melhores para viver outra aventura!";
    pZero.style.fontWeight = "bold";
    divZero.appendChild(pZero);

    let botao = document.createElement("button");
    botao.addEventListener("click", function(){
        preInicializacao();
    });
    botao.textContent = "Deseja reiniciar? Clique aqui!";
    botao.style.padding = "10px";
    botao.style.border = "10px";
    botao.style.borderRadius = "20px 10px";
    botao.style.backgroundColor = "brown";
    document.getElementById("primeiraDiv").appendChild(botao);

}


function finalizaHistoria(){
    excluiConteudoDiv();
    document.getElementsByClassName("jogoBody")[0].style.backgroundColor = "YellowGreen";

    let divUm = document.createElement("div");
    divUm.setAttribute("id", "divUm");
    divUm.style.display = "flex";
    divUm.style.flexDirection = "column";
    divUm.style.justifyContent = "space-between";
    divUm.style.alignItems = "center";
    divUm.style.backgroundColor = "SaddleBrown";
    divUm.style.border = "3px solid";
    divUm.style.borderColor = "black";
    document.getElementById("primeiraDiv").appendChild(divUm);

    let p = document.createElement("p");
    p.textContent = "E assim as três crianças fizeram novos amigos felinos e continuaram a visitar as aulas do gato palestrante bastante empolgadas e empenhadas!";
    p.style.fontWeight = "bold";
    divUm.appendChild(p);

    let pUm = document.createElement("p");
    pUm.textContent = "That's all folks!";
    pUm.style.fontWeight = "bold";

    divUm.appendChild(pUm);

    let botao = document.createElement("button");
    botao.addEventListener("click", function(){
        preInicializacao();
    });
    botao.textContent = "Deseja reiniciar? Clique aqui!";
    botao.style.padding = "10px";
    botao.style.border = "10px";
    botao.style.borderRadius = "20px 10px";
    botao.style.backgroundColor = "pink";
    document.getElementById("primeiraDiv").appendChild(botao);


}

function terceiraDecisaoUm(arrPersonagens){
    excluiConteudoDiv();
    document.getElementsByClassName("jogoBody")[0].style.backgroundColor = "Teal";

    let divUm = document.createElement("div");
    divUm.setAttribute("id", "divUm");
    divUm.style.display = "flex";
    divUm.style.flexDirection = "column";
    divUm.style.justifyContent = "space-between";
    divUm.style.alignItems = "center";
    divUm.style.backgroundColor = "PaleGoldenRod";
    divUm.style.border = "3px solid";
    divUm.style.borderColor = "black";
    document.getElementById("primeiraDiv").appendChild(divUm);

    let p = document.createElement("p");
    p.textContent = "O gato palestrante possuia um bastão e uma capa de mago, demonstrando bastante sabedoria. Ao se aproximar de " + arrPersonagens[0] + " ele disse: "
    p.style.fontWeight = "bold";
    divUm.appendChild(p);

    let pUm = document.createElement("p");
    pUm.textContent = "\"Acho que não é segredo nenhum que sou inteligente e que estou dando aulas para meus companheiros... Sua turma gostaria de se juntar a nós nessa jornada pelo conhecimento? ";
    pUm.style.fontWeight = "bold";
    divUm.appendChild(pUm);

    let pDois = document.createElement("p");
    pDois.textContent = arrPersonagens[0] + ", " + arrPersonagens[1] + " e " + arrPersonagens[2] + " estavam perplexos e sem reação. Mas como " + arrPersonagens[2] + " era o mais corajoso do trio, arranjou um lugar junto aos outros gatinhos e decidiu participar da palestra.";
    pDois.style.fontWeight = "bold";
    divUm.appendChild(pDois);

    let pTres = document.createElement("p");
    pTres.textContent = "Seguindo a deixa de " + arrPersonagens[2] + " o resto do trio também decidiu se sentar para aprender novos assuntos que o gato palestrante estava ensinando.Percebendo que a sala já estava cheia, o gato palestrante então disse: \"Vamos aprender desde o começo. Uma variável em JavaScript é declarada da seguinte forma...\"";
    pTres.style.fontWeight = "bold";
    divUm.appendChild(pTres);


    let botaoUm = document.createElement("button");
    botaoUm.addEventListener("click", function(){
        finalizaHistoria();
    });
    botaoUm.textContent = "Que legal! Quero continuar";
    document.getElementById("divUm").appendChild(botaoUm);



}   

function continuaSegundaDecisaoUm(arrPersonagens){
    excluiConteudoDiv();
    document.getElementsByClassName("jogoBody")[0].style.backgroundColor = "MediumSpringGreen";

    let divUm = document.createElement("div");
    divUm.setAttribute("id", "divUm");
    divUm.style.display = "flex";
    divUm.style.flexDirection = "column";
    divUm.style.justifyContent = "space-between";
    divUm.style.alignItems = "center";
    divUm.style.backgroundColor = "PaleGoldenRod";
    divUm.style.border = "3px solid";
    divUm.style.borderColor = "black";
    document.getElementById("primeiraDiv").appendChild(divUm);

    let p = document.createElement("p");
    p.textContent = "Se espremendo para tentar procurar os gatinhos, as crianças ouviram uma voz grave dando uma palestra sobre um tal de JavaScript..."
    p.style.fontWeight = "bold";
    divUm.appendChild(p);

    let divZero = document.createElement("div");
    divZero.setAttribute("id", "divZero");
    divZero.style.display = "flex";
    divZero.style.flexDirection = "column";
    divZero.style.justifyContent = "space-between";
    divZero.style.alignItems = "center";
    divZero.style.backgroundColor = "PaleGreen";
    divZero.style.border = "3px solid";
    divZero.style.borderColor = "black";
    document.getElementById("divUm").appendChild(divZero);

    let pUm = document.createElement("p");
    pUm.textContent = "Curiosas, elas abriram a porta do ônibus e viram um grande seminário de gatos...";
    document.getElementById("divZero").appendChild(pUm);

    let divDois = document.createElement("div");
    divDois.setAttribute("id", "divDois");
    divDois.style.display = "flex";
    divDois.style.flexDirection = "row";
    divDois.style.justifyContent = "space-between";
    divDois.style.alignItems = "center";
    divDois.style.backgroundColor = "pink";
    divDois.style.border = "3px solid";
    divDois.style.borderColor = "black";
    document.getElementById("divZero").appendChild(divDois);



    let divTres = document.createElement("div");
    divTres.setAttribute("id", "divTres");
    divTres.style.display = "flex";
    divTres.style.flexDirection = "column";
    divTres.style.justifyContent = "space-between";
    divTres.style.alignItems = "center";
    divTres.style.backgroundColor = "pink";
    divTres.style.border = "3px solid";
    divTres.style.borderColor = "black";
    divDois.appendChild(divTres);

    let pZero = document.createElement("p");
    pZero.textContent = "O gato palestrante se dirigiu até as crianças";
    divTres.appendChild(pZero);
    let botaoUm = document.createElement("button");
    botaoUm.addEventListener("click", function(){
        terceiraDecisaoUm(arrPersonagens);
    });
    botaoUm.textContent = "Vamos ver no que dá!";
    document.getElementById("divTres").appendChild(botaoUm);

    let divQuatro = document.createElement("div");
    divQuatro.setAttribute("id", "divQuatro");
    divQuatro.style.display = "flex";
    divQuatro.style.flexDirection = "column";
    divQuatro.style.justifyContent = "space-between";
    divQuatro.style.alignItems = "center";
    divQuatro.style.backgroundColor = "PaleGoldenRod";
    divQuatro.style.border = "3px solid";
    divQuatro.style.borderColor = "black";
    divDois.appendChild(divQuatro);

    let pDois = document.createElement("p");
    pDois.textContent = "Os gatos fizeram uma algazarra";
    divQuatro.appendChild(pDois);
    let botaoDois = document.createElement("button");
    botaoDois.addEventListener("click", function(){
        terceiraDecisaoDois(arrPersonagens);
    });
    botaoDois.textContent = "Será? Vamos nessa!";
    document.getElementById("divQuatro").appendChild(botaoDois);

}

function segundaDecisaoUm(arrPersonagens){
    excluiConteudoDiv();
    document.getElementsByClassName("jogoBody")[0].style.backgroundColor = "Olive";

    let divUm = document.createElement("div");
    divUm.setAttribute("id", "divUm");
    divUm.style.display = "flex";
    divUm.style.flexDirection = "column";
    divUm.style.justifyContent = "space-between";
    divUm.style.alignItems = "center";
    divUm.style.backgroundColor = "LightCyan";
    divUm.style.border = "3px solid";
    divUm.style.borderColor = "black";
    document.getElementById("primeiraDiv").appendChild(divUm);

    let p = document.createElement("p");
    p.textContent = "Como haviam várias peças de carros e ônibus abandonadas na casa misteriosa, os gatos correram para lá. O trio, muito curioso, seguiu os gatos que foram para uma carcaça de ônibus escolar abandonada e velha.";
    p.style.fontWeight = "bold";
    divUm.appendChild(p);

    let botao = document.createElement("button");
    botao.textContent = "Continuar";
    botao.addEventListener("click", function(){
        continuaSegundaDecisaoUm(arrPersonagens);
    });
    botao.style.backgroundColor = "MediumTurquoise";
    document.getElementById("primeiraDiv").appendChild(botao);



    
}

function primeiraDecisaoUmUm(arrPersonagens){
    excluiConteudoDiv();
    document.getElementsByClassName("jogoBody")[0].style.backgroundColor = "LavenderBlush";

    let divUm = document.createElement("div");
    divUm.setAttribute("id", "divUm");
    divUm.style.display = "flex";
    divUm.style.flexDirection = "column";
    divUm.style.justifyContent = "space-between";
    divUm.style.alignItems = "center";
    divUm.style.backgroundColor = "LightCyan";
    divUm.style.border = "3px solid";
    divUm.style.borderColor = "black";
    document.getElementById("primeiraDiv").appendChild(divUm);

    let p = document.createElement("p");
    p.textContent = "No dia seguinte, o trio pulou o muro da casa misteriosa e notaram que todos os gatos pararam de brincar e passaram a observá-los e de repente...";
    p.style.fontWeight = "bold";
    divUm.appendChild(p);

    let divDois = document.createElement("div");
    divDois.setAttribute("id", "divDois");
    divDois.style.display = "flex";
    divDois.style.flexDirection = "row";
    divDois.style.justifyContent = "space-between";
    divDois.style.alignItems = "center";
    divDois.style.backgroundColor = "pink";
    divDois.style.border = "3px solid";
    divDois.style.borderColor = "black";
    document.getElementById("divUm").appendChild(divDois);

    let divTres = document.createElement("div");
    divTres.setAttribute("id", "divTres");
    divTres.style.display = "flex";
    divTres.style.flexDirection = "column";
    divTres.style.justifyContent = "space-between";
    divTres.style.alignItems = "center";
    divTres.style.backgroundColor = "pink";
    divTres.style.border = "3px 2px solid";
    divTres.style.borderColor = "black";
    document.getElementById("divDois").appendChild(divTres);

    let pUm = document.createElement("p");
    pUm.textContent = "Os gatos se esconderam";
    document.getElementById("divTres").appendChild(pUm);

    let botaoUm = document.createElement("button");
    botaoUm.addEventListener("click", function(){
        segundaDecisaoUm(arrPersonagens);
    });
    botaoUm.textContent = "Vamos ver no que dá!";
    document.getElementById("divTres").appendChild(botaoUm);

    let divQuatro = document.createElement("div");
    divQuatro.setAttribute("id", "divQuatro");
    divQuatro.style.display = "flex";
    divQuatro.style.flexDirection = "column";
    divQuatro.style.justifyContent = "space-between";
    divQuatro.style.alignItems = "center";
    divQuatro.style.backgroundColor = "Gainsboro";
    divQuatro.style.border = "3px 2px solid";
    divQuatro.style.borderColor = "black";
    document.getElementById("divDois").appendChild(divQuatro);


    let pDois = document.createElement("p");
    pDois.textContent = "Os gatos pularam o muro";
    document.getElementById("divQuatro").appendChild(pDois);

    let botaoDois = document.createElement("button");
    botaoDois.addEventListener("click", function(){
        segundaDecisaoDois(arrPersonagens);
    });
    botaoDois.textContent = "Será? Vamos nessa!";
    document.getElementById("divQuatro").appendChild(botaoDois);


}

function primeiraDecisaoUm(arrPersonagens){
    excluiConteudoDiv();
    document.getElementsByClassName("jogoBody")[0].style.backgroundColor = "LightCoral";

    let divUm = document.createElement("div");
    divUm.setAttribute("id", "divUm");
    divUm.style.display = "flex";
    divUm.style.flexDirection = "column";
    divUm.style.justifyContent = "space-between";
    divUm.style.alignItems = "center";
    divUm.style.backgroundColor = "LightGreen";
    divUm.style.border = "3px solid";
    divUm.style.borderColor = "black";
    document.getElementById("primeiraDiv").appendChild(divUm);

    let pUm = document.createElement("p");
    pUm.textContent = "A casa estava em ruinas, o que indicava que estava provavelmente abandonada. Ao chegar mais próximo dela, " + arrPersonagens[0] + " notou que havia diversos gatos miando e brincando uns com os outros.";
    document.getElementById("divUm").appendChild(pUm);

    let divDois = document.createElement("div");
    divDois.setAttribute("id", "divDois");
    divDois.style.display = "flex";
    divDois.style.flexDirection = "column";
    divDois.style.justifyContent = "space-between";
    divDois.style.alignItems = "center";
    divDois.style.backgroundColor = "LemonChiffon";
    divDois.style.border = "3px solid";
    divDois.style.borderColor = "black";
    document.getElementById("primeiraDiv").appendChild(divDois);

    let pDois = document.createElement("p");
    pDois.textContent = "Logo que chegou em casa, mandou mensagem para " + arrPersonagens[1] + " e " + arrPersonagens[2] + " contando sobre os gatinhos abandonados e chamando para que os três fossem até a casa levar comida para cuidar deles.";
    divDois.appendChild(pDois);


    let divTres = document.createElement("div");
    divTres.setAttribute("id", "divTres");
    divTres.style.display = "flex";
    divTres.style.flexDirection = "column";
    divTres.style.justifyContent = "space-between";
    divTres.style.alignItems = "center";
    divTres.style.backgroundColor = "LemonChiffon";
    divTres.style.border = "3px solid";
    divTres.style.borderColor = "black";
    document.getElementById("primeiraDiv").appendChild(divTres);

    let botao = document.createElement("button");
    botao.textContent = "Me conta mais!";
    botao.style.backgroundColor = "Cyan";
    botao.addEventListener("click", function(){
        primeiraDecisaoUmUm(arrPersonagens);
    });
    divTres.appendChild(botao);
}


function primeiraDecisao(arrPersonagens){
    excluiConteudoDiv();
    document.getElementsByClassName("jogoBody")[0].style.backgroundColor = "DarkCyan";
    let divUm = document.createElement("div");
    divUm.setAttribute("id", "divUm");
    divUm.style.display = "flex";
    divUm.style.flexDirection = "column";
    divUm.style.justifyContent = "space-between";
    divUm.style.alignItems = "center";
    divUm.style.backgroundColor = "DarkSlateGrey";
    divUm.style.border = "3px solid";
    divUm.style.borderColor = "black";
    document.getElementById("primeiraDiv").appendChild(divUm);

    let p = document.createElement("p");
    p.textContent = "Enquanto chutava os pedregulhos da pista de caminhada, " + arrPersonagens[0] + " avistou...";
    p.style.fontWeight = "bold";
    divUm.appendChild(p);

    let divDois = document.createElement("div");
    divDois.setAttribute("id", "divDois");
    divDois.style.display = "flex";
    divDois.style.flexDirection = "row";
    divDois.style.justifyContent = "space-between";
    divDois.style.alignItems = "center";
    divDois.style.backgroundColor = "pink";
    divDois.style.border = "3px solid";
    divDois.style.borderColor = "black";
    document.getElementById("divUm").appendChild(divDois);

    let divTres = document.createElement("div");
    divTres.setAttribute("id", "divTres");
    divTres.style.display = "flex";
    divTres.style.flexDirection = "column";
    divTres.style.justifyContent = "space-between";
    divTres.style.alignItems = "center";
    divTres.style.backgroundColor = "DarkGray";
    divTres.style.border = "3px 2px solid";
    divTres.style.borderColor = "black";
    document.getElementById("divDois").appendChild(divTres);

    let pUm = document.createElement("p");
    pUm.textContent = "uma casa inusitada";
    document.getElementById("divTres").appendChild(pUm);

    let botaoUm = document.createElement("button");
    botaoUm.addEventListener("click", function(){
        primeiraDecisaoUm(arrPersonagens);
    });
    botaoUm.textContent = "Vamos ver no que dá!";
    document.getElementById("divTres").appendChild(botaoUm);

    let divQuatro = document.createElement("div");
    divQuatro.setAttribute("id", "divQuatro");
    divQuatro.style.display = "flex";
    divQuatro.style.flexDirection = "column";
    divQuatro.style.justifyContent = "space-between";
    divQuatro.style.alignItems = "center";
    divQuatro.style.backgroundColor = "Gainsboro";
    divQuatro.style.border = "3px 2px solid";
    divQuatro.style.borderColor = "black";
    document.getElementById("divDois").appendChild(divQuatro);


    let pDois = document.createElement("p");
    pDois.textContent = "um gato";
    document.getElementById("divQuatro").appendChild(pDois);

    let botaoDois = document.createElement("button");
    botaoDois.addEventListener("click", function(){
        primeiraDecisaoDois(arrPersonagens);
    });
    botaoDois.textContent = "Será? Vamos nessa!";
    document.getElementById("divQuatro").appendChild(botaoDois);

}

function continuaHistoria(arrPersonagens){
    excluiConteudoDiv();
    document.getElementsByClassName("jogoBody")[0].style.backgroundColor = "DarkKhaki";
    let divUm = document.createElement("div");
    divUm.setAttribute("id", "divUm");
    divUm.style.display = "flex";
    divUm.style.flexDirection = "column";
    divUm.style.justifyContent = "space-between";
    divUm.style.alignItems = "center";
    divUm.style.backgroundColor = "pink";
    divUm.style.border = "3px solid";
    divUm.style.borderColor = "black";
    document.getElementById("primeiraDiv").appendChild(divUm);

    let p = document.createElement("p");
    p.textContent = "Mesmo querendo voltar para casa e jogar Watchdogs a tarde inteira, " + arrPersonagens[0] + " foi caminhar sem muitas reclamações.";
    divUm.appendChild(p);

    let botaoUm = document.createElement("button");
    botaoUm.setAttribute("id", "botaoUm");
    botaoUm.addEventListener("click", function(){
        primeiraDecisao(arrPersonagens);
    });
    botaoUm.style.padding = "10px";
    botaoUm.style.border = "10px";
    botaoUm.style.borderRadius = "20px 10px";
    botaoUm.textContent = "Continuar história";
    botaoUm.style.backgroundColor = "brown";
    divUm.appendChild(botaoUm);


}

function personagemTres(arrPersonagens){
    let terceiro = document.getElementById("inputTres").value;
    arrPersonagens.push(terceiro);
    if(arrPersonagens[2] != ""){
        excluiConteudoDiv();
        document.getElementsByClassName("jogoBody")[0].style.backgroundColor = "orange";
        let divUm = document.createElement("div");
        divUm.setAttribute("id", "divUm");
        divUm.style.display = "flex";
        divUm.style.flexDirection = "column";
        divUm.style.justifyContent = "space-between";
        divUm.style.alignItems = "center";
        divUm.style.backgroundColor = "pink";
        divUm.style.border = "3px solid";
        divUm.style.borderColor = "black";
        document.getElementById("primeiraDiv").appendChild(divUm);


        let p = document.createElement("p");
        p.textContent = "Era tarde de domingo e " + arrPersonagens[0] + " estava caminhando com seus pais, após um longo sermão \"de que os jovens também devem se exercitar!\"";
        divUm.appendChild(p);

        let botaoUm = document.createElement("button");
        botaoUm.setAttribute("id", "botaoUm");
        botaoUm.addEventListener("click", function(){
            continuaHistoria(arrPersonagens);
        });
        botaoUm.style.padding = "10px";
        botaoUm.style.border = "10px";
        botaoUm.style.borderRadius = "20px 10px";
        botaoUm.textContent = "Continuar história";
        botaoUm.style.backgroundColor = "aquamarine";
        divUm.appendChild(botaoUm);

    }
}


function personagemDois(arrPersonagens){
    let segundo = document.getElementById("inputDois").value;
    arrPersonagens.push(segundo);
    personagemTres(arrPersonagens);
}

function personagemUm(){
    let primeiro = document.getElementById("inputUm").value;
    let arrPersonagens = [];
    arrPersonagens.push(primeiro);
    personagemDois(arrPersonagens);
}

function iniciaJogo(nome){
    excluiConteudoDiv();
    aumentaDiv();
    document.getElementsByClassName("jogoBody")[0].style.backgroundColor = "green";
    criarTexto("Olá, " + nome + "! Vamos começar a contar uma história em que você tomará o rumo de todos os personagens?");
    let pUm = document.createElement("p");
    pUm.innerText = "Para começarmos, você tomará algumas decisões de cara! Digite um nome para dar vida ao primeiro personagem da história: ";
    
    
    
    let divUm = document.createElement("div");
    divUm.setAttribute("id", "divUm");
    document.getElementById("primeiraDiv").appendChild(divUm);
    divUm.style.display = "flex";
    divUm.style.flexDirection = "column";
    divUm.style.justifyContent = "space-evenly";
    divUm.style.alignItems = "center";
    divUm.style.backgroundColor = "salmon";
    divUm.style.border = "outset";
    document.getElementById("divUm").appendChild(pUm);
    let inputUm = document.createElement("input");
    inputUm.setAttribute("id", "inputUm");
    inputUm.setAttribute("placeholder", "Primeiro personagem");
    inputUm.setAttribute("type", "text");
    document.getElementById("divUm").appendChild(inputUm);
    let botaoUm = document.createElement("button");
    botaoUm.setAttribute("id", "botaoUm");
    botaoUm.setAttribute("onclick", "personagemUm()");
    document.getElementById("divUm").appendChild(botaoUm);
    botaoUm.style.padding = "10px";
    botaoUm.style.border = "10px";
    botaoUm.style.borderRadius = "20px 10px";
    botaoUm.textContent = "Escolhi o nome!";


    let divDois = document.createElement("div");
    divDois.setAttribute("id", "divDois");
    document.getElementById("primeiraDiv").appendChild(divDois);
    divDois.style.display = "flex";
    divDois.style.flexDirection = "column";
    divDois.style.justifyContent = "center";
    divDois.style.alignItems = "center";
    divDois.style.backgroundColor = "pink";
    divDois.style.border = "outset";
    let pDois = document.createElement("p");
    pDois.textContent = "Agora, mais um nome para o segundo personagem:";
    divDois.appendChild(pDois);
    let inputDois = document.createElement("input");
    inputDois.setAttribute("id", "inputDois");
    inputDois.setAttribute("placeholder", "Segundo personagem");
    inputDois.setAttribute("type", "text");
    divDois.appendChild(inputDois);
    let botaoDois = document.createElement("button");
    botaoDois.setAttribute("id", "botaoDois");
    botaoDois.setAttribute("onclick", "personagemUm()");
    divDois.appendChild(botaoDois);
    botaoDois.style.padding = "10px";
    botaoDois.style.border = "10px";
    botaoDois.style.borderRadius = "20px 10px";
    botaoDois.textContent = "Vamos para o outro!";

    let divTres = document.createElement("div");
    divTres.setAttribute("id", "divTres");
    document.getElementById("primeiraDiv").appendChild(divTres);
    divTres.style.display = "flex";
    divTres.style.flexDirection = "column";
    divTres.style.justifyContent = "center";
    divTres.style.alignItems = "center";
    divTres.style.backgroundColor = "purple";
    divTres.style.border = "outset";
    let pTres = document.createElement("p");
    pTres.textContent = "Prometo que agora é o último personagem! haha";
    divTres.appendChild(pTres);
    let inputTres = document.createElement("input");
    inputTres.setAttribute("id", "inputTres");
    inputTres.setAttribute("placeholder", "Terceiro personagem");
    inputTres.setAttribute("type", "text");
    divTres.appendChild(inputTres);
    let botaoTres = document.createElement("button");
    botaoTres.setAttribute("id", "botaoTres");
    botaoTres.setAttribute("onclick", "personagemUm()");
    divTres.appendChild(botaoTres);
    botaoTres.style.padding = "10px";
    botaoTres.style.border = "10px";
    botaoTres.style.borderRadius = "20px 10px";
    botaoTres.textContent = "Ir para a história";




    
}






