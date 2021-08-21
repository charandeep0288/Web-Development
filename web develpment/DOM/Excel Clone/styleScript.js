let colorSpans = document.querySelectorAll(".color span");
let fontColorBtn = colorSpans[0]; 
let backgroundColorBtn = colorSpans[1]; 


let leftAlignBtn = alignmentSpans[0];
let centerAlignBtn = alignmentSpans[1];
let rightAlignBtn = alignmentSpans[2];

fontColorBtn.addEventListener("click", function(){
    // oldcell wala cell ko font color change

    let colorPicker = document.createElement("input");
    colorPicker.type = "color";

    colorPicker.addEventListener("change", function(){
        console.log(e.currentTarget.value);
        oldCell.styel.color = e.currentTarget.value;

        let address = lodCell.getAttribute("data-address");
        dataObj[address].color = e.currentTarget.value;
    });

    colorPicker.click();
});