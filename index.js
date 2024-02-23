const handleSubmit = (event) => {
  const formData = new FormData(formElement, event.submitter);
  wrapper.dataset.form = "false";
  successWrapper.dataset.success = "true";
  mailSpan.textContent = formData.get("email");
  event.preventDefault();
};

const reset = () => {
    wrapper.dataset.form = "true";
    successWrapper.dataset.success = "false";
    formElement.reset()
}

const formElement = document.getElementById("newsletter-form");
const wrapper = document.querySelector(".wrapper");
const successWrapper = document.querySelector(".success-wrapper");
const mailSpan = document.getElementById("email");
const dismissButton = document.getElementById("dismiss")

formElement.addEventListener("submit", handleSubmit);
dismissButton.addEventListener("click", reset)
