async function getVisitorCounts() {
  try {
    const response = await fetch("http://localhost:3000/visitorCounts");
    if (!response.ok) {
      throw new Error("Error fetching visitor counts");
    }
    const data = await response.json();

    const visitorCountsTable = document.getElementById("visitorCountsTable");
    const visitorCountsBody = document.getElementById("visitorCountsBody");
    visitorCountsBody.innerHTML = "";

    data.forEach((visitorCount) => {
      const row = visitorCountsBody.insertRow();
      row.insertCell(0).textContent = visitorCount.resident_id;
      row.insertCell(1).textContent = visitorCount.resident_name;
      row.insertCell(2).textContent = visitorCount.visitor_count;
    });

    visitorCountsTable.style.display = "table";
  } catch (error) {
    console.error("Error:", error);
    const visitorCountsBody = document.getElementById("visitorCountsBody");
    visitorCountsBody.innerHTML =
      "<tr><td colspan='3'>Error fetching visitor counts</td></tr>";
  }
}


