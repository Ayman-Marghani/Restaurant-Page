export default function createDomElem(elemType, elemClass, parentElem, textContent = "") {
  const childElem = document.createElement(elemType);
  childElem.classList.add(elemClass);
  childElem.textContent = textContent;
  parentElem.appendChild(childElem);
  return childElem;
}