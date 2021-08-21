let body = document.querySelector("body");

body.spellcheck = false; // to remove spelling check from the whole body

let oldCell;
let dataObj = {};

let columnTags = document.querySelector(".column-tags");
let rowNumbers = document.querySelector(".row-numbers");

let formulaSelectCell = document.querySelector("#selected-cell");

let grid = document.querySelector(".grid");

let menuBarPtags = document.querySelectorAll(".menu-bar p");

for (let i = 0; i < menuBarPtags.length; i++) {
    menuBarPtags[i].addEventListener("click", function (e) {
        // case-1 (ik p-tag phala se selected hai(matlab uspa "menu-bar-option-selected" yaa vali class lagi hui hai) & hum usi p-tag pai dubara click karta hai tho usi p-tag ko de-select kar doo  )
        if (e.currentTarget.classList.contains("menu-bar-option-selected")) {
            e.currentTarget.classList.remove("menu-bar-option-selected");
        }
        // case-2 ( pahla se clicked p tag hai ik & hum koi aur p tag ko select karna jaa raha hai tho hum pichla selected p tag ko de-select kar dai gai & hum jiss p tag ko select kar raha hai usa select kar dai )
        else {
            for (let j = 0; j < menuBarPtags.length; j++) {
                //  menuBarPtags[j].addEventListener("click", function(e){
                if (menuBarPtags[j].classList.contains("menu-bar-option-selected"))
                    menuBarPtags[j].classList.remove("menu-bar-option-selected");
                // });
            }
            e.currentTarget.classList.add("menu-bar-option-selected");
        }
    });
}

// creating columns number (A to Z)
for (let i = 0; i < 26; i++) {
    let div = document.createElement("div");
    div.classList.add("column-tag-cell");
    div.innerText = String.fromCharCode(65 + i);
    columnTags.append(div);
}


// creating row Numbers (1 to 100)
for (let i = 1; i <= 100; i++) {
    let div = document.createElement("div");
    div.classList.add("row-number-cell");
    div.innerText = i;
    rowNumbers.append(div);
}


// creating grid cells (26 X 100 => 2600 cells)
for (let j = 1; j <= 100; j++) {
    let row = document.createElement("div");
    row.classList.add("row");

    // j = 1;
    // i = 0; i + 65 ==> 65(A) ==> A1
    // i = 1; i + 65 ==> 65(B) ==> B1
    // i = 2; i + 65 ==> 65(C) ==> C1


    // i = 0; i + 65 ==> 65(Z) ==> Z1

    for (let i = 0; i < 26; i++) {
        let cell = document.createElement("div"); // actual cell creation
        cell.classList.add("cell");
        let address = String.fromCharCode((i + 65) + j);
        cell.setAttribute("data-address", address);

        // storing address of each cell in dataObj (Initializtion step)
        dataObj[address] = {
            value: "",
            formula: "",
            upstream: "",
            downstream: ""
        };

        cell.addEventListener("click", function (e) {
            // check kro koi old cell hai kya pehlaise selected
            if (oldCell) {
                // gara han tho use deselect karo  class remove karke
                oldCell.classList.remove("grid-selected-cell");
            }

            // jis cell pr click kar use select kro class add krke
            e.currentTarget.classList.add("grid-selected-cell");

            let cellAddress = e.currentTarget.getAttribute("data-address");

            formulaSelectCell.value = cellAddress;

            // and ab joo naya cell select hogya use save krdo old cell wali variable taki next time agr click ho kisi nye cell pr to ise deselect kr pai
            oldCell = e.currentTarget;
        });

        cell.addEventListener("input", function (e) {
            console.log(e.currentTarget.innerText);
            let address = e.currentTarget.getAttribute("data-address");
            dataObj[address].value = Number(e.currentTarget.innerText);

            dataObj[address].formula = "";

            // upstream clear karni hai 

            let currCellUpstream = dataObj[address].upsrteam;

            for (let i = 0; i < currCellUpstream.length; i++) {
                removeFromUpstream(address, currCellUpstream[i]);
            }

            dataObj[address].upstream = [];

            // removeFromUpstream(khudKaAddress, upstream cell address);
            // removeFromUpstream(address, upstream cell address);

            // downstream ke cells ko update karna hai

            let currCellDownstream = dataObj[address].downstream;

            for (let i = 0; i < currCellDownstream.length; i++) {
                // updateDownstreamElements(element jiski value change krwani hai);
                updateDownstreamElements(element jiski value change krwani hai);
            }



            console.lof(data[address]);
        });


        cell.contentEditable = true;
        row.append(cell);
    }
    grid.append(row);
}

