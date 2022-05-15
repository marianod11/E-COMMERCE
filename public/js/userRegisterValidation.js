window.addEventListener("load", function () {
  let form = document.getElementById("userForm");
  form.addEventListener("submit", function (e) {
    let errors = [];

    let fieldName = document.getElementById("name");
    console.log(fieldName);
    if (fieldName.value.trim() == "") {
      errors.push("El campo nombre se encuentra vacío");
    } else if (fieldName.value.length < 2) {
      errors.push("El campo nombre debe tener mas de 2 caracteres");
    }
    let fieldLastName = document.getElementById("lastname");

    if (fieldLastName.value.trim() == "") {
      errors.push("El campo apellido se encuentra vacío");
    } else if (fieldLastName.value.length < 2) {
      errors.push("El campo apellido debe tener mas de 2 caracteres");
    }
    let fieldPassword = document.getElementById("password");

    if (fieldPassword.value.trim() == "") {
      errors.push("Debe ingresar una contraseña");
    } else if (fieldPassword.value.length < 2) {
      errors.push("El campo apellido debe tener mas de 2 caracteres");
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
