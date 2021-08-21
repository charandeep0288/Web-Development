let allFilters = document.querySelectorAll(".filter div");
let addbtn = document.querySelector(".add");
let grid = document.querySelector(".grid");
let body = document.querySelector("body");

let uid = new ShortUniqueId(); // short unique id

// object => colors
let colors = {
    pink: "#d595aa",
    blue: "#5ecdde",
    green: "#91e6c7",
    black: "black",
};

let colorClasses = ["pink", "blue", "green", "black"];

let deleteState = false; // delete btn ki by default state false
let deleteBtn = document.querySelector(".delete");
let modelVisible = false; //state false intially model visible nahi hai

// delete btn pai click kia tho color changed hi raha delete btn kaa
deleteBtn.addEventListener("click", function (e) { // delete state toggle hoo rahi hai

    if (deleteState) {
        deleteState = false;
        e.currentTarget.classList.remove("delete-state");
    }
    else if (!deleteState && !modelVisible) {
        deleteState = true;
        e.currentTarget.classList.add("delete-state");
    }
});

// checking if local storage mai kuch save hai kia,
// initialisation step
if (!localStorage.getItem("tasks")) { // agar tasks name ki empty array padhri hai ki nahi local storage mai, agar nahi tho empty array create kar doo 
    localStorage.setItem("tasks", JSON.stringify([]));
    localStorage.setItem("deletedTasks", JSON.stringify([]));
}



addbtn.addEventListener("click", function (e) {
    if (modelVisible) { // model visible true hai tho return
        return;

    }
    // check if delete state pai click hai tho nahi, agar clicked hai delete btn pai & hum add btn pai click karta hai tho delete btn se click haat jai   
    // good practice
    if (deleteBtn.classList.contains("delete-state")) {
        deleteState = false;
        deleteBtn.classList.remove("delete-state");
    }


    let modal = document.createElement("div");
    modal.classList.add("model-container"); // div ki class="model-container" set kar de
    modal.setAttribute("click-first", true);
    modal.innerHTML = `<div class="writting-area-container" data-placeholder="Enter Your Task" contenteditable="">Enter The Task</div>
    <div class="filter-area-container">
        <div class="model-filter pink"></div>
        <div class="model-filter blue"></div>
        <div class="model-filter green"></div>
        <div class="model-filter black active-modal-filter"></div>
    </div>`; // .innerHTML => kisi element ka andar ka data access kar sakta hai and change kar sakta hai


    let allModalFilter = modal.querySelectorAll(".model-filter");

    for (let i = 0; i < allModalFilter.length; i++) {
        allModalFilter[i].addEventListener("click", function (e) {
            for (let j = 0; j < allModalFilter.length; j++) {
                allModalFilter[j].classList.remove("active-modal-filter");
            }
            e.currentTarget.classList.add("active-modal-filter");
        });
    }


    let wa = modal.querySelector(".writting-area-container"); // writting area
    wa.addEventListener("click", function (e) {
        if (modal.getAttribute("click-first") == "true") {
            wa.innerHTML = "";
            modal.setAttribute("click-first", false);
        }
    });

    wa.addEventListener("keypress", function (e) {
        if (e.key == "Shift") {
            console.log("Enter");
        }
        else if (e.key == "Enter") {
            let task = e.currentTarget.innerText;
            let selectedModalFilter = document.querySelector(".active-modal-filter");
            let color = selectedModalFilter.classList[1];
            // let colorCode = colors[color];
            // console.log(colorCode);
            // console.log(task);

            let ticket = document.createElement("div");
            let id = uid();
            ticket.classList.add("ticket");
            ticket.innerHTML = `<div class="ticket-color ${color}" ></div>
            <div class="ticket-id"> #${id}
            </div>
            <div class="ticket-box" contenteditable="">
            ${task}
            </div>`;

            saveTicketInlocalStorage(id, color, task);

            // ticket writting area
            let ticketWrittingArea = ticket.querySelector(".ticket-box");

            // ticket writting area mai kuch likh raha hai tho local storage mai save hoo
            ticketWrittingArea.addEventListener("input", ticketWrittingAreaHandler);

            // ticket pai click karna pai usa delete kar raha hai
            ticket.addEventListener("click", function (e) {
                if (deleteState) {
                    let id = e.currentTarget.querySelector(".ticket-id").innerText.split("#")[1];
                    let color = e.currentTarget.querySelector(".ticket-color").classList[1];
                    let task = e.currentTarget.querySelector(".ticket-box").innerText;

                    let tasksArr = JSON.parse(localStorage.getItem("tasks"));

                    //filter() fn =>  gives arr in which this "id" varible mai joo ik id vali ticket hai uska alawa sara tickets daa dai
                    tasksArr = tasksArr.filter(function (el) {
                        return el.id != id;
                    });

                    localStorage.setItem("tasks", JSON.stringify(tasksArr));

                    // storing data in another array (like Recycle bin)
                    let requiredObj = { id, color, task };
                    let deletedTasksArr = JSON.parse(localStorage.getItem("deletedTasks")); // getting array of stored tasks in local storage
                    deletedTasksArr.push(requiredObj);
                    localStorage.setItem("deletedTasks", JSON.stringify(deletedTasksArr));

                    // removing cuurent ticket
                    e.currentTarget.remove();
                }

            });

            // ticket on grid ka color vala div pai click karna pai color change kara raha hai usaka
            // ticket kaa color class koo nikal raha hai
            let ticketColorDiv = ticket.querySelector(".ticket-color");
            ticketColorDiv.addEventListener("click", ticketColorHandler);

            grid.appendChild(ticket);
            modal.remove();
            modelVisible = false; // model ko remove karna ke baad uski state ko wapis false karna hoo ga 
        }
    });

    body.appendChild(modal); // body ke child(div) mai dal raha hai
    modelVisible = true;
});

