// ************************Chapter 46,48(EVENTS)*****Q1********
// function greet(a) {
//     alert("Hello World")
//       
//     }
//     greet();


// ************************Chapter 46,48(EVENTS)*****Q2********


// var hideButton = document.getElementById('hideButton')
// var elementToHide = document.getElementById('elementToHide')

// hideButton.addEventListener('click', function() {
//     elementToHide.style.display = 'none';})



// ************************Chapter 46,48(EVENTS)*****Q3******** 

// var link = document.getElementById("myLink")
// link.addEventListener("mouseout",function(){
//     link.style.color="blue"
// });


// ************************Chapter 46,48(EVENTS)*****Q4******** 

// var scrollToTopLink = document.getElementById("scrollToTopLink")
// scrollToTopLink.addEventListener("click",function(event){
//     event.preventDefault()
//     window.scrollTo({
//         top:0,
//         behaviour:"smooth"
//     })
// })

// ************************Chapter 46,48(EVENTS)*****Q5********  -->

// var playSoundLink = document.getElementById("playSoundLink");
// var audio = document.getElementById("myAudio")

// playSoundLink.addEventListener("click",function(event){
// event.preventDefault()
// audio.play();
// });

// ************************Chapter 46,48(EVENTS)*****Q6********  -->

// var openNewWindowLink = document.getElementById("openNewWindowLink");
// openNewWindowLink.addEventListener("click", function(event){
//     event.preventDefault()
//     window.open("https://www.google.com")
// }) 

// ************************Chapter 46,48(EVENTS)*****Q7********  --> 

// function greet(a) {
//         alert("Assalaam oa likum")

//         }
//         greet();

// ************************Chapter 46,48(EVENTS)*****Q9********  --> 

// var mySoundBtn = document.getElementById("mySoundBtn");
// var audio = document.getElementById("myAudioBtn")

// mySoundBtn.addEventListener("click",function(event){
// event.preventDefault()
// audio.play();
// });


// ************************Chapter 46,48(EVENTS)*****Q10******** -->
// var Btn = document.getElementById("myBtn")
// Btn.addEventListener("mouseout",function(){
//     Btn.style.color="blue"
//     alert("Hello World")
// });

// ************************Chapter 46,48(EVENTS)*****Q11********  -->

// var hideButton = document.getElementById('hideButton')
// var elementToHide = document.getElementById('elementToHide')

// hideButton.addEventListener('click', function() {
//     elementToHide.style.display = 'none';})

 // ************************Chapter 46,48(EVENTS)*****Q12********  -->

 // var openNewWindowLink = document.getElementById("openNewWindowLink");
// openNewWindowLink.addEventListener("click", function(event){
//     event.preventDefault()
//     window.open("https://www.google.com")
// }) 

// ************************Chapter 49,50(Reading And Setting find Values)*****Q1********  -->

// var user = prompt("Enter your name");
// switch (user) {
//   case "Aliraza":
//     console.log("hello Aliraza..");
//     break;
//   case "Nasir":
//     console.log("hello Nasir");
//     break;
//   case "Rohail":
//     console.log("hello Rohail");
//     break;
//   case "Ramzan":
//     console.log("hello Ramzan");
//     break;
//   default:
//     console.log("sorry...");
// }


// ************************Chapter 49,50(Reading And Setting find Values)*****Q2********  -->

// var checkbox = document.getElementById("myCheckbox");

// checkbox.addEventListener("change", function() {
//   if (checkbox.checked) {
//     console.log("Checkbox is checked.");
//   } else {
//     console.log("Checkbox is unchecked.");
//   }
// });


 // ************************Chapter 49,50(Reading And Setting find Values)*****Q3********  --> 

//  var select = document.getElementById("mySelect");

// function handleSelectionChange() {

//   var selectedValue = select.value;
  

//   console.log("Selected value: " + selectedValue);
// }


// select.addEventListener("change", handleSelectionChange);


// handleSelectionChange();


// ************************Chapter 49,50(Reading And Setting find Values)*****Q4********  --> 

// var field = document.getElementById("myField");

// field.textContent = "This is some text placed in the field.";

// ************************Chapter 49,50(Reading And Setting find Values)*****Q5********  --> 

// var married = confirm("Are you married? Click OK for yes, or Cancel for no.");

// var statusField = document.getElementById("status");

// if (married === false) {
//   statusField.textContent = "available";
// } else {
//   statusField.textContent = "not available";
// }

// ************************Chapter 49,50(Reading And Setting find Values)*****Q6********  --> 

// function fillInput() {
//     var input = document.getElementById("myInput");
  
//     if (input.value.trim() === "") {
  
//       input.value = "Default Value";
//     }
//   }

// ************************Chapter 49,50(Reading And Setting find Values)*****Q7********  --> 

function get() {
    var userInput = document.getElementById("userFullName");
    var userInput2 = document.getElementById("userEmail");
    var userInput3 = document.getElementById("userNumber");
  
    if (userInput.value && userInput2.value && userInput3.value) {
      console.log(userInput.value,
        userInput2.value,
        userInput3.value)
    } else {
      console.log("please enter your complete Information..");
    }
  }

