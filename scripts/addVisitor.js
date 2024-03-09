function addVisitor() {
  const visitor_name = document.getElementById("visitor_name").value;
  const apartment_number = document.getElementById("apartment_number").value;
  const contact_number = document.getElementById("contact_number").value;
  const visit_date = document.getElementById("visit_date").value;
  const resident_id = document.getElementById("resident_id").value;
  const reason_for_visit = document.getElementById("reason_for_visit").value;

  const data = {
    visitor_name,
    apartment_number,
    contact_number,
    visit_date,
    resident_id,
    reason_for_visit,
  };

  fetch("http://localhost:3000/addVisitor", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error adding visitor");
      }
      return response.text();
    })
    .then((data) => {
      console.log(data);
      alert("Visitor added successfully!");
      // You can redirect or perform additional actions here
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Error adding visitor");
    });
}
