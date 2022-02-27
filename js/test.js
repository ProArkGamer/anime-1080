function GetData() {
    client.open("GET", "../data/titulos.json");
    client.send();
}

const client = new XMLHttpRequest();
GetData()

client.addEventListener("readystatechange", () => {
    if (client.readyState === 4 && client.status === 200) {
        var data = JSON.parse(client.responseText);
        console.log(data)
        MostrarContenido(data);
    }
});

function MostrarContenido(data) {
    var contenidoDiv=document.getElementById("contenido");
    contenidoDiv.textContent="";
    var divRow=document.createElement("div");
    divRow.classList.add("row");
    console.log(data)
    for (var i = 0; i < data.length; i++) {
        var img = data[i].img;
        var titulo = data[i].titulo;
        var episodios = data[i].episodios;
        var carpeta = data[i].carpeta;

        //Crear el div del producte
        var divProd=document.createElement("div");
        divProd.classList.add("col-3");

        //div individual
        var divIndividual=document.createElement("div");
        divIndividual.classList.add("individual");
        
        //a href
        var divhref=document.createElement("a");
        divhref.setAttribute("href", carpeta);


        //Imagen
        var imagen=document.createElement("img");
        imagen.setAttribute("src","portadas/"+img);
        imagen.classList.add("fotoProducte");
        imagen.classList.add("f2");
        divIndividual.appendChild(imagen);

        //Titulo 
        var pDescripcio=document.createElement("h2");
        pDescripcio.textContent=titulo;
        pDescripcio.classList.add("descripcio");
        divIndividual.appendChild(pDescripcio);

        //capitulos
        var pEpisodios=document.createElement("h5");
        pEpisodios.textContent=episodios + " Episodios";
        pEpisodios.classList.add("descripcio");
        divIndividual.appendChild(pEpisodios);

        divhref.appendChild(divIndividual);
        divProd.appendChild(divhref);
        divRow.appendChild(divProd);


    }

    contenidoDiv.appendChild(divRow);
}