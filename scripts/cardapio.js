const TBODY = document.querySelector("tbody");

const getAllDB = async () => {
    const request = await fetch("https://pizzaria-4cyt.onrender.com/getAll");
    const json = await request.json();

    return json;
}

const createRow = ({ name, igredientes }, length) => {

    let tr = document.createElement("tr");

    if (length > 0) {
        let tdName = document.createElement("td");
        let tdIgredientes = document.createElement("td");

        tdName.innerHTML = name;
        tdIgredientes.innerHTML = igredientes.join(", ");

        tr.appendChild(tdName);
        tr.appendChild(tdIgredientes);
    } else {
        let td = document.createElement("td");
        td.setAttribute("colspan", 2);
        td.innerHTML = "<h1>Cardápio está vazio no momento!</h1>";
        tr.appendChild(td);
    }

    return tr;
}

const loadTable = async () => {

    const { rows } = await getAllDB();

    if (rows.length > 0) {
        rows.map((value) => {
            let tr = createRow(value, rows.length);

            TBODY.appendChild(tr);
        });
    }else {
        let tr = createRow({name: "", igredientes: ""}, 0);

        TBODY.appendChild(tr);
    }

}

loadTable();
