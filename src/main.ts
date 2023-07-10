import './style.css'

const yourFile = document.getElementById("your-file")
const newFile = document.getElementById("new-file")

const compareButton = document.getElementById("compare")
compareButton?.addEventListener("click", () => {
  var yfile = yourFile.files[0]
  var nfile = newFile.files[0]

  console.log(yfile)
  console.log(nfile)
})
