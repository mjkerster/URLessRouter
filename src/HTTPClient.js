function HTTPClient() {}

HTTPClient.prototype.get = function httpGet(aUrl, callback) {
  const anHttpRequest = new XMLHttpRequest();

  anHttpRequest.onreadystatechange = function stateChange() {
    if (anHttpRequest.readyState === 4 && anHttpRequest.status === 200) {
      callback(anHttpRequest.responseText);
    }
  };

  anHttpRequest.open('GET', aUrl, true);
  anHttpRequest.send(null);
};

module.exports = HTTPClient;
