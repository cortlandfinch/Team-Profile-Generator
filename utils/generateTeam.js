// use empty array for chosen team profile to be placed in
const createHTML = [];
// function for Manager HTML input
const createManager = manager => {
    var managerCard = /*html*/ `
        <div class="panel active" style="background-image: url(./imgs/manager.jpeg);">
        <h3 class="title">Manager: ${manager.name}</h3>
        <p>ID: ${manager.id}<br>Email: <span id="email"><a href="mailto:${manager.email}">${manager.email}</a></span><br> Office: ${manager.officeNumber}</p>
        </div>
    `;
    createHTML.push(managerCard);
}

const createEngineeer = engineer => {
    var engineer = /*html*/ `
        <div class="panel" style="background-image: url(./imgs/engineer.jpeg);">
        <h3 class="title">Engineer: ${engineer.name}</h3>
        <p>ID: ${engineer.id}<br>Email: <span id="email"><a href="mailto:${engineer.email}">${engineer.email}</a></span><br> GitHub: ${engineer.gitHub}</p>
        </div> 
    `;
    createHTML.push(engineerCard);
}

const createIntern = intern => {
    var internCard = /*html*/ `
        <div class="panel" style="background-image: url(./imgs/intern.jpeg);">
        <h3 class="title">Intern: </h3>
        <p>ID: ${intern.id}<br>Email: <span id="email"><a href="mailto:${intern.email}">${intern.email}</a></span><br> School: ${intern.school}</p>
        </div>
    `;
    createHTML.push(internCard)
}