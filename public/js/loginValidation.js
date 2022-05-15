window.addEventListener("load", function () {
  let formulario = document.getElementById("userForm");
  console.log(formulario);
  formulario.addEventListener("submit", function (e) {
    let errors = [];
    let emailInput = document.getElementById("email");
    let passInput = document.getElementById("password");

    const isEmailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailInput.value.trim() == "") {
      errors.push("El campo email se encuentra vacío");
    } else if (!isEmailFormat.test(emailInput.value)) {
      errors.push("Debe ser un email válido");
    }

    if (passInput.value.trim() == "") {
      errors.push("Debe ingresar una contraseña");
    } else if (passInput.value.length < 2) {
      errors.push("La contraseña debe tener más de 2 caracteres");
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
