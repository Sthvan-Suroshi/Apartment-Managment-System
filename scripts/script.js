// Function to add a new resident
function addResident() {
  const name = document.getElementById("name").value;
  const apartmentNumber = document.getElementById("apartmentNumber").value;
  const contactNumber = document.getElementById("contactNumber").value;

  // Create a resident object
  const resident = {
    name: name,
    apartment_number: apartmentNumber,
    contact_number: contactNumber,
  };

  // Send a POST request to the server
  fetch("http://localhost:3000/residents", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(resident),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Success:", data);
      alert("Resident added successfully");

      // Fetch and update the list of residents after adding a resident
      fetchResidents();
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Error adding resident");
    });
}

// Function to fetch and display residents
// Function to fetch and display residents
// Function to fetch and display residents
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

      // Clear existing residents from the table, including the header
      residentsTable.innerHTML = "";

      if (residents.length === 0) {
        const noResidentsRow = residentsTable.insertRow();
        const noResidentsCell = noResidentsRow.insertCell(0);
        noResidentsCell.textContent = "No residents found.";
      } else {
        // Add table headers using <th>
        const headerRow = residentsTable.insertRow();
        const headers = ["Name", "Apartment Number", "Contact Number"];

        headers.forEach((headerText) => {
          const headerCell = document.createElement("th");
          headerCell.textContent = headerText;
          headerRow.appendChild(headerCell);
        });

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
