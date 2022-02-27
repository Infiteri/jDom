import utils from './utils';

//KeyDown
export function onKeyDown(key, event) {
  addEventListener('keydown', (e) => {
    if (e.key === key) event();
  });
}

//KeyPress
export function onKeyPress(key, event) {
  addEventListener('keypress', (e) => {
    if (e.key === key) event();
  });
}
