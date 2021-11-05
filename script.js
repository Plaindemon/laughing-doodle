// main functionality using jquery
// using the click btn function to log when btn is clicked
// $(document).ready(function() {
// $("#sortableList").click(function() {
//     console.log("click")
//     
// })
// })


$(document).ready(function() {
    
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


});



// 