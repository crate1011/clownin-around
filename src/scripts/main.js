import { fetchRequests } from "./dataAccess.js"
import { theClowns } from "./clowninAround.js"
import { deleteRequest } from "./dataAccess.js"
import { fetchClowns } from "./dataAccess.js"
const mainContainer = document.querySelector("#container")

const render = () => {
    fetchRequests()
        .then(() => fetchClowns())
        .then(
            () => {
                mainContainer.innerHTML = theClowns()
            }
        )
}

render()

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [,requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})