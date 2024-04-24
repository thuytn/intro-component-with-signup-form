const form = document.querySelector(".form")
const inputs = document.querySelectorAll(".form__input")
const emailInput = document.querySelector("#email")

// Functions
const showError = (input, message) => {
  let parent = input.parentElement
  let errorIcon = input.nextElementSibling
  let errorMsg = parent.nextElementSibling
  parent.classList.add("error")
  errorIcon.style.visibility = "visible"
  errorMsg.textContent = message
  input.style.color = "red"
} 

const showNormal = (input) => {
  let parent = input.parentElement
  let errorIcon = input.nextElementSibling
  let errorMsg = parent.nextElementSibling
  parent.classList.remove("error")
  errorIcon.style.visibility = "hidden"
  errorMsg.textContent = ""
  input.style.color = "hsl(249, 10%, 26%)"
}

const formValidate = (inputs) => {
  let isValid = true
  let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
  let isEmail = emailRegex.test(inputs[2].value.trim())
  if (!isEmail) {
    showError(inputs[2], "Looks like this is not an email")
    isValid = false
  }
  inputs.forEach(input => {
    if (input.value.trim() == "") {
      showError(input, `${input.name} cannot be empty`)
      isValid = false
    }
  })
  return isValid
}

// Events
form.addEventListener("submit", (e) => {
  e.preventDefault()
  if (formValidate(inputs)) {
    form.reset()
    alert("Success")
  }
})

inputs.forEach(input => {
  input.addEventListener("keydown", () => {
    showNormal(input)
  })
})

window.addEventListener("DOMContentLoaded", () => {
  form.reset()
})
