import './style.css'

const yourFileElement = document.getElementById("your-file")
const newFileElement = document.getElementById("new-file")

function fileValidation(file) {
    if (!file) {
        throw new Error("No file selected")
    }
    if (file.type !== "text/csv") {
        throw new Error("Input a csv file")
    }
}

const compareButton = document.getElementById("compare")
compareButton?.addEventListener("click", () => {

    const yourFile = yourFileElement?.files[0]
    const newFile = newFileElement?.files[0]

    fileValidation(yourFile)
    fileValidation(newFile)
})
