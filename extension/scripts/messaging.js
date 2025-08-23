function sendMessageToBackground(action, payload, callback) {
  chrome.runtime.sendMessage({ action, ...payload }, callback);
}

function checkIfVideoSaved(callback) {
  sendMessageToBackground("check_video", {}, (response) => {
    callback(response?.exists || false);
  });
}
