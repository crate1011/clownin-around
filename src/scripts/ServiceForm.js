import { sendRequest } from "./dataAccess.js"

export const ServiceForm = () => {
    let html = `
        <div class="field">
            <label class="label" for="parentsName">Parents Name</label>
            <input type="text" name="parentsName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="childsName">Childs Name</label>
            <input type="text" name="childsName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="childAmount">Amount Of Children</label>
            <input type="number" name="childAmount" class="input" />
        </div>
        <div class="field">
            <label class="label" for="serviceAddress">Party Address</label>
            <input type="text" name="serviceAddress" class="input" />
        </div>
        <div class="field">
            <label class="label" for="serviceDate">Date needed</label>
            <input type="date" name="serviceDate" class="input" />
        </div>
        <div class="field">
            <label class="label" for="serviceLengthe">Party Length</label>
            <input type="number" name="serviceLength" class="input" />
        </div>

        <button class="button" id="submitRequest">Submit Request</button>
    `

    return html
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitRequest") {
        // Get what the user typed into the form fields
        const userName = document.querySelector("input[name='parentsName']").value
        const userChildName = document.querySelector("input[name='childsName']").value
        const userChildAmount = document.querySelector("input[name='childAmount']").value
        const userAddress = document.querySelector("input[name='serviceAddress']").value
        const userDate = document.querySelector("input[name='serviceDate']").value
        const userLength = document.querySelector("input[name='serviceLength']").value

        // Make an object out of the user input
        const dataToSendToAPI = {
            parentName: userName,
            childName: userChildName,
            childAmount: userChildAmount,
            address: userAddress,
            partyDate: userDate,
            partyLength: userLength
        }

        // Send the data to the API for permanent storage
        sendRequest(dataToSendToAPI)
    }
})