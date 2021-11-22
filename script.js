const time = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
// const oneHourAhead = moment().startOf('hour').fromNow();


// console.log(time)
document.getElementById("currentDay").innerHTML += "Schedule: " + time + "";

var tasks = JSON.parse(localStorage.getItem('container')) || [];


//Global Variables
var currentTime = new Date($.now());
console.log(currentTime);


var getTextInput = document.getElementById('#text-form');
// sets the var to be equal to the save button 
var buttonSave = document.getElementById('#button-save');



// using the click btn function to log when btn is clicked
// $(document).ready(function() {
// $("#sortableList").click(function() {
//     console.log("click")
//     
// })
// })




// uses the dropdown choice of hour to confirm what text box to add task or event to
function chooseHour() {
    var timeChoice = $("#hourlyTimeDropdown").val();
    var selection = $("select#hourlyTimeDropdown option:checked").val();
    $( "p.displayChoice" ).html( "<b>Selected Time:</b> " + timeChoice);
    // create a function that get the color coding of the timeblock based on the hour
    function getColorTime(){
    var timeColor = $('#timeColor');
    if (time === selection && timeChoice === selection){
        console.log('selected')
    } else if (time >= selection){
        $(timeColor).toggleClass("past");
    } else if (time <= selection){
        console.log('Current Hour selected')
    }else {
        console.log('not the right')
    };
    };
    getColorTime();
}
$("select").change(chooseHour);
chooseHour();

//When timeblock is clicked then event can be entered


function addText(){
    var save = $(".saveBtn").click().add().val('#text-form');
    var timeblock = document.getElementsByClassName("#container").val();
    
    timeblock.update($('<p>' + getTextInput + '</p>'));

}
//session storage & local storage //when the page is refreshed the events persist
    // add code here
    // window.localStorage.setItem(addText(timeblock));

// main functionality using jquery
$(document).ready(function() {
    
    $('#save').on('click', function(){
        // $('.past').hide();
        $('.past').hide();
    });
    


    //when save btn is clicked the the event is stored in local storage
    // saveBtn
    $(".saveBtn").click(function() {
        // console.log("click")
        
        console.log("click")
    });
    // trashBtn

    $(".trashBtn").click(function() {
        // console.log("click")
        // $(".displayText").remove("p");
        console.log("clickedtrashbtn")
        
    })
    // preventDefault();
    // var hour = time.getHours();
    
    
    // console.log(hour);
    
    
    
});
