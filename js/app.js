const formEl = document.querySelector("form")
const inputName = document.querySelector(".sign__inp")
const inputEmail = document.querySelector(".sign__inp2")
const inputPhone = document.querySelector(".sign__inp1")
const inputMessage = document.querySelector(".sign__inp3")
const tbodyEl = document.querySelector(".table tbody")


const data = []

formEl.addEventListener("submit", (event) => {
    event.preventDefault()
    let user = {
        id: 1,
        name: inputName.value,
        email: inputEmail.value,
        phone: inputPhone.value,
        message: inputMessage.value
    }
    data.push(user)
    tableRowData(data)
    inputName.value = ""
    inputEmail.value = ""
    inputPhone.value = ""
    inputMessage.value = ""
})

function tableRowData(data) {
    tbodyEl.innerHTML = null;

    data.forEach((item, index) => {
        const trEl = document.createElement("tr")
        trEl.innerHTML = `
                    <td>${index + 1}</td>
                    <td>${item.name}</td>
                    <td>${item.email}</td>
                    <td>${item.phone}</td>
                    <td>${item.message}</td>
        `
        tbodyEl.appendChild(trEl)

    });

}
