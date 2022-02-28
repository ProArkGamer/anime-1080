function GetData() {
    client.open("GET", "https://api.npoint.io/f97cae270c3ec20d3543");
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
    var contenidoDiv=document.getElementById("contEp");
    contenidoDiv.textContent="";
    var divRow=document.createElement("div");
    divRow.classList.add("row");
    console.log(data)
    
    for (var i = 0; i < data.length; i++) {
        var img = data[i].img;
        var titulo = data[i].titulo;
        var episodios = data[i].episodios;
        var carpeta = data[i].carpeta;

    }

    contenidoDiv.appendChild(divRow);
}