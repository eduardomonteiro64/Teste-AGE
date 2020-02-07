
CreateTable = () => {
    const Company = [
        {
            Código: "1",
            Nome: "Eduardo",
            Cargo: "Dev Front End",
            DataNascimento: "16/08/1999"
        },
        {
            Código: "2",
            Nome: "João",
            Cargo: "Dev Back End",
            DataNascimento: "15/03/2000"
        },
        {
            Código: "3",
            Nome: "Pedro",
            Cargo: "Dev Fullstack",
            DataNascimento: "10/09/1998"
        },
        {
            Código: "4",
            Nome: "Julio",
            Cargo: "Dev Ops",
            DataNascimento: "10/09/1996"
        },
    ];

    var col = [];
    for (var i = 0; i < Company.length; i++) {
        for (var key in Company[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }

    var table = document.createElement("table");
    var tr = table.insertRow(0);

    for (var i = 0; i < col.length; i++) {
        var th = document.createElement("th");
        th.innerHTML = col[i];
        tr.appendChild(th);
    }

    for (var i = 0; i < Company.length; i++) {
        tr = table.insertRow(-1);
        for (var j = 0; j < col.length; j++) {
            var tableCell = tr.insertCell();
            tableCell.innerHTML = Company[i][col[j]];
        }
    }

    var div = document.getElementById("showTable");
    div.appendChild(table);
}