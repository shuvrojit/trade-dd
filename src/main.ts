import './style.css'
import Papa from "papaparse"

const YOURDATA = []

function fileValidation(file) {
    if (!file) {
        throw new Error("No file selected")
    }
}

function getData(file) {
    const reader = new FileReader()
    reader.onload = (e) => {
        const csvData = e.target.result
        const parsedData = Papa.parse(csvData, { header: true })
        for (let i in parsedData) {
           YOURDATA.push(parsedData[i])
        }
    }
    reader.readAsText(file)
}



const yourFileElement = document.getElementById("your-file")
const newFileElement = document.getElementById("new-file")
const compareButton = document.getElementById("compare")
compareButton?.addEventListener("click", () => {

    const yourFile = yourFileElement?.files[0]
    const newFile = newFileElement?.files[0]

    fileValidation(yourFile)
    fileValidation(newFile)
    getData(yourFile)
    getData(newFile)
    console.log(YOURDATA[0])
    console.log(YOURDATA[3])

})