for (let i = 0; i < allFilters.length; i++) {
    allFilters[i].addEventListener("click", function (e) {
        // e.currentTarget => element mila 
        // .classList => list mali element ki 
        //  console.log(e.currentTarget.classList[0]); // black-color-btn, class mil rahi hai joo color button pai click kar raha hai
        let color = e.currentTarget.classList[0].split("-")[0];
        // console.log(color); 
        grid.style.backgroundColor = colors[color];
        // console.log(colors[color]); // print hexadecimal value of that colour
    });
}

function saveTicketInlocalStorage(id, color, task) {
    let requiredObj = { id, color, task };
    // array ko stringy karka store kia hua hai & uss array koo use karna kaa lia wapis array mai convert kar raha hai using JSON.parse()
    let tasksArr = JSON.parse(localStorage.getItem("tasks")); // getting array of stored tasks in local storage
    tasksArr.push(requiredObj);
    // array yaa object koo string mai convert kia hai using JSON.stringify()
    localStorage.setItem("tasks", JSON.stringify(tasksArr));
}

// joo bhi tasks array local storage mai data store karka bhati hia usa grid pai display kara gaa
// sara event linsetener vala fn bhi chahia idar
function loadTasks() {
    let tasksArr = JSON.parse(localStorage.getItem("tasks"));

}


function ticketColorHandler(e) {
    // let colorClasses = ["pink", "blue", "green", "black"]; // top pai yaa array likha hua hai 


    // store new ticket color which we select in local storage
    let id = e.currentTarget.parentElement.querySelector(".ticket-id").innerText.split("#")[1];

    let tasksArr = JSON.parse(localStorage.getItem("tasks"));
    let reqIndex = -1;
    for (let i = 0; i < tasksArr.length; i++) {
        if (tasksArr[i].id == id) {
            reqIndex = i;
            break;
        }
    }

    // -----------------------------------------
    let currColor = e.currentTarget.classList[1]; // color nikal raha hia class mai se jiski vaja se iss div koo color mil raha hai

    // colorClasses <= array
    let index = colorClasses.indexOf(currColor);
    index++;
    index = index % 4; // iski help se circular way mai move kar pai gia array(colorClasses) mai
    e.currentTarget.classList.remove(currColor); // current color of ticket in grid ko remove kia 
    e.currentTarget.classList.add(colorClasses[index]); // new color koo add kar dia ticket mai of grid

    // store current color priority in local storage
    tasksArr[reqIndex].color = colorClasses[index];
    localStorage.setItem("tasks", JSON.stringify(tasksArr));

}

function ticketWrittingAreaHandler(e) {
    // console.log(123);
    // e.cuurentTarget => ticketWrittingArea mila gaa and iska parent ticket hai, fir uspa class="ticket-id" nikali, fir inner text pai split kia hai "#" ka bases pai aur split function joo value return array ka first index ka data chahia
    let id = e.currentTarget.parentElement.querySelector(".ticket-id").innerText.split("#")[1];
    // console.log(id); // print id of that ticket

    let tasksArr = JSON.parse(localStorage.getItem("tasks"));
    let reqIndex = -1;
    for (let i = 0; i < tasksArr.length; i++) {
        if (tasksArr[i].id == id) {
            reqIndex = i;
            break;
        }
    }

    tasksArr[reqIndex].task = e.currentTarget.innerText;
    localStorage.setItem("tasks", JSON.stringify(tasksArr));
}

function loadTasks() {
    // JS run on reload & refresh of the page on browser
    console.log("Tasks are loaded");

    let tasks = JSON.parse(localStorage.getItem("tasks"));

    for (let i = 0; i < tasks.length; i++) {
        let id = tasks[i].id;
        let color = tasks[i].color;
        let taskValue = tasks[i].task;

        let ticket = document.createElement("div");
        ticket.classList.add("ticket");
        ticket.innerHTML = `<div class="ticket-color ${color}" ></div>
        <div class="ticket-id"> #${id}
        </div>
        <div class="ticket-box" contenteditable="">
        ${taskValue}
        </div>`;

        // ticket writting area
        let ticketWrittingArea = ticket.querySelector(".ticket-box");

        // ticket writting area mai kuch likh raha hai tho local storage mai save hoo
        ticketWrittingArea.addEventListener("input", ticketWrittingAreaHandler);

        let ticketColorDiv = ticket.querySelector(".ticket-color");
        ticketColorDiv.addEventListener("click", ticketColorHandler);

        // ticket pai click karna pai usa delete kar raha hai
        ticket.addEventListener("click", function (e) {
            if (deleteState) {
                let id = e.currentTarget.querySelector(".ticket-id").innerText.split("#")[1];
                let color = e.currentTarget.querySelector(".ticket-color").classList[1];
                let task = e.currentTarget.querySelector(".ticket-box").innerText;

                let tasksArr = JSON.parse(localStorage.getItem("tasks"));

                //filter() fn =>  gives arr in which this "id" varible mai joo ik id vali ticket hai uska alawa sara tickets daa dai
                tasksArr = tasksArr.filter(function (el) {
                    return el.id != id;
                });

                localStorage.setItem("tasks", JSON.stringify(tasksArr));

                // storing data in another array (like Recycle bin)
                let requiredObj = { id, color, task };
                let deletedTasksArr = JSON.parse(localStorage.getItem("deletedTasks")); // getting array of stored tasks in local storage
                deletedTasksArr.push(requiredObj);
                localStorage.setItem("deletedTasks", JSON.stringify(deletedTasksArr));

                // removing cuurent ticket
                e.currentTarget.remove();
            }

        });
        grid.appendChild(ticket);
    }
}

loadTasks();