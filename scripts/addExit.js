function addExitDetails() {
  const visitorId = document.getElementById("visitorId").value;
  const exitDate = document.getElementById("exitDate").value;
  const exitTime = document.getElementById("exitTime").value;

  const data = {
    visitor_id: visitorId,
    exit_date: exitDate,
    exit_time: exitTime,
  };

  fetch("http://localhost:3000/addExit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error adding exit details");
      }
      return response.text();
    })
    .then((data) => {
      console.log(data);
      alert("Exit details added successfully!");
      // You can redirect or perform additional actions here
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Error adding exit details");
    });
}
