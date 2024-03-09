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
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Successfully adding resident");
    });
}
