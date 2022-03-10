function disableFormReload() {
  let form = document.getElementById("form_agreement");

  form.addEventListener("submit", (e) => e.preventDefault());
}

function validateInputs() {
  let form = document.getElementById("form_agreement");

  form.addEventListener(
    "focus",
    (e) => {
      e.target.style.background = "#80dfff";
    },
    true
  );

  form.addEventListener(
    "blur",
    (e) => {
      e.target.style.background = "";
    },
    true
  );

  let tel = form["tel"];
  let email = form["email"];

  tel.addEventListener("blur", (e) => {
    if (e.target.validity.valueMissing) {
      e.target.setCustomValidity("Номер телефона не может быть пустым");
      e.target.style.background = "#f03c3c";
    } else if (!e.target.value.startsWith("+7")) {
      e.target.setCustomValidity("Номер телефона должен начинаться с +7");
      e.target.style.background = "#ffd5a4";
    } else {
      e.target.setCustomValidity("");

      e.target.style.background = "";
    }
  });

  email.addEventListener("blur", (e) => {
    if (e.target.validity.valueMissing) {
      e.target.setCustomValidity("Email не может быть пустым");
      e.target.style.background = "#f03c3c";
    } else if (e.target.validity.valueMismatch) {
      e.target.setCustomValidity("Неверный email");
      e.target.style.background = "#ff5805";
    } else if (!e.target.value.includes("@")) {
      e.target.setCustomValidity("Email должен содержать '@'");
      e.target.style.background = "#ffd5a4";
    } else {
      e.target.setCustomValidity("");

      e.target.style.background = "";
    }
  });
}

function openModal() {
  let modal = document.getElementsByClassName("modal")[0];
  let background = document.getElementsByClassName("background")[0];

  modal.classList.add("modal-active");
  background.classList.add("background-active");

  document.body.classList.add("hide-scrollbar");
}

function closeModal() {
  let modal = document.getElementsByClassName("modal")[0];
  let background = document.getElementsByClassName("background")[0];

  modal.classList.remove("modal-active");
  background.classList.remove("background-active");

  document.body.classList.remove("hide-scrollbar");
}

function sendData() {
  let form = document.getElementById("form_agreement");

  let tel = form["tel"].value;
  let email = form["email"].value;
  let agreement = form["agreement"].value;
  let dataProcessing = form["dataProcessing"].value;

  let obj = {
    tel: tel,
    email: email,
    agreement: agreement,
    dataProcessing: dataProcessing,
  };

  console.table(obj);

  closeModal();
}