console.log(dataObj);




formulaInput.addEventListener("change", function (e) {
    let formula = e.currentTarget.value;

    let selectedCellAddress = oldCell.getAttribute("data=address");

    dataObj[selectedCellAddress].formula = formula;

    let formulaArr = formula.split(" ");

    let elementsArray = {};

    for (let i = 0; i < formulaArr.length; i++) {
        if (formulaArr[i] != "+" &&
            formulaArr[i] != "-" &&
            formulaArr[i] != "*" &&
            formulaArr[i] != "/" &&
            isNaN(Number(formulaArr[i]))) {
            elementsArray.push(formulaArr[i]);
        }
    }

    // BEFORE SETTING NEW UPSTREAM
    // CLEAR OLD UPSTREAM
    let oldUpstream = dataObj[selectedCellAddress].upstream;

    for (let k = 0; k < oldUpstream.length; k++) {
        removeFromUpstream(selectedCellAddress, oldUpstream[i]);
    }




    dataObj[selectedCellAddress].upstream = elementsArray;

    for (let j = 0; j < elementsArray.length; j++) {
        addToDownstream(selectedCellAddress, elementsArray[j]);
    }

    let valObj = {};

    for(let j = 0 ; j < elementsArray.length ; j++ ){
        let formulaDependency = elementsArray[i];

        valObj[formulaDependency] = dataObj[formulaDependency].value;
    }

    for(let j = 0 ; j < formulaArr.length ; j++ ){
        if(valObj[formulaArr[j]]){
            formulaArr[j] = valObj[formulaArr[j]];
        }
    }

    formula = formulaArr.join(" ");
    let newValue = eval(formula);

    dataObj[selectedCellAddress].value = newValue;

    let selectedCellDownstream = dataObj[selectedCellAddress].downstream;

    for(let i = 0 ; i < selectedCellDownstream,length ; i++ ){
        updateDownstreamElements(selectedCellDownstream[i]);
    }

    oldCell.innerText = newValue;
    formulaInput.value = "";

});


function addToDoenstream(tobeAdded, inWhichWeAreAdding) {
    // get downstreamof the cell in which we have to add
    let reqDownstream = dataObj[inWhichWeAreAdding].downstream;

    reqDownstream.push(tobeAdded);
}




// C1 = 2 * A1

// dependent = C1
// onWhichItIsDepending = A1



function removeFromUpstream(dependenr, onWhichItIsDepending) {
    let newDownstream = [];

    let oldDownstream = dataObj[onWhichItIsDepending].downstream;

    for (let i = 0; i < oldDownstream.length; i++) {

        if (oldDownstream[i] != dependent)
            newDownstream.push(oldDownstream[i]);
    }

    function updateDownstreamElements(elementAddress){






    }
    dataObj[]
}

function updateDownstreamElements() {
    // 1- jiss element ko update kr rhe hai unki upstream elements ki current value leao
    let valObj = {};

    let currCellUpstream = dataObj[elementAddress].upstream; // [a1(20), b1(30)]

    for (let i = 0; i < currCellUpstream.length; i++) {
        let upstreamAddress = currCellUpstream[i];
        let upstreamCell
    }











    // updating on UI
    let cellOnUI = document.querySelector(`[data- ]`)
    cellOnUI.innerText

    // 6- 
    let currCellDownstream = dataObj[elementAddress].datastream;

    if (currCellDownstream.length > 0) {
        for ()
    }
}


