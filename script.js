// main functionality using jquery
// using the click btn function to log when btn is clicked
// $(document).ready(function() {
// $("#sortableList").click(function() {
//     console.log("click")
//     
// })
// })

// new Date($.now());
// console.log(Date());


$(document).ready(function() {
    
    
    function chooseHour() {
        var timeChoice = $("#hourlyTimeDropdown").val();
        $("select#hourlyTimeDropdown option:checked").val();
        $( "p.displayChoice" ).html( "<b>Selected Time:</b> " + timeChoice);
    }
    $("select").change(chooseHour);
    chooseHour();
    // $.submit(function(e){
    //     e.preventDefault();
    //     var time = $('select#hourlyTimeDropdown').val();
    //     console.log(time)
    //     console.log(e.target.value);
    // })
    // $('select#hourlyTimeDropdown').change(function(e){

    //     console.log(e.target.value);
    // })
    

    // create a function that get the color coding of the timeblock based on the hour
    function getColorTime(){
        var time = new Date($.now());
        var hour = time.getHours();
        console.log(hour);
        if (hour  > time ){
            console.log('selected')
        } else if ( hour < time){
            console.log('not quite the right hour')
        } else if (hour === time){
            console.log('Current Hour selected')
        }else {
            console.log('not the right')
        }
    }

    //When timeblock is clicked then event can be entered
getColorTime();

    //when save btn is clicked the the event is stored in local storage
    // saveBtn
    $(".saveBtn").click(function() {
        // console.log("click")
        
        console.log("click")
    });
    // trashBtn

    $(".trashBtn").click(function() {
        // console.log("click")
        $(".displayText").remove("p");
        console.log("clickedtrashbtn")
        
    })
    // preventDefault();

    //when the page is refreshed the events persist
    
});



// 