class Cliente {
    constructor() {
        var Nome;
        var Mesa;
        var Conta;

        this.setNome = function () {
            Nome = value;
        };
        this.getNome = function () {
            return Nome;
        };
        this.setMesa = function () {
            Mesa = value;
        };
        this.getMesa = function () {
            return Mesa;
        };
        this.getConta = function () {
            return Conta;
        };
        function saldo(preco) {
        this.Conta += preco;    
        }
    }
}

class Comida {
    constructor() {
        var comida;

        this.setComida = function () {
            comida = value;
        };
        this.getComida = function () {
            return comida;
        };
    }
}

class Restaurante {
    constructor() {
        var pedido;
        this.setPedido = function () {
            pedido = value;
        };
        this.getPedido = function () {
            return pedido;
        };
    }
}

//termino das classes
function alocaCliente() {
    var mesa = parseInt(prompt("Digite um numero da mesa: "));
    document.getElementById("mesaLivre"+(mesa)).src="foto/mesaUsando.jpg";
    document.getElementById("mesa"+(mesa)).textContent = ("Mesa " + mesa + " - Em Uso!! Falta pedir"); 
}

/*
function limpaMesa() {
    var mesa = parseInt(prompt("Qual a mesa que precisa limpar?"));
    setTimeout(function(){
        document.getElementById("mesaLivre"+(mesa)).src="foto/mesaVazia.jpg";
        alert("mesa "+ mesa + " esta limpa e pronta pra usar");
    },9000); 
}*/

function fazPedido(){
    var cli = new Cliente();
    /*var com = new Comida();
    var rest = new Restaurante(); */

    var nome = prompt("Qual nome do Cliente? ");
    
    var mesa = parseInt(prompt("Qual a mesa qua vai o pedido?"));
    

    var time = escolhePrato();
    cli.Nome = nome;
    cli.Mesa = mesa;
    cli.saldo(time[1]);

    alert(cli.getNome() + " da mesa " + cli.getMesa() + " esperara " + (time[0]) + " minutos ate o prato ficar pronto"+
    "e tera que pagar R$ " + cli.getConta());
    document.getElementById("mesaLivre"+(cli.getMesa())).src="foto/mesaUsando.jpg";
    document.getElementById("mesa" + (cli.getMesa())).textContent = ("espere " + time[0] + " minutos");

    setTimeout(function(){
        document.getElementById("mesaLivre"+(cli.getMesa())).src="foto/mesaUsando.jpg";
        document.getElementById("mesa" + (cli.getMesa())).textContent = ("Mesa " + cli.getMesa() + " - Em uso!! Comendo");
    }, (time[0] * 1000));

    setTimeout(function(){
        document.getElementById("mesaLivre"+(cli.getMesa())).src="foto/mesaSuja.jpg";
        document.getElementById("mesa" + (cli.getMesa())).textContent = ("mesa "+ cli.getMesa() + " - Esta Suja");
    }, (time[0] * 1000) + 20000); 

    setTimeout(function(){
        document.getElementById("mesaLivre"+(cli.getMesa())).src="foto/mesaVazia.jpg";
        document.getElementById("mesa" + (cli.getMesa())).textContent = ("mesa "+ cli.getMesa());
    }, (time[0] * 1000 + 20000) + 9000);
}

function escolhePrato(){
    var tempo = 0;
    var total = 0;
    var preco = 0.0;
    var conta = 0.0;

    tempo = parseInt(tempo);
    total = parseInt(total);
    preco = parseFloat(preco);
    conta = parseFloat(conta);

    do{
        var n = parseInt(prompt("Qual o codigo do prato?"));
        switch(n){
        case 401:
            tempo = 20;
            preco = 35.69;
            break;
        case 402:
            tempo = 18;
            preco = 23.99;
            break;
        case 403:
            tempo = 12;
            preco = 21.79;
            break;
        case 404:
            tempo = 19;
            preco = 27.99;
            break;
        case 405:
            tempo = 19;
            preco = 31.57;
            break;
        case 406:
            tempo = 17;
            preco = 29.99;
            break;
        case 407:
            tempo = 25;
            preco = 38.97;
            break;
        case 408:
            tempo = 10;
            preco = 20.78;
            break;
        default:
            alert("Escolha um codigo valido!!"); 
        }
       total = total + tempo;
       conta = conta + preco;
       
       var op = prompt("deseja pedir outro prato? (s/n)");
    }while(op != "n" && op != "N");
return [total, conta.toFixed(2)];
}

function mostraIngredientes(){
    var n = parseInt(prompt("Qual o codigo do prato?"));
    switch(n){
        case 401:
            alert("File de peixe grelhado, " + 
            "coberto com molho de tomate em azeite, " +
            "alho, " +
            "alecrim, " +
            "batatas ao forno");
            break;
        case 402:
            alert("quibe recheado com " +
            "catupiry, "+
            "coberto com cebolas salteadas na " +
            "manteiga, "+
            "servido com arroz de lentilha");
            break;
        case 403:
            alert("File de coxas e sobrecoxa desossadas, " +
            "grelhado, " + 
            "espaguete na manteiga");
            break;
        case 404:
            alert("iscas de figado aceboladas, " +
            "servido com arroz e batatas sauté");
            break;
        case 405:
            alert("grelhado, " +
            "tutu de feijao, " + 
            "arroz branco, " + 
            "couve mineira");
            break;
        case 406:
            alert("cubos de carne bovina, " +
            "linguiça calabresa no molho madeira, " +
            "arroz branco e farofa de ovo" );
            break;
        case 407:
            alert("steak grelhado, " +
            "coberto com ovo frito, " +
            "arroz e batata fritas" );
            break;
        case 408:
            alert("Feijao");
            break;
        default:
            alert("escolha um codigo valido!!!");
    }
}

function produtoEstoque(){
 var ingrediente = [
     {"nome": "File de peixe grelhado", "qtde": 15.0},
     {"nome": "molho de tomate em azeite", "qtde": 10.0},
     {"nome": "alho", "qtde": 10.0},
     {"nome": "alecrim", "qtde": 6.0},
     {"nome": "batatas", "qtde": 20.0},
     {"nome": "quibe", "qtde": 16.0},
     {"nome": "catupiry", "qtde": 8.0},
     {"nome": "cebolas", "qtde": 21.0},
     {"nome": "manteiga", "qtde": 9.0},
     {"nome": "arroz", "qtde": 35.0},
     {"nome": "file de coxa", "qtde": 17.0},
     {"nome": "sobrecoxa", "qtde": 18.0},
     {"nome": "espaguete", "qtde": 17.0},
     {"nome": "iscas de figado", "qtde": 20.0},
     {"nome": "feijao", "qtde": 23.0},
     {"nome": "couve", "qtde": 10.0},
     {"nome": "cubo de carne bovina", "qtde": 30.0},
     {"nome": "linguica calabresa", "qtde": 26.0},
     {"nome": "molho madeira", "qtde": 10.0},
     {"nome": "ovo", "qtde": 60},
     {"nome": "steak", "qtde": 25.0}  
    ];
}
