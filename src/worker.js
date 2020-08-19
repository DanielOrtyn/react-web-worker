export default () => {
  // eslint-disable-next-line no-undef
  onmessage = function (e) {
    if (e && e.data && e.data.newNumber) {
      postMessage({ number: e.data.newNumber });
    } else {
      postMessage({ number: 1234 });
    }
    // eslint-disable-next-line no-restricted-globals
    close();
  }
};
