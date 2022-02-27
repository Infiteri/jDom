export default function jDom(selector) {
  const it = {
    element: document.querySelector(selector),
    onKeyDown: (key, result) => {
      it.element.addEventListener('keydown', (event) => {
        if (event.key === key) result();
      });
    },
    onClick: (result) => {
      it.element.addEventListener('click', (event) => result(event));
    },

    isAllowedToSelect: (result) => {
      if (result === 'no' || result === 'none')
        it.element.style.userSelect = 'none';
      else return;
    },
  };

  return it;
}

export function createNewElement(element, inner) {
  const el = document.createElement(element);
  el.innerHTML = inner;
  return el;
}

export const appendToDom = (el) => {
  document.body.appendChild(el);
};

export function styleOnce(el, style, type) {
  const e = document.querySelector(el);
  e.setAttribute('style', `${style}: ${type}`);
  return e;
}
