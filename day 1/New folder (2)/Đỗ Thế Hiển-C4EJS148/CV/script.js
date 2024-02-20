const contact = document.getElementById("contact")
const send = document.getElementById("send")
const form_content = document.getElementById("content")
const form_contact = document.getElementById("form-contact")
contact.onclick = function(event) {
    event.preventDefault()
    if(form_contact.style.display == "none") {
        form_contact.style.display = "block"
        form_content.style.borderRight = "none"
    }else {
        form_contact.style.display = "none"
        form_content.style.borderRight = "3mm ridge black"
    }
}
