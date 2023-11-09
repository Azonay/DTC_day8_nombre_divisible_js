function afficherNombresDivisibles() {
  const debut = parseInt(document.getElementById("nombre-depart").value);
  const fin = parseInt(document.getElementById("nombre-arrivee").value);
  const nombre = parseInt(document.getElementById("nombre-detection").value);

  let resultat = [];

  for (let i = debut; i <= fin; i++) {
    if (i % nombre === 0) {
      resultat.push(i);
    }
  }

  const resultatDiv = document.getElementById("resultat");
  resultatDiv.innerHTML = "";

  if (resultat.length > 0) {
    const table = document.createElement("table");
    const headerRow = table.insertRow(0);
    const headerCell = headerRow.insertCell(0);
    headerCell.textContent =
      "Liste des nombres divisible par " +
      nombre +
      " entre " +
      debut +
      " et " +
      fin +
      ".";
    headerCell.colSpan = 2;

    for (let i = 0; i < resultat.length; i++) {
      const row = table.insertRow(i + 1);
      const cell = row.insertCell(0);

      cell.textContent = resultat[i];
    }

    resultatDiv.appendChild(table);
    resultatDiv.style.display = "block";
    resultatDiv.classList.remove("no-result");
    form.style.display = "none";
  } else {
    resultatDiv.textContent =
      "Pas de nombre divisible par " +
      nombre +
      " entre " +
      debut +
      " et " +
      fin +
      ".";
    resultatDiv.style.display = "block";
    resultatDiv.classList.add("no-result");
  }
}

//   headerCell.textContent = "Liste des nombres divisible par " + nombre + " entre " + debut + " et " + fin + ".";
