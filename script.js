

let myForm = document.querySelector("form");
let inputs = document.querySelectorAll("input");
let main = document.getElementById("main");
let area = document.querySelector("textarea");


myForm.addEventListener("submit" , function(data){
    data.preventDefault();
    
    let card = document.createElement("div");
    card.setAttribute("id" , "card");

    let pic = document.createElement("div");
    pic.classList.add("pic");

    let img = document.createElement("img");
    img.setAttribute("src" , inputs[0].value );

    let h3 = document.createElement("h3");
    h3.textContent = inputs[1].value;

    let h4 = document.createElement("h4");
    h4.textContent = inputs[2].value;
    
    let p = document.createElement("p");
    p.textContent = inputs[3].value;

    let span = document.createElement("span");
    span.textContent = area.value;

    pic.appendChild(img);
    card.appendChild(pic);
    card.appendChild(h3);
    card.appendChild(h4);
    card.appendChild(p);
    card.appendChild(span);

    main.appendChild(card);





});
