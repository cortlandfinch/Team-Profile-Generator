    // use empty array for chosen team profile to be placed in
const createHTML = [];

const createNewTeam = (employeeCards) => {
    // function for Manager HTML input
    const createManager = manager => {
        return /*html*/ `
            <div class="panel active" style="background-image: url(./imgs/manager.jpeg);">
            <h3 class="title">Manager: ${manager.getName()}</h3>
            <p>ID: ${manager.getId()}<br>Email: <span id="email"><a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></span><br> Office: ${manager.getOfficeNumber()}</p>
            </div>
        `;
    }

    const createEngineeer = engineer => {
        return /*html*/ `
            <div class="panel" style="background-image: url(./imgs/engineer.jpeg);">
            <h3 class="title">Engineer: ${engineer.getName()}</h3>
            <p>ID: ${engineer.getId()}<br>Email: <span id="email"><a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></span><br> GitHub: <a href="https://github.com/${engineer.getGitHub()}" target="_blank">${engineer.getGitHub()}</a></p>
            </div> 
        `;
    }

    const createIntern = intern => {
        return /*html*/ `
            <div class="panel" style="background-image: url(./imgs/intern.jpeg);">
            <h3 class="title">Intern: ${intern.getName()}</h3>
            <p>ID: ${intern.getId()}<br>Email: <span id="email"><a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></span><br> School: ${intern.getSchool()}</p>
            </div>
        `;
    }

    createHTML.push(employeeCards.filter(employee => employee.getRole() === 'Manager').map(manager => createManager(manager)));

    createHTML.push(employeeCards.filter(employee => employee.getRole() === 'Engineer').map(engineer => createEngineeer(engineer)));

    createHTML.push(employeeCards.filter(employee => employee.getRole() === 'Intern').map(intern => createIntern(intern)));

    return createHTML.join('');
}

    module.exports = employeeCards => {
        return /*html*/ `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <!-- Link to Google Fonts -->
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400&display=swap" rel="stylesheet">
            <link rel="stylesheet" href="../dist/style.css">
            <title>Team Profile</title>
        </head>
        <header>Team Profile</header>
        <body>
            <div class="container">
                ${createNewTeam(employeeCards)}
            </div>
            <script src="../utils/generateTeam.js"></script>
            <script src="../dist/script.js"></script>
        </body>
        </html> `
    }