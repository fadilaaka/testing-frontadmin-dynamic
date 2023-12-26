fetch("http://localhost:5000/api/v1/getcontent")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    document.getElementById("aboutcontent").textContent = data.about;
    document.getElementById("servicecontent").textContent = data.service;
    document.getElementById("whyuscontent").textContent = data.whyus;
    document.getElementById(
      "imagecontent"
    ).src = `http://localhost:5000/images${data.image}`;
  })
  .catch((error) => {
    console.log(error);
  });
