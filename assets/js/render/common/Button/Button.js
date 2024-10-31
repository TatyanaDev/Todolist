import { createElement } from "../../../../utils/createElement.js";

export function Button(title, onClickHandler) {
  const container = createElement("button", { class: "button", innerText: title });

  container.addEventListener("click", onClickHandler);

  return container;
}
