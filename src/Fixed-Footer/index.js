const fillData = (number, value) => {
    const data = []
    for (let i = 0; i < number; i++) {
        data.push(value)
    }
    return data
}

const containerEl1 = document.getElementById("container1")
const myData = fillData(50, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsa maiores eveniet officia velit recusandae ut tempore ipsum. Qui ab dolor in temporibus eum dicta nesciunt ratione illo ex cum?")

const renderHTML = (items) => {
    return items.map(item => `<p>${item}</p>`).join("")
}
console.log(renderHTML(myData))
containerEl1.innerHTML = renderHTML(myData)

const footerTextEl = document.getElementById("footer-text")
footerTextEl.textContent = `Xubuntu Copyright ${new Date().getFullYear()}`

