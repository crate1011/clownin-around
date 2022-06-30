import { Requests } from "./Requests.js"
import { ServiceForm } from "./ServiceForm.js"

export const theClowns = () => {
    return `
        <h1 class="buttons">Buttons & Lollipops Clown Service</h1>
        <section class="serviceForm">
        ${ServiceForm()}
        </section>

        <section class="serviceRequests">
            <h2>Service Requests</h2>
            ${Requests()}
        </section>
    `
}