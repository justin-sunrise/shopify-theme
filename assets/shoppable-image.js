function addClassToSibling(button) {
  const siblingDiv = button.nextElementSibling;
  button.classList.toggle("rotate-spot-0");
  button.classList.toggle("rotate-spot-45");
  if (siblingDiv) {
    siblingDiv.classList.toggle("show-spot-modal");
    siblingDiv.classList.toggle("hide-spot-modal");
  }
}

function closeModal(button) {
  const parentDiv = button.parentNode;
  const parentSibling = parentDiv.previousElementSibling;
  parentSibling.classList.toggle("rotate-spot-0");
  parentSibling.classList.toggle("rotate-spot-45");
  if (parentDiv) {
    parentDiv.classList.toggle("hide-spot-modal");
  }
}