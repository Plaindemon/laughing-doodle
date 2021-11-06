//Global Variables
var currentTime = new Date($.now());
console.log(currentTime);


var getTextInput = document.getElementById('#text-form');
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
    if (time === selection){
        console.log('selected')
    } else if (time > selection){
        console.log('not quite the right hour')
    } else if (time <= selection){
        console.log('Current Hour selected')
    }else {
        console.log('not the right')
    };
}
$("select").change(chooseHour);
chooseHour();
// create a function that get the color coding of the timeblock based on the hour
function getColorTime(){
    var colorTime = $('#hourlyTime');
    var getColor = document.getElementsByClassName('.past', '.present', '.future');
    // $(colorTime).add(time).toggleClass(getColor);
    
    $("div.timeColor").toggleClass(function() {
        // console.log("click")
       var getColor = document.getElementById('.timeColor', getColor);
       getColor.click("past");
        console.log(getColor)
    });
     
};

//When timeblock is clicked then event can be entered
// getColorTime();

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
