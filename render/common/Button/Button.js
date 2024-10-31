export function Button(title, onClickHandler) {
  const btnElement = document.createElement("button");

  btnElement.innerText = title;
  btnElement.addEventListener("click", onClickHandler);

  return btnElement;
}
