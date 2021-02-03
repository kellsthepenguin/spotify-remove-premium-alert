const observer = setInterval(() => {
  const target = document.getElementsByClassName('GenericModal__overlay')[0]

  if (!target) {
    return
  }
  target.remove()
  clearInterval(observer)
}, 1)
