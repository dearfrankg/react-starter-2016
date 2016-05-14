
let observer = null
let store = {
  count: 0
}

function emitChange() {
  observer(store);
}

export function observe(o) {
  if (observer) {
    throw new Error('Multiple observers not implemented.');
  }

  observer = o;
  emitChange();
}

export const dec = () => {
  store.count--
  emitChange();
}

export const inc = () => {
  store.count++
  emitChange();
}
