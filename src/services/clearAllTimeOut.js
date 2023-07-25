export const TIMEOUTS = {
  timeouts: [],
  setTimeout: function (fn, delay) {
    const id = setTimeout(fn, delay);
    this.timeouts.push(id);
  },
  clearAllTimeouts: function () {
    while (this.timeouts.length) {
      clearTimeout(this.timeouts.pop());
    }
  },
};

TIMEOUTS.setTimeout(() => console.log("First timer"), 1000);
TIMEOUTS.setTimeout(() => console.log("Second timer"), 1000);

setTimeout(() => {
  TIMEOUTS.clearAllTimeouts();
  console.log("All timeouts Cleared!");
}, 1000);
