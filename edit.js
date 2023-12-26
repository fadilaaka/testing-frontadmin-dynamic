// Function to populate the edit form with content details
const populateForm = (
  idcontent,
  aboutcontent,
  servicecontent,
  whyuscontent
) => {
  document.getElementById("idcontent").value = idcontent;
  document.getElementById("aboutcontent").value = aboutcontent;
  document.getElementById("servicecontent").value = servicecontent;
  document.getElementById("whyuscontent").value = whyuscontent;
};

function saveChanges() {
  const id = document.getElementById("idcontent").value;
  const aboutcontent = document.getElementById("aboutcontent").value;
  const servicecontent = document.getElementById("servicecontent").value;
  const whyuscontent = document.getElementById("whyuscontent").value;

  const data = {
    about: aboutcontent,
    service: servicecontent,
    whyus: whyuscontent,
  };

  fetch(`http://localhost:5000/api/v1/editcontent/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.ok) {
        console.log("Changes saved");
      } else {
        console.log("Failed to save");
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

window.onload = function () {
  fetch("http://localhost:5000/api/v1/getcontent")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      populateForm(
        `${data._id}`,
        `${data.about}`,
        `${data.service}`,
        `${data.whyus}`
      );
    })
    .catch((error) => {
      console.log(error);
    });
};
