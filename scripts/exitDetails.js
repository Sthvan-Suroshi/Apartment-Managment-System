document.addEventListener("DOMContentLoaded", function () {
  fetch("http://localhost:3000/visitorExitDetails")
    .then((response) => response.json())
    .then((visitorExitDetails) => {
      const visitorExitDetailsTable = document.getElementById(
        "visitorExitDetailsTable"
      );
      const visitorExitDetailsBody = document.getElementById(
        "visitorExitDetailsBody"
      );

      visitorExitDetails.forEach((detail) => {
        const row = visitorExitDetailsBody.insertRow();
        row.insertCell(0).textContent = detail.visitor_id;
        row.insertCell(1).textContent = detail.visitor_name;
        row.insertCell(2).textContent = detail.exit_date;
        row.insertCell(3).textContent = detail.exit_time;
      });

      visitorExitDetailsTable.style.display = "table";
    })
    .catch((error) => {
      console.error("Error fetching visitor exit details:", error);
      document.getElementById("visitorExitDetailsBody").innerHTML =
        "<tr><td colspan='4'>Error fetching visitor exit details</td></tr>";
    });
});
