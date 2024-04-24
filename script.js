var header = document.querySelector("header");
var section = document.querySelector("section");

var requestURL="dados.json"

var request = new XMLHttpRequest();
request.open('Get', requestURL);
request.responseType = "json";
request.send();
request.onload = function() {
    var MeuJson = request.response;
    infoLoja(MeuJson);
    notebook(MeuJson);
    celular(MeuJson);
    acessorio(MeuJson);

}

function infoLoja(jsonObj){
    var myPara = document.createElement("h1");
    myPara.textContent = `${jsonObj.Loja}`;
    // myPara.style.color = "DarkSlateGray";
    header.appendChild(myPara);
}
    var myPara0 = document.createElement("p");
    myPara0.textContent = `Tudo o que você procura sobre tecnologia, você acha aqui!`;
    myPara0.style.textAlign = "center";
    myPara0.style.fontFamily = `Faster One, cursive`;
    myPara0.style.fontSize = "20px";
    section.appendChild(myPara0);

function notebook(jsonObj){
    var Notebook = jsonObj["Notebook"];

    for(var i = 0;i< Notebook.length; i++){
        var myArticle = document.createElement("Article");
        var myH2 = document.createElement("h2");
        var myPara1 = document.createElement("p");
        var myPara2 = document.createElement("p");
        var myPara3 = document.createElement("p");
        var myPara4 = document.createElement("p");
        var myPara5 = document.createElement("p");
        var myList = document.createElement("ul");

        myH2.textContent = Notebook[i].Tipo;
        myPara1.textContent = `Marca: ${Notebook[i].Marca}`;
        myPara5.textContent = `Modelo: ${Notebook[i].Modelo}`
        myPara2.textContent = `Preço ${Notebook[i].Preço}`;
        myPara3.textContent =  `Disponível: ${Notebook[i].Disponível ? 'Disponível' : 'Indisponível'}`
        Notebook[i].Disponível ? false : myPara3.style.color = "red";
        myPara4.textContent = "Cores: ";
        
        for(var j=0; j< Notebook[i].Cores.length; j++){
            //myList.textContent = <li> ${notebook[i].cores[j]} </li>;
            let cores = document.createElement("li");
            cores.innerHTML = Notebook[i].Cores[j];
            myList.appendChild(cores);
        }

        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara5);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myPara4);
        myArticle.appendChild(myList);
        section.appendChild(myArticle);

    }
}

function celular(jsonObj){
    var Celular = jsonObj["Celular"];

    for(var i = 0;i< Celular.length; i++){
        var myArticle = document.createElement("Article");
        var myH2 = document.createElement("h2");
        var myPara1 = document.createElement("p");
        var myPara2 = document.createElement("p"); 
        var myPara3 = document.createElement("p");
        var myPara4 = document.createElement("p");
        var myPara5 = document.createElement("p");
        var myList = document.createElement("ul");

        myH2.textContent = Celular[i].Tipo;
        myPara1.textContent = `Marca: ${Celular[i].Marca}`;
        myPara5.textContent = `Modelo: ${Celular[i].Modelo}`
        myPara2.textContent = `Preço ${Celular[i].Preço}`;
        myPara3.textContent =  `Disponível: ${Celular[i].Disponível ? 'Disponível' : 'Indisponível'}`
        Celular[i].Disponível ? false : myPara3.style.color = "red";
        myPara4.textContent = "Cores: ";
        
        for(var j=0; j< Celular[i].Cores.length; j++){
            let cores = document.createElement("li");
            cores.innerHTML = Celular[i].Cores[j];
            myList.appendChild(cores);
        }

        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara5);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myPara4);
        myArticle.appendChild(myList);
        section.appendChild(myArticle);

    }
}
function acessorio(jsonObj){
    var Acessorio = jsonObj["Acessorios"];

    for(var i = 0;i< Acessorio.length; i++){
        var myArticle = document.createElement("Article");
        var myH2 = document.createElement("h2");
        var myPara1 = document.createElement("p");
        var myPara2 = document.createElement("p"); 
        var myPara3 = document.createElement("p");
        var myPara4 = document.createElement("p");
        var myPara5 = document.createElement("p");
        var myList = document.createElement("ul");

        myH2.textContent = Acessorio[i].Tipo;
        myPara1.textContent = `Marca: ${Acessorio[i].Marca}`;
        myPara5.textContent = `Modelo: ${Acessorio[i].Modelo}`
        myPara2.textContent = `Preço ${Acessorio[i].Preço}`;
        myPara3.textContent =  `Disponível: ${Acessorio[i].Disponível ? 'Disponível' : 'Indisponível'}`
        Acessorio[i].Disponível ? false : myPara3.style.color = "red";
        myPara4.textContent = "Cores: ";
        
        for(var j=0; j< Acessorio[i].Cores.length; j++){
            let cores = document.createElement("li");
            cores.innerHTML = Acessorio[i].Cores[j];
            myList.appendChild(cores);
        }

        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara5);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myPara4);
        myArticle.appendChild(myList);
        section.appendChild(myArticle);

    }
}