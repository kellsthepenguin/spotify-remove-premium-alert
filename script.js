/* chrome.runtime.onMessage.addListener((msg, _sender, sendResponse) => {
  if (msg.text === 'delete_alert') {
    sendResponse(document.querySelector('.GenericModal__overlay'))
  }
}) */

const observer = setInterval(() => {
  const target = document.getElementsByClassName('GenericModal__overlay')[0]

  if (!target) {
    return
  }
  target.remove()
  clearInterval(observer)
}, 1)
