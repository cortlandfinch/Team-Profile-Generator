// use empty array for chosen team profile to be placed in
const createHTML = [];
// function for Manager HTML input
const createManager = manager => {
    let managerCard = /*html*/ `
        <div class="panel active" style="background-image: url(./imgs/manager.jpeg);">
        <h3 class="title">Manager: ${manager.name}</h3>
        <p>ID: ${manager.id}<br>Email: ${manager.email}<br> Office: ${manager.officeNumber}</p>
        </div>
    `;
    createHTML.push(managerCard);
}

const createEngineeer = engineer => {
    let engineer = /*html*/ `
        <div class="panel" style="background-image: url(./imgs/engineer.jpeg);">
        <h3 class="title">Engineer: ${engineer.name}</h3>
        <p>ID: <br>Email: <br> GitHub: </p>
        </div> 
    `;
    createHTML.push(engineerCard);
}