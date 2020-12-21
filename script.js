function recebeNomeJogador(){
    var nomeJogador = prompt("Vamos receber seu nome primeiro para termos um contato mais direto? Conta pra mim aí!");
    return nomeJogador;

}

function apresentaJogo(nome){
    var vetorNomes = [];
    alert("Olá " + nome + "! Vamos começar a contar uma história em que você tomará o rumo de todos os personagens?\n");
    var personagemUm = prompt("Para começarmos, você tomará algumas decisões de cara! Digite um nome para dar vida ao primeiro personagem da história: ");
    var personagemDois = prompt("Agora, mais um nome para o segundo personagem: ");
    var personagemTres = prompt("Prometo que agora é o último personagem! haha");

    vetorNomes.push(personagemUm, personagemDois, personagemTres)

    return vetorNomes;
}

function comecaHistoria(vetorNomes){
    alert("Era tarde de domingo e " + vetorNomes[0] + " estava caminhando com seus pais, após um longo sermão \"de que os jovens também devem se exercitar!\"");
    alert("Mesmo querendo voltar para casa e jogar Watchdogs a tarde inteira, " + vetorNomes[0] + " foi caminhar sem muitas reclamações.");
    var decisao = prompt("Enquanto chutava os pedregulhos da pista de caminhada, " + vetorNomes[0] + " avistou...\n ----Opção 1: uma casa inusitada\n ----Opção 2: um gato");
    return decisao;
}

function historiaDois(vetorNomes){
    alert("O gatinho que foi avistado nem ligou muito para " + vetorNomes[0] + " e logo subiu em uma árvore.");
    alert(vetorNomes[0] + " achou bonitinho e continuou a caminhar com seus pais, bastante feliz por ter visto aquela fofura.");
    alert("Fim da história :) Tente escolher outras opções para viver uma aventura!");

}

function historiaUm(vetorNomes){
    alert("A casa estava em ruinas, o que indicava que estava provavelmente abandonada. Ao chegar mais próximo dela, " + vetorNomes[0] + " notou que havia diversos gatos miando e brincando uns com os outros.");
    alert("Ver aquilo fez com que " + vetorNomes[0] + " se sentisse no dever de cuidar de todos aqueles gatinhos...");
    alert("Logo que chegou em casa, mandou mensagem para " + vetorNomes[1] + " e " + vetorNomes[2] + " contando sobre os gatinhos abandonados e chamando para que os três fossem até a casa levar comida para cuidar deles.");
    var decisaoDois = prompt("No dia seguinte, o trio pulou o muro da casa misteriosa e notaram que todos os gatos pararam de brincar e passaram a observá-los e de repente...\n ----Opção 1: Os gatos se esconderam\n ----Opção 2: Os gatos pularam o muro");
    return decisaoDois;
}

function historiaSeis(vetorNomes){
    alert("Como os gatos pularam o muro e foram direto para a rua, " + vetorNomes[2] + " alertou para que o trio não fosse atrás deles pois seria perigoso atravessar a rua caçando gatos.");
    var opcao = prompt("Mas " + vetorNomes[1] + " ficou pensativo e decidiu deixar uma nota de despedida dos gatos\n ----Opção 1: descubra o bilhete que o trio deixou\n ----Opção 2: descubra o bilhete que o trio deixou");
    if(opcao === "1"){
        alert("O que " + vetorNomes[1] + " escreveu foi bem amigável: Prazer em conhecê-los gatinhos!");
    }else if( opcao === "2"){
        alert("O que " + vetorNomes[1] + " escreveu teve um tom desafiador: Vou voltar e descobrir o que vocês andam aprontando, seus gatinhos custosos!");
    }
    alert("O trio todo riu e foram embora na esperança de encontrar toda a comunidade de gatos novamente.");
    alert("Fim da história :) Tente escolher opções melhores para viver uma aventura!");
}

function primeiraDecisao(decisao, vetorNomes){
    if(decisao === "1"){
        var decisaoDois = historiaUm(vetorNomes);
    }else if(decisao === "2"){
        var decisaoDois = historiaDois(vetorNomes);
    }

    return decisaoDois;
}

function historiaTres(){
    alert("Como haviam várias peças de carros e ônibus abandonadas na casa misteriosa, os gatos correram para lá. O trio, muito curioso, seguiu os gatos que foram para uma carcaça de ônibus escolar abandonada e velha.");
    alert("Se espremendo para tentar procurar os gatinhos, as crianças ouviram uma voz grave dando uma palestra sobre um tal de JavaScript...");
    var decisao = prompt("Curiosas, elas abriram a porta do ônibus e viram um grande seminário de gatos...\n ----Opção 1: O gato palestrante se dirigiu até as crianças\n ----Opção 2: Os gatos fizeram uma algazarra");
    return decisao;
}

function historiaCinco(vetorNomes){
    alert("O gato palestrante possuia um bastão e uma capa de mago, demonstrando bastante sabedoria. Ao se aproximar de " + vetorNomes[0] + " ele disse: ");
    alert("\"Acho que não é segredo nenhum que sou inteligente e que estou dando aulas para meus companheiros... Sua turma gostaria de se juntar a nós nessa jornada pelo conhecimento? ");
    alert(vetorNomes[0] + ", " + vetorNomes[1] + " e " + vetorNomes[2] + " estavam perplexos e sem reação. Mas como " + vetorNomes[2] + " era o mais corajoso do trio, arranjou um lugar junto aos outros gatinhos e decidiu participar da palestra.");
    alert("Seguindo a deixa de " + vetorNomes[2] + " o resto do trio também decidiu se sentar para aprender novos assuntos que o gato palestrante estava ensinando.");
    alert("Percebendo que a sala já estava cheia, o gato palestrante então disse: \"Vamos aprender desde o começo. Uma variável em JavaScript é declarada da seguinte forma...\"");
    alert("E assim as três crianças fizeram novos amigos felinos e continuaram a visitar as aulas do gato palestrante bastante empolgadas e empenhadas!");
    alert("That's all folks!");
}

function terceiraDecisao(decisao, vetorNomes){
    if(decisao === "1"){
        historiaCinco(vetorNomes);
    }else if(decisao === "2"){
        historiaQuatro(vetorNomes);
    }
}

function historiaQuatro(vetorNomes){
    alert(vetorNomes[0] + ", " + vetorNomes[1] + ", " + vetorNomes[2] + " se assustaram com os gatos nervosos e revoltados com a interrupção e sairam correndo para a casa de " + vetorNomes[0]+ ".");
    alert("Ufa, fim da aventura! Quase lá, não é? Tente escolher opções melhores para viver outra aventura!");
}

function segundaDecisao(decisao, vetorNomes){
    if(decisao == "1"){
        var decisao = historiaTres();
    }else if(decisao == "2"){
        var decisao = historiaSeis(vetorNomes);
    }

    return decisao;
}

function comecar(nome, vetorNomes){
    var continuarJogo = prompt("Está pronto para começar? Se sim, digite 1. Caso contrário, digite 0");
    
    if(parseInt(continuarJogo)){
        var decisao = comecaHistoria(vetorNomes);
        return decisao;
    }else{
        alert("Foi bom te conhecer, " + nome + ". Bye bye! :)");
        return 0;
    }
}

var nomeJogador = recebeNomeJogador();
var vetorNomes = apresentaJogo(nomeJogador);
var decisaoUm = comecar(nomeJogador, vetorNomes);
var decisaoDois = primeiraDecisao(decisaoUm, vetorNomes);
var decisaoTres = segundaDecisao(decisaoDois, vetorNomes);
terceiraDecisao(decisaoTres, vetorNomes);


