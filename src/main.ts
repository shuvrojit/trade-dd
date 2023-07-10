import './style.css'

const yourFile = document.getElementById("your-file")
const newFile = document.getElementById("new-file")

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
  const yfile = yourFile.files[0]
  const nfile = newFile.files[0]

  fileTypeValidation(yfile)
  fileTypeValidation(nfile)

  console.log(yfile)
  console.log(nfile)
})
