const getDateTime = () => {
  var d = new Date(Date.now());
  return `${d.getFullYear()}-${
    d.getMonth() + 1
  }-${d.getDate()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}.${d.getMilliseconds()}`;
};

const Utils = {
  getDateTime,
};

export default Utils;
