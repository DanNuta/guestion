import { data } from "./data.js";


let autodeterminare = 0;
let universalism = 0;
let bunavointa = 0;
let conformitate = 0;
let traditie = 0;
let securitate = 0;
let putere = 0;
let realizare = 0;
let hedonism = 0;
let stimulare = 0;



const question = document.querySelector("[data-question]");

data.forEach((item, i) => {
    const q = document.createElement("div");
    q.classList.add("question_test")
    const h1 = document.createElement("h1");
    const inputDiv = document.createElement("div");
    inputDiv.classList.add("input_radio")
    h1.textContent = `${i+1}. ${item.question}`;

    item.answer.forEach((answer, index) => {
        const uuid = crypto.randomUUID();
        const radionInput = document.createElement("input");
        const label = document.createElement("label");
        const divInputRadio = document.createElement("div");
        divInputRadio.dataset.category = item.category;

        label.textContent = answer.ans;
        label.htmlFor  = uuid;
        label.dataset.score = `${answer.score}`;

        radionInput.id = uuid;
        radionInput.type = "radio";
        radionInput.name = "psihologie"
        radionInput.value = `${answer.ans}`;

        divInputRadio.append(radionInput);
        divInputRadio.append(label);
        inputDiv.append(divInputRadio)

        divInputRadio.addEventListener("click", selectAnswer)


    })

    q.appendChild(h1);
    q.append(inputDiv)
    question.append(q);
})


function selectAnswer(e){
    const target = e.target.parentElement;
    const value = target.dataset.category;
    const score = Number(target.querySelector("[data-score]").dataset.score);

    if(value === undefined) return
    

    switch(value){
        case "Autodeterminare":
            let scoreTotal = score;
            autodeterminare = score;
            break;
         case "Universalism":
            break;   
    }

    console.log(autodeterminare)

}
