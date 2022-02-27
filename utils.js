let utils;

export default utils = {
  async wait(timeInMs) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, timeInMs);
    });
  },
};
