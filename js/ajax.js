function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        myFunction(this);
    }
    xhttp.open("GET", "../docs/cd_catalog.xml");
    xhttp.send();
}
function myFunction(xml) {
    const xmlDoc = xml.responseXML;
    const x = xmlDoc.getElementsByTagName("CD");
    let table = "<tr><th>Artist</th><th>Title</th></tr>";
    for (let i = 0; i < x.length; i++) {
        table += "<tr><td>" +
            x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
            "</td><td>" +
            x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
            "</td></tr>";
    }
    document.getElementById("demo").innerHTML = table;
}

//Ejemplo 2
function loadDoc2() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        document.getElementById("demo2").innerHTML =
            this.responseText;
    }
    xhttp.open("GET", "../docs/ajax_info.txt", true);
    xhttp.send();
}

//Ejemplo 3
function showCustomer(str) {
    if (str == "") {
        document.getElementById("txtHint").innerHTML = "";
        return;
    }
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        document.getElementById("txtHint").innerHTML = this.responseText;
    }
    xhttp.open("GET", "../docs/getcustomer.php?q=" + str);
    xhttp.send();
}