function fetchResidents() {
  fetch("http://localhost:3000/residents")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((residents) => {
      const residentsTable = document.getElementById("residentsTable");
      const residentsList = document.getElementById("residentsList");

      if (residents.length === 0) {
        const noResidentsRow = residentsTable.insertRow();
        const noResidentsCell = noResidentsRow.insertCell(0);
        noResidentsCell.textContent = "No residents found.";
      } else {
        residents.forEach((resident) => {
          const row = residentsTable.insertRow();
          row.insertCell(0).textContent = resident.name;
          row.insertCell(1).textContent = resident.apartment_number;
          row.insertCell(2).textContent = resident.contact_number;
        });
      }
    })
    .catch((error) => {
      console.error("Error fetching residents:", error);
      const residentsTable = document.getElementById("residentsTable");
      const errorRow = residentsTable.insertRow();
      const errorCell = errorRow.insertCell(0);
      errorCell.textContent =
        "Error fetching residents. Please try again later.";
    });
}

document.addEventListener("DOMContentLoaded", fetchResidents);
