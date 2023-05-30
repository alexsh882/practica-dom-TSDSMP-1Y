let colorPharagrap = "default";
let pharagrap = document.getElementById("parrafo");

document.getElementById("boton").onclick = () => {
 
  switch (colorPharagrap) {
    case "purple":
      pharagrap.classList.remove('purple');
      pharagrap.classList.add("orange");
      colorPharagrap = "orange";
      break;
    case "orange":
      pharagrap.removeAttribute('class');
      colorPharagrap = 'default';
      break;

    default:
      pharagrap.classList.remove('orange');
      pharagrap.classList.add("purple");
      colorPharagrap = "purple";
      break;
  }
};
