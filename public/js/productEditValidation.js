window.addEventListener("load", function () {
  let form = document.querySelector("form.editForm");
  form.addEventListener("submit", function (e) {
    let errors = [];

    let fieldName = document.getElementById("title");
    console.log(fieldName);
    if (fieldName.value == "") {
      errors.push("El campo nombre se encuentra vacío");
    } else if (fieldName.value.length < 5) {
      errors.push("El campo nombre debe tener mas de 5 caracteres");
    }
    let fieldDescription = document.getElementById("description");
    console.log(fieldDescription);
    if (fieldDescription.value == "") {
      errors.push("El campo descripción se encuentra vacio");
    } else if (fieldDescription.value.length < 20) {
      errors.push("El campo descripción debe tener mas de 20 caracteres");
    }
    if (errors.length > 0) {
      e.preventDefault();
      let ulErrors = document.querySelector("div.errors ul");
      for (let i = 0; i < errors.length; i++) {
        ulErrors.innerHTML += "<li>" + errors[i] + "</li>";
      }
    }
  });
});
