let input = document.querySelector("#input");
let ul = document.querySelector("#list");

// // addEventListener => listen karta rahta hai, agar woo operation perform hua tho function wala work kara gaa

// // change => event & predefined
// // e => variable event
// input.addEventListener("change", function(e){ 
//     console.log(e.data);
// });

// input.addEventListener("click", function(){ // e => object, describe event, and which property have element( event handler ) 
//     console.log(1);
// });
 

input.addEventListener("keypress", function (e) { // e => event object, describe event => joo occur hoo raha hai
    console.log(e); // jonsi key press kari gai woo display kara gaa
    // console.log(e.key); // print the key which we press
    if (e.code == "Enter") // e.code => joo hamna key press kari hai woo batati hai konsi key hai
    {
        // value => property of input tag
        // console.log( e.currentTarget.value); // e.currentTarget => property hia, (reference of input tag)  input in this case, & its attribute value 
        let task = e.currentTarget.value;
        task = task.trim(); // .trim() => remove all extra spaces from front and last,  donot remove in b/w word spaces.
        if( task == "") // if we entered empty string, then return at that time from function
            return;

        // console.log(1);
        let li = document.createElement("li"); // document.createElement =>  create new empty element in html file called 'li'
        li.innerText = task.trim(); // we are putting task value( inputed in input tag ) in innerText of 'li' tag 


        // -------------------- REMOVING 'li' TAG WHEN WE DOUBLE CLICK ON THE 'li' TAG ON WEB PAGE ------------------
        // .addEventListener => listener of this event(double click), if occur then run that function
        li.addEventListener("dblclick", function(e){ // .addEventListener => duoble click karna pai uska sath vala function chala gaa
            e.currentTarget.remove(); // .remove() => delete selected element, remove the element on which we double click 
        });

        // li.addEventListener("dblclick", function(e){ // .addEventListener => duoble click karna pai uska sath vala function chala gaa
        //     e.currentTarget.remove(); // .remove() => delete selected element, remove the element on which we double click 
        // });


        ul.append(li); // ul tag ka andar 'li' dal dai gaa
        e.currentTarget.value = "";
    }
});




