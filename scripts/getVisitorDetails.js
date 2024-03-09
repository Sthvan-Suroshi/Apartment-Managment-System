async function getVisitorDetails() {
  const residentId = document.getElementById("residentId").value;

  try {
    const response = await fetch(
      `http://localhost:3000/visitorDetails/${residentId}`
    );
    if (!response.ok) {
      throw new Error("Error fetching visitor details");
    }
    const data = await response.json();

    const visitorDetailsTable = document.getElementById("visitorDetailsTable");
    const visitorDetailsBody = document.getElementById("visitorDetailsBody");
    visitorDetailsBody.innerHTML = "";

    if (data.length === 0) {
      visitorDetailsBody.innerHTML =
        "<tr><td colspan='5'>No visitors found for the specified resident ID</td></tr>";
    } else {
      data.forEach((visitorDetail) => {
        const row = visitorDetailsBody.insertRow();
        row.insertCell(0).textContent = visitorDetail.visitor_name;
        row.insertCell(1).textContent = visitorDetail.apartment_number;
        row.insertCell(2).textContent = visitorDetail.contact_number;
        row.insertCell(3).textContent = visitorDetail.visit_date;
        row.insertCell(4).textContent = visitorDetail.reason_for_visit; // Display reason_for_visit
      });

      visitorDetailsTable.style.display = "table";
    }
  } catch (error) {
    console.error("Error:", error);
    const visitorDetailsBody = document.getElementById("visitorDetailsBody");
    visitorDetailsBody.innerHTML =
      "<tr><td colspan='5'>Error fetching visitor details</td></tr>";
  }
}

function show() {
  var hidden = document.querySelector(".hidden");
  var span = document.querySelector("#section2 p span");
  if (hidden.style.display === "none") {
    hidden.style.display = "block";
    span.textContent = "Close Details";
  } else {
    span.textContent = "Click Here";
    hidden.style.display = "none";
  }
}

function show1() {
  var hidden2 = document.querySelector(".hidden2");
  var span2 = document.querySelector("#section4 p span");
  if (hidden2.style.display === "none") {
    hidden2.style.display = "block";
    span2.textContent = "Close Details";
  } else {
    span2.textContent = "Click Here";
    hidden2.style.display = "none";
  }
}