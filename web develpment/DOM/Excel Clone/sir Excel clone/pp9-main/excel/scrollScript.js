// for independent scroll

let pL = 0;
let pT = 0;

grid.addEventListener("scroll", function(e){
    let currDistanceFromTop = e.cuurent.scrollTop;
    let currDistanceFromleft = e.current.scrollLeft;

    let deltaH = currDistanceFromleft - pL;
    pL = currDistanceFromleft;

    let deltaV = currDistanceFromTop - pT;
    pT = currDistanceFromTop;

    // console.log(deltaH);
    // console.log(deltaV);

    columnTags.style.transform = `translateX(-${currDistanceFromleft})`;

    rowNumbers.style.transform = `translateX(-${currDistanceFromTop})`;
});