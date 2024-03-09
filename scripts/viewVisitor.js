document.addEventListener("DOMContentLoaded", function () {
  fetch("http://localhost:3000/visitors")
    .then((response) => response.json())
    .then((visitors) => {
      const visitorsTable = document.getElementById("visitorsTable");
      const visitorsBody = document.getElementById("visitorsBody");

      visitors.forEach((visitor) => {
        const row = visitorsBody.insertRow();
        row.insertCell(0).textContent = visitor.visitor_name;
        row.insertCell(1).textContent = visitor.apartment_number;
        row.insertCell(2).textContent = visitor.contact_number;
        row.insertCell(3).textContent = visitor.visit_date;
        row.insertCell(4).textContent = visitor.reason_for_visit; // Include reason_for_visit
      });

      visitorsTable.style.display = "table";
    })
    .catch((error) => {
      console.error("Error fetching visitors:", error);
      document.getElementById("visitorsBody").innerHTML =
        "<tr><td colspan='5'>Error fetching visitors</td></tr>";
    });
});
