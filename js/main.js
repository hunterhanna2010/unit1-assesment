var handleDOMLoad = (event) => {
  var input = document.getElementById('input')
  var count = document.getElementById('count')
  var incrementer = document.getElementById('increment')
  var decrementer = document.getElementById('decrement')
  incrementer.addEventListener('click', handleIncrementClick)
  decrementer.addEventListener('click', handleDecrementClick)
}

var handleIncrementClick = (event) => {
  event.preventDefault()
  let inputAmount = parseInt(input.value)
  let currentValue = parseInt(count.textContent)
  let newValue = currentValue + inputAmount
  checkPositivity(newValue)
  count.textContent = newValue
}

var handleDecrementClick = (event) => {
  event.preventDefault()
  let inputAmount = parseInt(input.value)
  let currentValue = parseInt(count.textContent)
  let newValue = currentValue - inputAmount
  checkPositivity(newValue)
  count.textContent = newValue
}

var checkPositivity = (value) => {
  if (value > 0) {
    count.classList.remove('zero')
    count.classList.remove('negative')
    count.classList.add('positive')
  }
  else if (value < 0) {
    count.classList.remove('zero')
    count.classList.remove('positive')
    count.classList.add('negative')
  }
  else {
    count.classList.remove('negative')
    count.classList.remove('positive')
    count.classList.add('zero')
  }
}

document.addEventListener('DOMContentLoaded', handleDOMLoad)
