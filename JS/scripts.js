// Seleção de elementos
const multiplicationForm = document.querySelector("#multiplication-form");
const numberInput = document.querySelector("#number");
const multiplicatorInput = document.querySelector("#multiplicator");
const multiplicationTitle = document.querySelector("#multiplication-title span");
const multiplicationTable = document.querySelector("#multiplication-operations");

// Funções
const createTable = (number, multiplicatorNumber) => {
    multiplicationTable.innerHTML = "";
    for (let i = 1; i <= multiplicatorNumber; i++) {
        const result = number * i;

        const template = `<div class="row">
            <div class="operation">${number} x ${i} = </div>
            <div class="result">${result}</div>
        </div>`;
        
        // Criar o elemento a partir do template
        const parser = new DOMParser();
        const htmlTemplate = parser.parseFromString(template, "text/html");
        const row = htmlTemplate.querySelector(".row");
        multiplicationTable.appendChild(row);
    }
    multiplicationTitle.innerText = number;
};

// Eventos
multiplicationForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevenir comportamento padrão do formulário

    const multiplicationNumber = +numberInput.value;
    const multiplicatorNumber = +multiplicatorInput.value;

    if (!multiplicationNumber || !multiplicatorNumber) return;

    createTable(multiplicationNumber, multiplicatorNumber);
});

