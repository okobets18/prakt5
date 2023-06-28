function calculate() {
    var xMin = parseInt(document.getElementById("xMin").value);
    var xMax = parseInt(document.getElementById("xMax").value);
    var step = parseInt(document.getElementById("step").value);

    var tableBody = document.getElementById("resultTableBody");
    tableBody.innerHTML = "";

    for (var x = xMin; x <= xMax; x += step) {
        var W;

        if (x < - 4) {
            W = Math.abs(x) + Math.tan(x);
        } else if (x === -4) {
            W = 23;
        } else if (x > -4) {
            W = Math.cos(x) + x;
        }

        var row = document.createElement("tr");
        var xCell = document.createElement("td");
        xCell.textContent = x;
        row.appendChild(xCell);

        var ZCell = document.createElement("td");
        ZCell.textContent = W;
        row.appendChild(ZCell);

        tableBody.appendChild(row);
    }
}