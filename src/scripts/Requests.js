import { getRequests, getClowns, saveCompletion } from "./dataAccess.js"

export const Requests = () => {
    const requests = getRequests()

    const htmlrequests = (request) => {
        const clowns = getClowns()
        return `<li class="request">${request.parentName} has booked a party for ${request.childName} at ${request.address} for ${request.partyLength} hours, with a total of ${request.childAmount} children.</li>
    <button class="request__delete"
                id="request--${request.id}">
            Deny
        </button>
       
        <select class="clowns" id="clowns">
    <option value="">Choose</option>
    ${clowns.map(
            clown => {
                return `<option value="${request.id}--${clown.id}">${clown.name}</option>`
            }
        ).join("")
            }
</select>`
    }
    let html = `
        <ul>
            ${requests.map(htmlrequests).join("")
        }
        </ul>
    `
    return html

}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "clowns") {
            const [requestId, clownId] = event.target.value.split("--")

            /*
                This object should have 3 properties
                   1. requestId
                   2. plumberId
                   3. date_created
            */
            const completion = {
                requestId: parseInt(requestId),
                clownId: parseInt(clownId),
                date_created: Date.now(),
                
            }

            /*
                Invoke the function that performs the POST request
                to the `completions` resource for your API. Send the
                completion object as a parameter.
             */
            saveCompletion(completion)

        }
    }
)